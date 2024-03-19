import {onCall, onClick, onCopy} from "../utils/Copy";
import React, {useCallback, useEffect} from "react";

const y = 37.5605777
const x = 126.9673387

const naverMapAppUrl = `nmap://navigation?dlat=${y}&dlng=${x}4&dname=%EB%A3%A8%EC%9D%B4%EB%B9%84%EC%8A%A4%EC%9B%A8%EB%94%A9%20%EC%A4%91%EA%B5%AC%EC%A0%90&appname=com.example.myapp`
const tMapAppUrl = `tmap://route?goalx=${x}&goaly=${y}&goalname=%EB%A3%A8%EC%9D%B4%EB%B9%84%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98%20%EC%A4%91%EA%B5%AC%EC%A0%90`

declare const Kakao: any;
declare const naver: any;

const LocationInfo = () => {
    const onClickForKakao = useCallback(() => {
        Kakao.Navi.start({
            name: '루이비스 웨딩 중구점',
            x,
            y,
            coordType: 'wgs84',
        })
    }, [])

    useEffect(() => {
        if(naver.maps) {
            const mapEl = document.getElementById('map')
            const latlng = new naver.maps.LatLng(y, x)
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
        }
    }, [])

    return (
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
                    <div className="shuttle">
                        <a>지하철역 출발(영상)</a>
                        <a>기차역 출발(영상)</a>
                    </div>
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
    )
}

export default LocationInfo
