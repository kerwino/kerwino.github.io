const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    mini: false,
    autoplay: false,
    theme: '#303030',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.3,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '烦恼歌',
            artist: '张学友',
            url: 'http://m7.music.126.net/20201124211126/c6a9a82b47dc6c90ed18dde58bc44fa7/ymusic/4ed1/a3f0/6fdf/434b647d5965c6b668e3c089df4ee248.mp3',
            cover: '/images/cover.png',
        },
        {
            name: '风的季节',
            artist: 'Soler',
            url: 'http://m7.music.126.net/20201124211505/3fd8931e90c7cd7fdaaab21e04b86c3e/ymusic/9f99/ddc9/462b/00ba269347ae7aee655557dc9c4a6720.mp3',
            cover: '/images/cover.png',
        },
        {
            name: '岁月神偷',
            artist: '金玟岐',
            url: 'http://m8.music.126.net/20201124212057/54908b74c784fb3875a913fad8b5956f/ymusic/10ad/ecdc/b6e0/1db87400ccb4d86ece611f5a17d72948.mp3',
            cover: '/images/cover.png'
        }
    ]
});