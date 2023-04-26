import Header from "./Header"

export default function Layout(props) {
    console.log(props)
    return(
        <>
            <Header />

            {/* this is how you make a non-void element in react */}
            {props.children}

            <footer>
                <p>© Garrett Heiner GNU GPLv3 {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}