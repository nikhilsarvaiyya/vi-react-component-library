import React from 'react';

function myFunction(event, a) {
    console.log(event.target.matches, a)
    document.getElementById(a).classList.toggle("show");
    if (!event.target.matches('.' + a + '.dropbtn')) {
        var dropdowns = document.getElementsByClassName(a);
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const objTh = (entries) => Object.entries(entries).map((thEntry, i) => {
    return (
        <th>
            <div style={{ display: "flex" }}>
                <label style={{ flex: "auto" }}  >{thEntry[0]} </label>
                <span class="material-symbols-outlined vi-tune-icon"> tune </span>
            </div>

        </th>
    )
});
const objTD = (entries) => Object.entries(entries).map((tdEntry, i) => {
    return typeof tdEntry[1] == 'object' ? <td>{nestedTable(tdEntry[1])}</td> : <td>{tdEntry[1]}</td>
});

const listObj = (entries) => Object.entries(entries).map((li, i) => {
    console.log(li[1], typeof li[1])
    return <tr>{objTD(li)}</tr>
});

let nestedTable = (data) => {
    let trBody = listObj(data)
    return (
        <table >
            <tbody>{trBody}</tbody>
        </table>
    )
}

const VITable = (props) => {
    let trHead = objTh(props.tableBody[0]);

    let actionList = props.tableAction.map((act, i) => {
        return <a href="#home">{act.name}</a>
    })

    let trBody = props.tableBody.map((tr, i) => {
        return (
            <tr>
                <td className="fixed-first"><input type='checkbox' /></td>
                {objTD(tr)}
                <td className="fixed-last td-action" style={{ display: "inline" }}>
                    <span onClick={(e) => myFunction(e, "A" + i)} className={`material-symbols-outlined vi-more-vert-icon dropbtn A${i}`}> more_vert </span>
                    <div className="dropdown">
                        <div id={"A" + i} className={`dropdown-content A${i}`} >
                            {actionList}
                        </div>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <table className={`vi-table`}>
            <thead>
                <tr>
                    <th className="fixed-first"><input type='checkbox' /></th>
                    {trHead}
                    <th className="fixed-last th-action"></th>
                </tr>
            </thead>
            <tbody>
                {trBody}
            </tbody>
        </table>
    )
}
export default VITable;