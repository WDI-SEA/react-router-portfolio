import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}