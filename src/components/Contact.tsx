import React from "react";
import {onClick, onCall, sendSms, onCopy} from "../utils/Copy";

const Contact = () => {
    return (
        <div className="box">
            <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🤍</h2>
            <ul className="contact" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <li>
                    <h3>🤵🏻 신랑 나규태</h3>
                    <ul>
                        <li>
                            <p>토스뱅크 1000-5055-8487 나규태</p>
                            <a onClick={() => onCopy('100050558487')}>복사하기</a>
                        </li>
                        <li>
                            <button onClick={() => onClick('https://link.kakaopay.com/_/gbCaAUM')}><i className="ic-kakaotalk"></i>카카오페이 송금 바로가기</button>
                        </li>
                        <li>
                            <button onClick={() => sendSms('01091092682')}>문자 보내기</button>
                            <button onClick={() => onCall('01091092682')}>전화 걸기</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>👰🏻‍♀️ 신부 최보영</h3>
                    <ul>
                        <li>
                            <p>토스뱅크 1000-2298-9148 최보영</p>
                            <a onClick={() => onCopy('100022989148')}>복사하기</a>
                        </li>
                        <li>
                            <button onClick={() => onClick('https://link.kakaopay.com/_/0C7aeoq')}><i className="ic-kakaotalk"></i>카카오페이 송금 바로가기</button>
                        </li>
                        <li>
                            <button onClick={() => sendSms('01085511423')}>문자 보내기</button>
                            <button onClick={() => onCall('01085511423')}>전화 걸기</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Contact
