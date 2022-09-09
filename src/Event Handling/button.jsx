function AwesomeButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <AwesomeButton message='Playing!'>
                Play Movie
            </AwesomeButton>

            <AwesomeButton message='Uploading!' >
                Upload Image
            </AwesomeButton>
        </div>
    );
}