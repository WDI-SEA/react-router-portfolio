import Header from './Header'

export default function Layout(props) {
    return (
        <>
            <Header />
            <main>
                <h1>Dxk0ta's Blog</h1>
                {props.children}
            </main>
        </>
    )
}