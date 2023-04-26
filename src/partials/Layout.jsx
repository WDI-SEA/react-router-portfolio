import Header from "./Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <footer>
        <h6>This is the footer</h6>
      </footer>
    </div>
  );
}
