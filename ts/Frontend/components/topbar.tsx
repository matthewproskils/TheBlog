class Topbar extends React.Component<{ ArrayIndex: number }, {}>{
    render() {
        return (
            <div className="topbar">
                <a href="/" className={"TopBarElement" + (this.props.ArrayIndex == 0 ? " activeTopEl" : " inactiveTopEl")}>Home</a>
                <a href="/dashboard" className={"TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl")}>Dashboard</a>
                <a href="/auth" className={"TopBarElement" + (this.props.ArrayIndex == 2 ? " activeTopEl" : " inactiveTopEl")}>Login / Register</a>
                <a href="/ee" className={"TopBarElement" + (this.props.ArrayIndex == 3 ? " activeTopEl" : " inactiveTopEl")}>ee</a>
                <a href="/ee" className={"TopBarElement" + (this.props.ArrayIndex == 4 ? " activeTopEl" : " inactiveTopEl")}>ee</a>
            </div>
        )
    }
};

export default Topbar;