export default function Home() {

    const onButtonClick = () => {
       
            fetch('./Sample PDF.pdf')
                .then(response => {
                    response.blob().then(blob => {
                        let url = window.URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = url;
                        a.download = 'sample.pdf';
                        a.click();
                    });
                    //window.location.href = response.url;
            });
        }

    

    return (
        
            <div>
                <center>
                <h1>Welcome</h1>
                <button onClick={onButtonClick}>
                    Download Resume
                </button>
            </center>
            </div>

    )
}