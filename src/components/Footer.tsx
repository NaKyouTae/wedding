import React, {useCallback} from "react";
import {onCopy} from "../utils/Copy";

declare const Kakao: any;

const Footer = () => {
    const onShareKakao = useCallback(() => {
        if (Kakao) {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '나규태 ♡ 최보영 결혼합니다.',
                    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/wedding-9b3cb.appspot.com/o/thumbnail.png?alt=media&token=c1716871-6a30-4fdb-bc2f-59f0bdd36989', // 메인 이미지
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

    return (
        <>
            <div className="box">
                <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">to my loved ones</h2>
                <p className="thanks" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">응원하고 축하해 주신 모든 분들께 감사드립니다.<br/>보내주신 마음 잊지 않고 행복하게 잘 살겠습니다.</p>
                <div className="copy" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <button onClick={onShareKakao}>카카오톡 공유하기</button>
                    <button onClick={() => onCopy('https://저희결혼합니다.com')}>링크 복사하기</button>
                </div>
            </div>
            <p className="copyright">만든 이. 나규태 최보영</p>
        </>
    )
}

export default Footer
