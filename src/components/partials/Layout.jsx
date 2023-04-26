import Header from "./Header"

export default function Layout(props) {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    )
}