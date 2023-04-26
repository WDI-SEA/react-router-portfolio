import Header from './Header'

export default function Layout(props) {
    return(
        <>
        <Header />
        {props.children}
        <footer>
            <p>Reach me at pao.saelee84@gmail.com</p>
        </footer>
        </>
    )
}