import Topbar from "./components/topbar.js";
import IndexBody from "./components/index-body.js";
import BottomBar from "./components/bottombar.js";
ReactDOM.render(React.createElement("div", null,
    React.createElement(Topbar, { ArrayIndex: 0 }),
    React.createElement(IndexBody, null),
    React.createElement(BottomBar, null)), document.getElementById('MAIN_APP'));
//# sourceMappingURL=index.js.map