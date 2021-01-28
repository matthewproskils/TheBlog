import Topbar from "./components/topbar.js";
import BottomBar from "./components/bottombar.js";
function Gauth() {
    React.useEffect(() => {
        let script = document.createElement('script');
        script.src = "https://apis.google.com/js/platform.js";
        document.body.append(script);
    });
    return (React.createElement("div", { className: "g-signin2 GauthButton", "data-onsuccess": "onSignIn" }));
}
ReactDOM.render(React.createElement("div", null,
    React.createElement(Topbar, { ArrayIndex: 2 }),
    React.createElement("div", { className: "GauthContainer" },
        React.createElement(Gauth, null)),
    React.createElement(BottomBar, null)), document.getElementById('MAIN_APP'));
let script = document.createElement('script');
script.src = "https://apis.google.com/js/platform.js";
document.body.append(script);
//# sourceMappingURL=auth.js.map