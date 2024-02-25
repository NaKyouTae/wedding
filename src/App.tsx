import React, {useCallback, useEffect} from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

declare const Kakao: any;

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
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const onClick = useCallback((url: string) => {
        window.open(url)
    }, []);

    const onClickForKakao = useCallback(() => {
        Kakao.Navi.start({
            name: '루이비스 웨딩 중구점',
            x: 37.5601,
            y: 126.9672,
        })
    }, [])

    useEffect(() => {
        console.log('KAKAO INIT !!', Kakao.isInitialized());

        const initKakao = () => {
            Kakao.init('5a6eb9e30f5c017444702a8e4e9afb70');
        }

        if (!Kakao.isInitialized()) {
            initKakao();
        }
    }, [Kakao])

    return (
        <div className="App">
            <div className="container">
                <div className="contents">
                    <div className="opening">
                        <h1>if(🤵🏻🤍👰🏻‍♀️) → marriage</h1>
                        <div className="img"></div>
                        <div className="info">
                            <h2>나규태 그리고 최보영</h2>
                            <p>2024년 05월 18일 토요일 오후 1시 20분<br/>루이비스 웨딩 중구(단독홀)</p>
                        </div>
                    </div>
                    <div className="box">
                        <h2 className="ico">🕊️</h2>
                        <div className="introduce">
                            <p>
                                아홉 번째 봄을 같이 맞이하는 어느 날<br/>저희 드디어 결혼합니다.<br/><br/>
                                언제나처럼 평생의 친구이자 든든한 아군으로<br/>그리고 서로에게 유일한 사랑으로 머물겠습니다.<br/><br/>
                                저희 두 사람의 새로운 시작에<br/>그동안 아껴주시던 소중한 여러분들을 초대합니다.<br/>눈부실 여정, 그 설레는 첫걸음을 함께 빛내주세요.
                            </p>
                            <ul>
                                <li><p>나 성 원 ・ 성 춘 희</p>의 장남<h3>규 태</h3></li>
                                <li><p>최 해 철 ・ 이 현 정</p>의 장녀<h3>보 영</h3></li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">
                        <h2>photo</h2>
                        <div className="photo-wrap">
                            <div className="swiper photoSwiper">
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
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2>location</h2>
                        <div id="map"></div>
                        <div className="place">
                            <h3>루이비스 웨딩 중구</h3>
                            <ul>
                                <li><p>서울 중구 청파로 463 한국경제신문사</p><a>복사하기</a></li>
                                <li><p>T. 02 312 6800</p><a href='tel:023126800'>전화걸기</a></li>
                            </ul>
                            <div>
                                <button onClick={() => onClick('https://naver.me/IFjIouHj')}><i
                                    className="ic-navermap"></i>네이버지도
                                </button>
                                <button onClick={onClickForKakao}><i
                                    className="ic-kakaonavi"></i>카카오내비1
                                </button>
                                <button onClick={() => onClick('https://surl.tmobiapi.com/e5eb10bf')}><i
                                    className="ic-tmap"></i>티맵
                                </button>
                            </div>
                        </div>
                        <ul className="traffic">
                            <li>
                                <h4>🚗 주차 안내</h4>
                                <p>건물 내 지하 주차장 이용 (2시간 무료 주차)</p>
                            </li>
                            <li>
                                <h4>🚌 셔틀버스 안내</h4>
                                <p>서울역 1・3번 출구 → 롯데마트(서부역) 앞 셔틀버스<br/>탑승 (10분 간격 상시 운행)</p>
                            </li>
                            <li>
                                <h4>🚇 지하철 안내</h4>
                                <p>2호선 / 5호선 충정로역 4번 출구 하차 → 도보 3분</p>
                            </li>
                            <li>
                                <h4>🚍 버스 안내</h4>
                                <p>한국경제신문사・서소문역사공원 정류장 하차<br/>- 간선 : 370, 603<br/>- 지선 : 7011, 7013A, 7013B, 7017<br/>- 공항
                                    : 6015</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>contact</h2>
                        <ul className="contact">
                            <li>
                                <p>🤵🏻 신랑 나규태</p>
                                <div>
                                    <button>문자</button>
                                    <button>카카오톡</button>
                                </div>
                            </li>
                            <li>
                                <p>👰🏻‍♀️ 신부 최보영</p>
                                <div>
                                    <button>문자</button>
                                    <button>카카오톡</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2 className="ico">🤍</h2>
                        <ul className="account">
                            <li>
                                <h3>🤵🏻 신랑측 계좌번호</h3>
                                <ul>
                                    <li><p>토스뱅크 1000-5055-8487 나규태</p><a>복사하기</a></li>
                                    <li>
                                        <button><i className="ic-kakaotalk"></i>카카오페이 송금 바로가기</button>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>👰🏻‍♀️ 신부측 계좌번호</h3>
                                <ul>
                                    <li><p>토스뱅크 1000-2298-9148 최보영</p><a>복사하기</a></li>
                                    <li>
                                        <button><i className="ic-kakaotalk"></i>카카오페이 송금 바로가기</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <p className="thanks">응원하고 축하해 주신 모든 분들께 감사드립니다.<br/>보내주신 마음 잊지 않고 행복하게 잘 살겠습니다.</p>
                        <div className="copy">
                            <button>카카오톡 공유하기</button>
                            <button>링크 복사하기</button>
                        </div>
                    </div>
                    <p className="copyright">copyright</p>
                </div>
            </div>
        </div>
    );
}

export default App;
