class GameController {
    constructor(gameName) {
        this.gameName = gameName;
        this.isPaused = false;
        this.difficulty = 'normal';
        this.score = 0;
        this.highScores = [];
        this.soundEnabled = true;
        
        // 初始化音效
        SoundManager.init();
        
        // 加载高分
        this.loadHighScores();
        
        // 添加键盘事件监听
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P') {
                this.togglePause();
            }
            if (e.key === 'm' || e.key === 'M') {
                this.toggleSound();
            }
        });
    }
    
    // 暂停/继续
    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            SoundManager.stop('bgm');
            this.showPauseMenu();
        } else {
            SoundManager.play('bgm');
            this.hidePauseMenu();
        }
    }
    
    // 显示暂停菜单
    showPauseMenu() {
        const menu = document.createElement('div');
        menu.id = 'pauseMenu';
        menu.innerHTML = `
            <div class="pause-menu">
                <h2>游戏暂停</h2>
                <button onclick="game.togglePause()">继续游戏</button>
                <button onclick="game.restart()">重新开始</button>
                <button onclick="game.toggleSound()">
                    ${this.soundEnabled ? '关闭声音' : '开启声音'}
                </button>
                <button onclick="window.location.href='index.html'">返回主页</button>
            </div>
        `;
        document.body.appendChild(menu);
    }
    
    // 隐藏暂停菜单
    hidePauseMenu() {
        const menu = document.getElementById('pauseMenu');
        if (menu) {
            menu.remove();
        }
    }
    
    // 切换声音
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        SoundManager.setVolume(this.soundEnabled ? 1 : 0);
    }
    
    // 保存分数
    saveScore(score, additionalData = {}) {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
        if (!leaderboard[this.gameName]) {
            leaderboard[this.gameName] = [];
        }
        
        const playerName = prompt('请输入你的名字：') || 'Anonymous';
        const scoreData = {
            name: playerName,
            score: score,
            difficulty: this.difficulty,
            date: new Date().toLocaleDateString(),
            ...additionalData
        };
        
        leaderboard[this.gameName].push(scoreData);
        leaderboard[this.gameName].sort((a, b) => b.score - a.score);
        leaderboard[this.gameName] = leaderboard[this.gameName].slice(0, 10);
        
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        this.loadHighScores();
    }
    
    // 加载高分
    loadHighScores() {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
        this.highScores = leaderboard[this.gameName] || [];
    }
    
    // 显示高分榜
    showHighScores() {
        const scoresHtml = this.highScores
            .map((score, index) => `
                <div class="score-item">
                    <span>${index + 1}. ${score.name}</span>
                    <span>${score.score} (${score.difficulty})</span>
                </div>
            `)
            .join('');
            
        const dialog = document.createElement('div');
        dialog.className = 'high-scores-dialog';
        dialog.innerHTML = `
            <div class="dialog-content">
                <h2>高分榜</h2>
                <div class="scores-list">
                    ${scoresHtml || '<p>暂无记录</p>'}
                </div>
                <button onclick="this.parentElement.parentElement.remove()">关闭</button>
            </div>
        `;
        document.body.appendChild(dialog);
    }
} 