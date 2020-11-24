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
    lrcType: 3,
    audio: [
        {
            name: '烦恼歌',
            artist: '张学友',
            url: '/music/烦恼歌.mp3',
            cover: '/images/cover.png',
            lrc: '/music/lrc/烦恼歌.lrc'

        },
        {
            name: '风的季节',
            artist: 'Soler',
            url: '/music/风的季节.mp3',
            cover: '/images/cover.png',
            lrc: '/music/lrc/风的季节.lrc'
        },
        {
            name: '岁月神偷',
            artist: '金玟岐',
            url: '/music/岁月神偷.mp3',
            cover: '/images/cover.png',
            lrc: '/music/lrc/岁月神偷.lrc'
        }
    ]
});