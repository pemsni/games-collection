// 创建音效管理器
const SoundManager = {
    sounds: {},
    
    // 初始化音效
    init() {
        this.sounds = {
            click: new Audio('assets/sounds/click.mp3'),
            success: new Audio('assets/sounds/success.mp3'),
            fail: new Audio('assets/sounds/fail.mp3'),
            move: new Audio('assets/sounds/move.mp3'),
            bgm: new Audio('assets/sounds/bgm.mp3')
        };
        
        // 设置背景音乐循环
        this.sounds.bgm.loop = true;
    },
    
    // 播放音效
    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play();
        }
    },
    
    // 停止音效
    stop(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].pause();
            this.sounds[soundName].currentTime = 0;
        }
    },
    
    // 设置音量
    setVolume(volume) {
        Object.values(this.sounds).forEach(sound => {
            sound.volume = volume;
        });
    }
}; 