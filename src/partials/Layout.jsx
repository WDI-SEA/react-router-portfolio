import Header from "./Header"

export default function Layout(props) {
    return (
        <>
            <Header />

            <h2>{props.children}</h2>
        
        
        </>
    )
}