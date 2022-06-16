import lola from '../partials/imgs/lola.jpeg'

export default function Home() {
    return(
        <>
            <h1>Lola's Portfolio</h1>
            <p>Hello, I'm Lola, aka Lulu, aka Chiwina and this is where you can learn who I am</p>

            <img src={lola} alt='lola wearing glasses' 
            style={{maxWidth:500}}
            />
        </>
    )
}