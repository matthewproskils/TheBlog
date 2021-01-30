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
    React.createElement("div", { id: "GauthContainer", className: "GauthContainer" },
        React.createElement(Gauth, null)),
    React.createElement("div", { id: "OnauthContainer", style: { display: "none", textAlign: "center", height: "70%", lineHeight: "70%" } },
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("h1", null, "Welcome!"),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("p", null,
            "Get started by viewing your ",
            React.createElement("a", { href: "/dashboard" }, "dashboard"),
            " or reading ",
            React.createElement("a", { href: "/" }, "About Us"))),
    React.createElement(BottomBar, null)), document.getElementById('MAIN_APP'));
let script = document.createElement('script');
script.src = "https://apis.google.com/js/platform.js";
document.body.append(script);
//# sourceMappingURL=auth.js.map