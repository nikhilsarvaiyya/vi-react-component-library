import { Outlet, Link } from "react-router-dom";
import theme from "../assets/js/theme";
let setTheme = ''
function toggleColors(e) {
    localStorage.setItem('theme',e.target.value)
    setTheme = e.target.value
    theme(e.target.value)
}

const Layout = (props) => {
    let t = localStorage.getItem('theme');
    theme(t);
    setTheme = t;

    const MenuBar = props.menu.filter((f,i) => f.name !== "NoPage").map((item, i) => {
        return <Link key={i} to={'/' + item.path}>{item.name}</Link>
    })

    return (
        <div >
            <h1 className="pageHead h-60" style={{ display: "flex" }}>
                <div className="logo">
                    <Link to='/'>VNI</Link>
                </div>
                <div className="right-menu" >
                <select onChange={(e) => toggleColors(e)} value={setTheme}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="gray">Light</option>
                    <option value="black">Dark</option>
                    {/* <option value="white">White</option> */}
                </select>
                  
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