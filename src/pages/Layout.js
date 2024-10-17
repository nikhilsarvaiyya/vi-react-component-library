import { Outlet, Link } from "react-router-dom";

let initialTheme = true;

function toggleColors() {
    const root = document.documentElement;
    console.log(initialTheme)
    if (initialTheme) {
        root.style.setProperty('--light-bg', '#bedfff');
        root.style.setProperty('--dark-bg', '#2f362a');
        root.style.setProperty('--light-text', '#bedfff');
        root.style.setProperty('--dark-text', '#2f362a');
        localStorage.setItem("theme", "light")
        initialTheme = false;
    } else {
        root.style.setProperty('--light-bg', '#2f362a');
        root.style.setProperty('--dark-bg', '#bedfff');
        root.style.setProperty('--light-text', '#2f362a');
        root.style.setProperty('--dark-text', '#bedfff');
        localStorage.setItem("theme", "dark")
        initialTheme = true;
    }
}

const Layout = (props) => {
    toggleColors()
    
    const MenuBar = props.menu.filter(f => f.name !== "NoPage").map((item, i) => {
        return <Link to={'/' + item.path}>{item.name}</Link>
    })

    return (
        <div >
            <h1 className="pageHead h-60" style={{ display: "flex" }}>
                <div className="logo">Logo</div>
                <div className="right-menu" >
                    <button onClick={toggleColors}>Theme</button>
                </div>

            </h1>
            <div className="sidenav">
                {MenuBar}
            </div>

            <div className="main">

                <div style={{ margin: "20px" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
};

export default Layout;