import logo from "./logo.svg";
import "./App.css";
import Facebook from "./components/Facebook";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Facebook Authentication</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
                <Facebook />
                {/* <div
                    class="fb-login-button"
                    data-width=""
                    data-size="large"
                    data-button-type="login_with"
                    data-layout="default"
                    data-auto-logout-link="false"
                    data-use-continue-as="false"
                ></div> */}
            </header>
        </div>
    );
}

export default App;
