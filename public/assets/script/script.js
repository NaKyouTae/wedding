$(document).ready(function(){
    AOS.init();
    Kakao.init('5a6eb9e30f5c017444702a8e4e9afb70');
    Kakao.isInitialized();

    const y = 37.5605777;
    const x = 126.9673387;
    const mapEl = document.getElementById('map');
    const latlng = new naver.maps.LatLng(y, x);

    if(latlng) {
        const mapOptions = {
            center: latlng,
            zoom: 14
        };
        const map = new naver.maps.Map(mapEl, mapOptions);
        new naver.maps.Marker({
            position: latlng,
            map: map
        });
    }

    const naverMapAppUrl = `nmap://navigation?dlat=${y}&dlng=${x}4&dname=%EB%A3%A8%EC%9D%B4%EB%B9%84%EC%8A%A4%EC%9B%A8%EB%94%A9%20%EC%A4%91%EA%B5%AC%EC%A0%90&appname=com.example.myapp`
    const tMapAppUrl = `tmap://route?goalx=${x}&goaly=${y}&goalname=%EB%A3%A8%EC%9D%B4%EB%B9%84%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98%20%EC%A4%91%EA%B5%AC%EC%A0%90`
    const subway = 'https://firebasestorage.googleapis.com/v0/b/wedding-9b3cb.appspot.com/o/train.MP4?alt=media&token=6c255d96-fc2e-4b49-8dfd-da91493140e7'
    const train = 'https://firebasestorage.googleapis.com/v0/b/wedding-9b3cb.appspot.com/o/subway.MP4?alt=media&token=df26725b-3512-44c8-a164-63c1970c6130'

    const onClickTo = ((url) => {
        window.open(url)
    });

    const onCall = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`)
    }

    const sendSms = (phoneNumber) => {
        window.open(`sms:${phoneNumber}&body=`)
    }

    const onCopy = (async (text) => {
        await navigator.clipboard.writeText(text);

        const toast = document.getElementById('toast');
        const classList = toast.classList

        if(!classList.contains('active')) {
            toast.classList.add('active')
        }

        setTimeout(() => {
            toast.classList.remove('active')
        }, 1500)
    })

    let isPlaying = true;
    let audio = document.getElementById('audio');

    const togglePlay = () => {
        alert(`audio ${audio} ${isPlaying}`)
        console.log('audio 1', audio);
        if(audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.volume = 0.3;
                audio.play();
            }
            isPlaying = !isPlaying;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const onClickToForKakao = () => {
        Kakao.Navi.start({
            name: '루이비스 웨딩 중구점',
            x,
            y,
            coordType: 'wgs84',
        })
    };

    const onShareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '나규태 ♡ 최보영 결혼합니다.',
                imageUrl: ' https://firebasestorage.googleapis.com/v0/b/wedding-9b3cb.appspot.com/o/thumbnail01.png?alt=media&token=68a706bb-fb80-44f9-beb6-4f11d940abaf', // 메인 이미지
                description: '5/18(토) 13:20 루이비스 중구',
                link: {
                    mobileWebUrl: 'https://저희결혼합니다.com',
                },
            },
            buttons: [
                {
                    title: '청첩장으로 이동',
                    link: {
                        mobileWebUrl: 'https://저희결혼합니다.com',
                    },
                },
            ],
        });
    }
});