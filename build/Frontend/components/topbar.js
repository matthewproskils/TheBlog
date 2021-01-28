class Topbar extends React.Component {
    render() {
        return (React.createElement("div", { className: "topbar" },
            React.createElement("a", { href: "/", className: "TopBarElement" + (this.props.ArrayIndex == 0 ? " activeTopEl" : " inactiveTopEl") }, "Home"),
            React.createElement("a", { href: "/dashboard", className: "TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl") }, "Dashboard"),
            React.createElement("a", { href: "/auth", className: "TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl") }, "Authentication"),
            React.createElement("a", { href: "/ee", className: "TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl") }, "ee"),
            React.createElement("a", { href: "/ee", className: "TopBarElement" + (this.props.ArrayIndex == 1 ? " activeTopEl" : " inactiveTopEl") }, "ee")));
    }
}
;
export default Topbar;
//# sourceMappingURL=topbar.js.map