import Header from "./Header"
export default function Layout(props) {
    return (
        <div>
            <Header/>
            <main>
                <h1>Murphy's portfolio</h1>
                {props.children}
            </main>
            <footer>Footer area</footer>
        </div>
    )
}