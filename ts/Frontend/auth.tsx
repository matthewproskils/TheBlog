import Topbar from "./components/topbar.js";
import BottomBar from "./components/bottombar.js"

function Gauth() {
    React.useEffect(() => {
        let script = document.createElement('script');
        script.src = "https://apis.google.com/js/platform.js";
        document.body.append(script);
    })
    return (
        <div className="g-signin2 GauthButton" data-onsuccess="onSignIn"></div>
    )
}
ReactDOM.render(
    <div>
        <Topbar ArrayIndex={2} />
        <div id="GauthContainer" className="GauthContainer">
            <Gauth></Gauth>
        </div>
        <div id="OnauthContainer" style={{ display: "none", textAlign: "center", height: "70%", lineHeight: "70%" }}>
            <br /><br /><br /><br /><br />
            <h1>Welcome!</h1><br /><br /><br /><br /><br />
            <p>Get started by viewing your <a href="/dashboard">dashboard</a> or reading <a href="/">About Us</a></p>
        </div>
        <BottomBar />
    </div>,
    document.getElementById('MAIN_APP')
)

let script = document.createElement('script');
script.src = "https://apis.google.com/js/platform.js";
document.body.append(script);