import {useCallback} from "react";

export const onCopy = (async (text: string) => {
    await navigator.clipboard.writeText(text);

    const toast = document.getElementById('toast') as HTMLElement
    const classList = toast.classList

    if(!classList.contains('active')) {
        toast.classList.add('active')
    }

    setTimeout(() => {
        toast.classList.remove('active')
    }, 1500)
})

export const onClick = ((url: string) => {
    window.open(url)
});

export const onCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`)
}

export const sendSms = (phoneNumber: string) => {
    window.open(`sms:${phoneNumber}&body=`)
}
