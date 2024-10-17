
import Table from '../../pages/Table';
import Button from '../../pages/Button';
import NoPage from "../../pages/NoPage";
import Badge from '../../pages/Badge';
import Card from '../../pages/Card';

let menuJs = [
    // { name: "Home", path: "", component: "Home" },
    { name: "Button", path: "button", component: <Button /> },
    { name: "Table", path: "table", component: <Table /> },
    { name: "NoPage", path: "*", component: <NoPage /> },
    // { name: "Card", path: "card", component: <Card /> },
    // { name: "Badge", path: "badge", component: <Badge /> }
]


export default menuJs