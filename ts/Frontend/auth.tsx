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
        <div className="GauthContainer">
            <Gauth></Gauth>
        </div>
        <BottomBar />
    </div>,
    document.getElementById('MAIN_APP')
)

let script = document.createElement('script');
script.src = "https://apis.google.com/js/platform.js";
document.body.append(script);