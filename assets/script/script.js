$(document).ready(function() {
    AOS.init();

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
    navigator.clipboard.writeText(text).then(() => {
        var $toast = $('#toast');

        if(!$toast.hasClass('active')) {
            $toast.addClass('active');
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
    window.open(`sms:${number}&body=`)
}

// naver map, tmap
function clickTo(url) {
    window.open(url);
}

