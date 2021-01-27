class Topbar extends React.Component<{ ArrayIndex: number }, {}>{
    render() {
        return (
            <div className="topbar">
                <a href="/" className={"TopBarElement" + (this.props.ArrayIndex == 0 ? " activeTopEl" : " inactiveTopEl")}>Home</a>
                <a href="/ee" className={"TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl")}>ee</a>
                <a href="/ee" className={"TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl")}>ee</a>
                <a href="/ee" className={"TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl")}>ee</a>
                <a href="/ee" className={"TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl")}>ee</a>
            </div>
        )
    }
};

export default Topbar;