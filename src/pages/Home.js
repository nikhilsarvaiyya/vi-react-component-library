import ComponentCard from "../components/Card";
import { Outlet, Link } from "react-router-dom";
const Home = (props) => {
  const MenuBar = props.menu.filter((f,i) => f.name !== "NoPage").map((item, i) => {
    return (
      <div style={{width:"calc(33.33% - 20px)", float:"left", marginRight:"20px"}}>
        <Link key={i} to={'/' + item.path} >
          <ComponentCard
            title={item.name}>
              {item.desc}
          </ComponentCard>
        </Link>
        </div>
      )
})

  return MenuBar
};

export default Home;