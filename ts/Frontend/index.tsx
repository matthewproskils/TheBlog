import Topbar from "./components/topbar.js";
import IndexBody from "./components/index-body.js"
import BottomBar from "./components/bottombar.js"

ReactDOM.render(
    <div>
        <Topbar ArrayIndex={0} />
        <IndexBody />
        <BottomBar />
    </div>,
    document.getElementById('MAIN_APP')
);