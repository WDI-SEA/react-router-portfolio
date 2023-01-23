import './AnimatedLetters.scss'

function Animation({ letterClass, strArray, idx }) {
    return ( 
        <>
            {
                strArray.map((char, i) => {
                    return (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>)
                })
            }
        </>
     );
}

export default Animation;