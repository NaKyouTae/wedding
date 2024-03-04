import ReactDOM from "react-dom";

function showToast(message: string, duration: number) {
    const toastRoot = document.createElement('div');
    document.body.appendChild(toastRoot);

    const Toast = ({ message }: { message: string }) => (
        <div className="toast">
            <p>{message}</p>
        </div>
    );

    ReactDOM.render(<Toast message={message} />, toastRoot);

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(toastRoot);
        document.body.removeChild(toastRoot);
    }, duration);
}

export default showToast