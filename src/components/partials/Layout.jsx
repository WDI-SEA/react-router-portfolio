import Header from "./Header"

export default function Layout(props) {
    console.log(props)
    return (
        <div className="body">

            <Header />

            <div className="content">
                <div className="content-inside">

                {/* this is how you make a non-void element in react */}
                {props.children}
                </div>
            </div>

            <footer className="footer">
                <p>© Garrett Heiner GNU GPLv3 {new Date().getFullYear()}</p>
            </footer>

        </div>
    )
}