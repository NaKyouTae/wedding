$(document).ready(function() {
    window.AOS.init();
    window.Kakao.init('5a6eb9e30f5c017444702a8e4e9afb70');
    window.Kakao.isInitialized();

    // console draw
    const initDraw = `
                        _  .-')
                    ( \\( -O )
.-'),-----.  ,--. ,--.  ,------.
( OO'  .-.  ' |  | |  |  |   /\`. '
/   |  | |  | |  | | .-')|  /  | |
\_) |  |\\|  | |  |_|( OO )  |_.' |
\\ |  | |  | |  | | \`-' /  .  '.'
\`'  '-'  '('  '-'(_.-'|  |\\  \\
    \`-----'   \`-----'   \`--' '--'
(\`\\ .-') /\`  ('-.  _ .-') _  _ .-') _               .-') _
\`.( OO ),'_(  OO)( (  OO) )( (  OO) )             ( OO ) )
,--./  .--. (,------.\\     .'_ \\     .'_  ,-.-') ,--./ ,--,' ,----.
|      |  |  |  .---',\`'--..._),\`'--..._) |  |OO)|   \\ |  |\\'  .-./-')
|  |   |  |, |  |    |  |  \\  '|  |  \\  ' |  |  \\|    \\|  | )  |_( O- )
|  |.'.|  |_||  '--. |  |   ' ||  |   ' | |  |(_/|  .     |/|  | .--, \\
|         |  |  .--' |  |   / :|  |   / :,|  |_.'|  |\\    |(|  | '. (_/
|   ,'.   |  |  \`---.|  '--'  /|  '--'  (_|  |   |  | \\   | |  '--'  |
'--'   '--'  \`------'\`-------' \`-------'  \`--'   \`--'  \`--'  \`------'

-------------------------------------------------   만든 이. 나규태 최보영`;
    console.log(initDraw);

    // floating button
    let lastScrollY = 0;

    $(window).scroll(function() {
        const bottomPosition = $(document).height() - $(window).height();
        const visible = $(window).scrollTop() > 300; // 버튼을 300px 아래에서 보이게 하기 위한 조건

        if ($(window).scrollTop() === 0 || $(window).scrollTop() >= bottomPosition) {
            // 최상단 또는 최하단에 도달했을 때
            $('.audio').css('top', '2rem');
        } else if ($(window).scrollTop() > lastScrollY) {
            // 스크롤 내릴 때
            $('.audio').css('top', '-5.2rem');
            if(visible) {
                $('.top').css('bottom', '4.8rem'); // 300px 아래에서만 하단 버튼 노출
            } else {
                $('.top').css('bottom', '-5.2rem');
            }
        } else {
            // 스크롤 올릴 때
            $('.audio').css('top', '2rem');
            if(visible) {
                $('.top').css('bottom', '4.8rem'); // 300px 아래에서만 하단 버튼 노출
            } else {
                $('.top').css('bottom', '-5.2rem');
            }
        }

        lastScrollY = $(window).scrollTop();

        // 현재 스크롤 위치에 따라 회전 각도 계산
        const rotation = $(window).scrollTop() % 360;
        $('.top').css({'transform': `rotate(${rotation}deg)`});
    });

    let isExecuted = false;

    $(window).scroll(function() {
        const animateValue = (obj, start, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const today = new Date();
                const targetDate = new Date('2024-05-18');
                const diffTime = Math.abs(targetDate - today);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                obj.innerHTML = `${Math.floor(progress * (diffDays - start) + start)}일`;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const obj = document.getElementById("countTarget");
        const rect = obj.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        // 한 번만 실행되도록 처리
        if (isInView) {
            if(!isExecuted) {
                // 실행할 코드 작성
                animateValue(obj, 0, 3000);

                // 한 번 실행되었음을 상태로 표시
                isExecuted = true;
            }
        } else {
            if(isExecuted) {
                isExecuted = false;
            }
        }
    });

    // scroll top
    $('.top').click(function(){
		window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
	});

    // toggle play
    $('.audio').click(function(){
        let audio = $('#audio')[0];

        if (audio.paused) {
            audio.play();
            $('.audio .ic-unmute').css('background-image', 'url(/assets/img/ico/ic-unmute.svg)');
        } else {
            audio.pause();
            $('.audio .ic-unmute').css('background-image', 'url(/assets/img/ico/ic-mute.svg)');
        }
    });

});

// copy
function onCopy(text) {
    const userAgent = navigator.userAgent;

    alert(userAgent);

    navigator.clipboard.writeText(text).then(() => {
        var $toast = $('#toast');

        if (/iPhone|iPad|iPod/i.test(userAgent)) {
            if (!$toast.hasClass('active')) {
                $toast.addClass('active');
            }
        }

        setTimeout(() => {
            $toast.removeClass('active');
        }, 1500);
    });
}

// call
function onCall(number) {
    window.open(`tel:${number}`);
}

// massage
function sendSms(number) {
    const userAgent = navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        console.log("iOS 디바이스입니다.");
        // iOS 디바이스에 대한 코드를 여기에 작성
        window.open(`sms:${number}&body=`)
    } else {
        console.log("다른 유형의 디바이스입니다.");
        // 기타 디바이스에 대한 처리를 여기에 작성
        window.open(`sms:${number}?body=`)
    }
}

// naver map, tmap
function clickTo(url) {
    window.open(url);
}

function onShareKakao() {
    window.Kakao.Share.sendDefault({
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

function clickToKakao() {
    const y = 37.5605777;
    const x = 126.9673387;

    window.Kakao.Navi.start({
        name: '루이비스 웨딩 중구점',
        x,
        y,
        coordType: 'wgs84',
    })
};
