import React, {useEffect, useState} from "react";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


const FloatingButton = () => {
    let lastScrollY = window.scrollY;
    const audioUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-9b3cb.appspot.com/o/Ordinary_Confession_s.mp3?alt=media&token=5d45839e-c367-4843-b2f9-22e5bbbe3a14'

    // UP 버튼
    const [topBtnBottom, setTopBtnBottom] = useState(-5.2);
    const [rotation, setRotation] = useState(0);

    // 오디오 플레이어
    const audioEle = new Audio(audioUrl);
    const [audio] = useState<HTMLAudioElement>(audioEle);
    const [isPlaying, setIsPlaying] = useState(false);

    // 재생 정지 버튼 스타일
    const [muteBtnTop, setMuteBtnTop] = useState(2);

    // 상단으로
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const togglePlay = () => {
        if(audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.volume = 0.3;
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const initAudio = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 768) {
                if(isMobile) {
                    togglePlay()
                }
            }
        }
    }

    useEffect(() => {
        initAudio();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const bottomPosition = document.documentElement.scrollHeight - window.innerHeight;
            const visible = window.scrollY > 300; // 버튼을 300px 아래에서 보이게 하기 위한 조건

            if (window.scrollY === 0 || window.scrollY >= bottomPosition) {
                // 최상단 또는 최하단에 도달했을 때
                setMuteBtnTop(2); // 상단 버튼 노출
            } else if (window.scrollY > lastScrollY) {
                // 스크롤 내릴 때
                setMuteBtnTop(-5.2);
                setTopBtnBottom(visible ? 4.8 : -5.2); // 300px 아래에서만 하단 버튼 노출
            } else {
                // 스크롤 올릴 때
                setMuteBtnTop(2); // 300px 아래에서만 상단 버튼 노출
                setTopBtnBottom(visible ? 4.8 : -5.2); // 300px 아래에서만 하단 버튼 노출
            }

            lastScrollY = window.scrollY;

            // 현재 스크롤 위치에 따라 회전 각도 계산
            const rotation = window.scrollY % 360;
            setRotation(rotation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="toast" className="toast">
                <p>클립보드에 복사되었습니다.</p>
            </div>
            <button className="audio" style={{ top: `${muteBtnTop}rem` }} onClick={togglePlay}>
                {!isPlaying ? <i className="ic-mute" /> : <i className="ic-unmute" />}
            </button>
            <button className="top" style={{ bottom: `${topBtnBottom}rem`, transform: `rotate(${rotation}deg)` }} onClick={scrollToTop}>UP</button>
        </>
    )
}

export default FloatingButton
