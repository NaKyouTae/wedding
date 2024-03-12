import React, {useCallback, useEffect, useRef, useState} from 'react';
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';
import dayjs from "dayjs";

// audio player

import MyImage from './assets/img/album-img01.png';

declare const Kakao: any;
declare const naver: any;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvb6m0Lp8edEHjyaTYGq_R1FssnZiSdT8",
    authDomain: "wedding-9b3cb.firebaseapp.com",
    projectId: "wedding-9b3cb",
    storageBucket: "wedding-9b3cb.appspot.com",
    messagingSenderId: "497760462889",
    appId: "1:497760462889:web:aa9a13d383045a13e19438",
    measurementId: "G-QMHW4W7YS1"
};

function App() {
    const y = 37.5605777
    const x = 126.9673387
    const naverMapAppUrl = `nmap://navigation?dlat=${y}&dlng=${x}4&dname=%EB%A3%A8%EC%9D%B4%EB%B9%84%EC%8A%A4%EC%9B%A8%EB%94%A9%20%EC%A4%91%EA%B5%AC%EC%A0%90&appname=com.example.myapp`
    const tMapAppUrl = `tmap://route?goalx=${x}&goaly=${y}&goalname=%EB%A3%A8%EC%9D%B4%EB%B9%84%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98%20%EC%A4%91%EA%B5%AC%EC%A0%90`

    const weddingDate = dayjs('2024-05-18 13:20');
    const [count, setCount] = useState(0)
    const [startedCount, setStartedCount] = useState(false)

    const targetRef = useRef(null);

    const onClick = useCallback((url: string) => {
        window.open(url)
    }, []);

    const onCopy = useCallback(async (text: string) => {
        await navigator.clipboard.writeText(text);

        const toast = document.getElementById('toast') as HTMLElement
        const classList = toast.classList

        if(!classList.contains('active')) {
            toast.classList.add('active')
        }

        setTimeout(() => {
            toast.classList.remove('active')
        }, 1500)
    }, [])

    const onClickForKakao = useCallback(() => {
        Kakao.Navi.start({
            name: '루이비스 웨딩 중구점',
            x,
            y,
            coordType: 'wgs84',
        })
    }, [])

    const onShareKakao = useCallback(() => {
        if (Kakao) {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '나규태 ♡ 최보영 결혼합니다.',
                    imageUrl: 'https://naver.com', // 메인 이미지
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
    }, [])

    function getRemainingTime(): number {
        const today = dayjs();
        const remainingTime = weddingDate.diff(today);
        const remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));

        return remainingDays;
    }

    const onCall = (phoneNumber: string) => {
        window.open(`tel:${phoneNumber}`)
    }

    const sendSms = (phoneNumber: string) => {
        window.open(`sms:${phoneNumber}&body=`)
    }

    function easeOutExpo(t: number): number {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    }

    const countNum = (end: number, start = 0, duration = 2000) => {
        const frameRate = 1000 / 60
        const totalFrame = Math.round(duration / frameRate)

        let currentNumber = start
        const counter = setInterval(() => {
            const progress = easeOutExpo(++currentNumber / totalFrame)
            setCount(Math.round(end * progress))

            if (progress === 1) {
                clearInterval(counter)
            }
        }, frameRate)
    }

    useEffect(() => {
        AOS.init();

        const app = initializeApp(firebaseConfig);
        getAnalytics(app);
    })

    useEffect(() => {
        const initKakao = () => {
            Kakao.init('5a6eb9e30f5c017444702a8e4e9afb70');
        }

        if (!Kakao.isInitialized()) {
            initKakao();
        }
    }, [Kakao])

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = targetRef.current as unknown as HTMLElement;
            if (targetElement) {
                const { top, bottom } = targetElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // 특정 영역에 도달하면 실행할 코드를 여기에 작성하세요
                // if (top <= windowHeight && bottom >= 0 && !startedCount) {
                //     console.log('cnt', startedCount)
                //
                //     countNum(endDate, 0, 3000)
                //     setStartedCount(true)
                // }

                // console.log('targetElement', targetElement.classList.contains('aos-animate'))


                if (bottom <= (windowHeight + 10) || bottom <= (windowHeight - 10)) {

                    // console.log(count, bottom, windowHeight)
                    const endDate = getRemainingTime()
                    countNum(endDate, 0, 3000)
                    setStartedCount(true)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function setScreenSize() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        // 컴포넌트가 마운트될 때 resize 이벤트 등록
        // window.addEventListener('resize', setScreenSize);

        // 컴포넌트가 언마운트될 때 resize 이벤트 정리
        return () => {
            // window.removeEventListener('resize', setScreenSize);
        };
    }, []);

    useEffect(() => {
        const mapEl = document.getElementById('map')
        const latlng = new naver.maps.LatLng(y, x)
        const mapOptions = {
            center: latlng,
            zoom: 14
        };
        const map = new naver.maps.Map(mapEl, mapOptions);
        new naver.maps.Marker({
            position: latlng,
            map: map
        });
    }, [])

    useEffect(() => {
        console.log(`
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

-------------------------------------------------   만든 이. 나규태 최보영
        `);
      }, []);
   
    return (
        <div className="App">
            <div className="container">
                <div className="contents">
                    {/* <ReactPlayer url='./assets/mp3/Ordinary_Confession.mp3' /> */}
                    <div id="toast" className="toast">
                        <p>클립보드에 복사되었습니다.</p>
                    </div>
                    <div className="opening">
                        <h1>if(🤵🏻🤍👰🏻‍♀️) → marriage</h1>
                        <div className="img">
                            <img src={MyImage} alt="이미지" />
                        </div>
                        <div className="info">
                            <h2>나규태 그리고 최보영</h2>
                            <p>2024년 05월 18일 토요일 오후 1시 20분<br/>루이비스 웨딩 중구(단독홀)</p>
                        </div>
                    </div>
                    <div className="box">
                        <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🕊️</h2>
                        <div className="introduce">
                            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                                아홉 번째 봄을 같이 맞이하는 어느 날<br/>저희 드디어 결혼합니다.<br/><br/>
                                언제나처럼 평생의 친구이자 든든한 아군으로<br/>그리고 서로에게 유일한 사랑으로 머물겠습니다.<br/><br/>
                                저희 두 사람의 새로운 시작에<br/>그동안 아껴주시던 소중한 여러분들을 초대합니다.<br/>눈부실 여정, 그 설레는 첫걸음을 함께 빛내주세요.
                            </p>
                            <ul data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                                <li><p>나 성 원 ・ 성 춘 희</p>의 장남<h3>규 태</h3></li>
                                <li><p>최 해 철 ・ 이 현 정</p>의 장녀<h3>보 영</h3></li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">
                        <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">photo</h2>
                        <div className="photo-wrap" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <Swiper
                                slidesPerView={'auto'}
                                centeredSlides={true}
                                spaceBetween={16}
                                loop={true}
                                className="photoSwiper"
                            >
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>
                            {/* <div className="swiper photoSwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">Slide 1</div>
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                    <div className="swiper-slide">Slide 4</div>
                                    <div className="swiper-slide">Slide 5</div>
                                    <div className="swiper-slide">Slide 6</div>
                                    <div className="swiper-slide">Slide 7</div>
                                    <div className="swiper-slide">Slide 8</div>
                                    <div className="swiper-slide">Slide 9</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="box">
                        <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">location</h2>
                        <div id="map" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800"></div>
                        <div className="place" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <h3>루이비스 웨딩 중구</h3>
                            <ul>
                                <li><p>서울 중구 청파로 463 한국경제신문사</p><a onClick={() => onCopy('서울 중구 청파로 463')}>복사하기</a></li>
                                <li><p>T. 02 312 6800</p><a onClick={() => onCall('023126800')}>전화걸기</a></li>
                            </ul>
                            <div>
                                <button onClick={() => onClick(naverMapAppUrl)}><i
                                    className="ic-navermap"></i>네이버지도
                                </button>
                                <button onClick={onClickForKakao}><i
                                    className="ic-kakaonavi"></i>카카오내비
                                </button>
                                <button onClick={() => onClick(tMapAppUrl)}><i
                                    className="ic-tmap"></i>티맵
                                </button>
                            </div>
                        </div>
                        <ul className="traffic" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <li>
                                <h4>주차</h4>
                                <p>건물 내 지하 주차장 이용 (2시간 무료 주차)</p>
                            </li>
                            <li>
                                <h4>셔틀버스</h4>
                                <p>서울역 1・3번 출구 → 롯데마트(서부역) 앞 셔틀버스 <br/>탑승 (10분 간격 상시 운행)</p>
                            </li>
                            <li>
                                <h4>지하철</h4>
                                <p>2호선 / 5호선 충정로역 4번 출구 하차 → 도보 3분</p>
                            </li>
                            <li>
                                <h4>버스</h4>
                                <div>
                                    <p>한국경제신문사・서소문역사공원 정류장 하차</p>
                                    <ul>
                                        <li>간선 : 370, 603</li>
                                        <li>지선 : 7011, 7013A, 7013B, 7017</li>
                                        <li>공항 : 6015</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">contact</h2>
                        <ul className="contact" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <li>
                                <h3>🤵🏻 신랑 나규태</h3>
                                <div>
                                    <a onClick={() => sendSms('01091092682')}>문자 보내기</a>
                                    <a onClick={() => onCall('01091092682')}>전화 걸기</a>
                                </div>
                            </li>
                            <li>
                                <h3>👰🏻‍♀️ 신부 최보영</h3>
                                <div>
                                    <a onClick={() => sendSms('01085511423')}>문자 보내기</a>
                                    <a onClick={() => onCall('01085511423')}>전화 걸기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🤍</h2>
                        <ul className="account" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <li>
                                <h3>🤵🏻 신랑 측 계좌번호</h3>
                                <ul>
                                    <li>토스뱅크 1000-5055-8487</li>
                                    <li>나규태</li>
                                </ul>
                                <div>
                                    <a onClick={() => onCopy('100050558487')}>계좌 복사하기</a>
                                    <a onClick={() => onClick('https://link.kakaopay.com/_/gbCaAUM')}><i className="ic-kakaotalk"></i>카카오페이 송금하기</a>
                                </div>
                            </li>
                            <li>
                                <h3>👰🏻‍♀️ 신부 측 계좌번호</h3>
                                <ul>
                                    <li>토스뱅크 1000-2298-9148</li>
                                    <li>최보영</li>
                                </ul>
                                <div>
                                    <a onClick={() => onCopy('100022989148')}>계좌 복사하기</a>
                                    <a onClick={() => onClick('https://link.kakaopay.com/_/0C7aeoq')}><i className="ic-kakaotalk"></i>카카오페이 송금하기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">in May</h2>
                        <div className="calendar" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <ul className="week">
                                <li>일</li>
                                <li>월</li>
                                <li>화</li>
                                <li>수</li>
                                <li>목</li>
                                <li>금</li>
                                <li>토</li>
                            </ul>
                            <ul className="day">
                                <li className="prev"><p>28</p></li>
                                <li className="prev"><p>29</p></li>
                                <li className="prev"><p>30</p></li>
                                <li><p>1</p></li>
                                <li><p>2</p></li>
                                <li><p>3</p></li>
                                <li><p>4</p></li>
                                <li><p>5</p></li>
                                <li><p>6</p></li>
                                <li><p>7</p></li>
                                <li><p>8</p></li>
                                <li><p>9</p></li>
                                <li><p>10</p></li>
                                <li><p>11</p></li>
                                <li><p>12</p></li>
                                <li><p>13</p></li>
                                <li><p>14</p></li>
                                <li><p>15</p></li>
                                <li><p>16</p></li>
                                <li><p>17</p></li>
                                <li className="point"><p>18</p></li>
                                <li><p>19</p></li>
                                <li><p>20</p></li>
                                <li><p>21</p></li>
                                <li><p>22</p></li>
                                <li><p>23</p></li>
                                <li><p>24</p></li>
                                <li><p>25</p></li>
                                <li><p>26</p></li>
                                <li><p>27</p></li>
                                <li><p>28</p></li>
                                <li><p>29</p></li>
                                <li><p>30</p></li>
                                <li><p>31</p></li>
                                <li className="next"><p>1</p></li>
                            </ul>
                        </div>
                        <p ref={targetRef} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">2024년 05월 18일 토요일 오후 1시 20분<br/>규태 ♡ 보영 진짜 부부 되기까지 <span>{count}일</span></p>
                    </div>
                    <div className="box">
                        <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">to my loved ones</h2>
                        <p className="thanks" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">응원하고 축하해 주신 모든 분들께 감사드립니다.<br/>보내주신 마음 잊지 않고 행복하게 잘 살겠습니다.</p>
                        <div className="copy" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <button onClick={onShareKakao}>카카오톡 공유하기</button>
                            <button onClick={() => onCopy('https://저희결혼합니다.com')}>링크 복사하기</button>
                        </div>
                    </div>
                    <p className="copyright">만든 이. 나규태 최보영</p>
                </div>
            </div>
        </div>
    );
}

export default App;
