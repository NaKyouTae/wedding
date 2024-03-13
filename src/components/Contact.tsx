import React from "react";
import {onCall, sendSms} from "../utils/Copy";

const Contact = () => {
    return (
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
    )
}

export default Contact
