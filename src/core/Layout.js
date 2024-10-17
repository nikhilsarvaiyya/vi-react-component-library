import { Outlet, Link } from "react-router-dom";

let initialTheme = true;

function toggleColors() {
    const root = document.documentElement;
    console.log(initialTheme)
    if (initialTheme) {
        root.style.setProperty('--light-bg', '#ECEFF1');
        root.style.setProperty('--dark-bg', '#212121');
        root.style.setProperty('--light-text', '#ECEFF1');
        root.style.setProperty('--dark-text', '#212121');
        localStorage.setItem("theme", "light")
        initialTheme = false;
    } else {
        root.style.setProperty('--light-bg', '#212121');
        root.style.setProperty('--dark-bg', '#ECEFF1');
        root.style.setProperty('--light-text', '#212121');
        root.style.setProperty('--dark-text', '#ECEFF1');
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
                <div className="logo">
                    <Link to='/'>Logo</Link>
                </div>
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