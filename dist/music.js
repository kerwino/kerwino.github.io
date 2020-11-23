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
            name: 'name1',
            artist: 'artist1',
            url: 'url1.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});