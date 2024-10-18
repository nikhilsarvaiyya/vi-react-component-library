
import Table from '../../pages/Table';
import Button from '../../pages/Button';
import NoPage from "../../pages/NoPage";
import Badge from '../../pages/Badge';
import Card from '../../pages/Card';

let menuJs = [
    { name: "Home", path: "", component: "Home", desc : "Home" },
    { name: "Button", path: "button", component: <Button />, desc : "Button"  },
    { name: "Table", path: "table", component: <Table /> , desc : "Table" },
    { name: "Card", path: "card", component: <Card /> , desc : "Card" },
    { name: "Badge", path: "badge", component: <Badge /> , desc : "Badge" },
    { name: "NoPage", path: "*", component: <NoPage /> , desc : "NoPage" },
]


export default menuJs