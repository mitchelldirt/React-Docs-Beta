function AwesomeButton({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayMovieButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`)
    }

    return (
        <AwesomeButton onClick={handlePlayClick}>
            Play "{movieName}"
        </AwesomeButton>
    )
}

function UploadButton() {
    return (
        <AwesomeButton onClick={() => alert('Uploading!')}>
            Upload Image
        </AwesomeButton>
    );
}

export default function Toolbar() {
    return (
        <div>
            <PlayMovieButton movieName='The Lord of The Rings' />
            <UploadButton />
        </div>
    );
}