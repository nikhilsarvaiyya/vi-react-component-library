import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Table from './pages/Table';
import Button from './pages/Button';
// import Badge from './pages/Badge';
// import Card from './pages/Card';
import NoPage from "./pages/NoPage";

let menu = [
  { name: "Home", path: "", component: "Home" },
  { name: "Button", path: "button", component: <Button /> },
  // { name: "Badge", path: "badge", component: <Badge /> },
  { name: "Table", path: "table", component: <Table /> },
  // { name: "Card", path: "card", component: <Card /> },
  { name: "NoPage", path: "*", component: <NoPage /> },
]
function App() {

  let MenuBar = menu.map((item, i) => {
    return <Route key={i} path={item.path} element={item.component} />
  })
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout menu={menu} />}>
          <Route index element={<Home />} />
            {MenuBar}
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
