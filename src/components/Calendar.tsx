import React, {useEffect, useRef, useState} from "react";
import dayjs from "dayjs";


dayjs.locale('ko')

const Calendar = () => {
    const weddingDate = dayjs('2024-05-18 13:20');

    const targetRef = useRef(null);

    const [isExecuted, setIsExecuted] = useState(false);
    const [count, setCount] = useState(0)

    function getRemainingTime(): number {
        const today = dayjs();
        const remainingTime = weddingDate.diff(today);
        return Math.floor(remainingTime / (24 * 60 * 60 * 1000));
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
        const handleScroll = () => {
            // 특정 div와의 교차 여부 확인
            const targetElement = targetRef.current as unknown as HTMLElement;
            const rect = targetElement.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

            // 한 번만 실행되도록 처리
            if (isInView) {
                if(!isExecuted) {
                    // 실행할 코드 작성
                    const endDate = getRemainingTime()
                    countNum(endDate, 0, 3000)

                    // 한 번 실행되었음을 상태로 표시
                    setIsExecuted(true);
                }
            } else {
                if(isExecuted) {
                    setIsExecuted(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isExecuted]);


    return (
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
            <p ref={targetRef} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                2024년 05월 18일 토요일 오후 1시 20분<br/>규태 ♡ 보영 진짜 부부 되기까지 <span>{count}일</span>
            </p>
        </div>
    )
}

export default Calendar
