import MyImage from "../../public/assets/img/photo/photo00.jpg";
import React from "react";

const Opening = () => {
    return (
        <div className="opening">
            <h1>if(🤵🏻🤍👰🏻‍♀️) → marriage</h1>
            <div className="img" style={{backgroundImage: `url(${MyImage})`}}>
            </div>
            <div className="info">
                <h2>나규태 그리고 최보영</h2>
                <p>2024년 5월 18일 토요일 오후 1시 20분<br/>루이비스 웨딩 중구(단독홀)</p>
            </div>
        </div>
    )
}

export default Opening
