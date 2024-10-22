import React, { useState } from 'react';
import DateFormatter from '../../assets/js/DateFormatter';
import ImageFormatter from '../../assets/js/ImageFormatter';


function handleDropdown(event, a) {
    console.log(a)
    document.getElementById(a).classList.toggle("show");
    //document.getElementById(a).classList.add('will-show');
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

function BooleanFun(val){
    return val
}

const manipulateData = (data, head) => {
    

// Variables 
    let dataValue = data?.length !== 0 ? data[0].key : "NA";
   
    let setValue;
// Set Style for setting
    let localStyle = {}
// Column Style
    let columnStyle = head?.style ;

// TR Row Style
    let trStyle = {}

   let ifRowStyleAvailable = data?.filter((item,i) => item.rowStyle)[0]
    if(ifRowStyleAvailable?.rowStyle){
        trStyle = ifRowStyleAvailable?.rowStyle
    }

// TD Cell Style
    let tdStyle = {}

    let isStyleAvailable = data?.filter((item,i) => item.cellStyle)[0]
    if(isStyleAvailable?.cellStyle){
        isStyleAvailable?.cellStyle?.filter((cell,i) => {
            if(cell.name == head.index) {
                tdStyle = cell.style
            }
        });
        
    }
    
    // console.log(isStyleAvailable?.length !== 0 ? isStyleAvailable : "NA")
    // let commanStyle = isStyleAvailable?.length !== 0 ? isStyleAvailable['styles']?.filter((item,i) => {
    //     console.log(item)
    // }) : [];
    
    // if(commanStyle?.style){
    //      tdStyle = commanStyle?.style;
    // }
   
    switch (head?.validation?.type) {
        case 'number':
            localStyle = { textAlign: "right" }
            setValue = dataValue
            break;
        case 'email':
            setValue = dataValue
            break;
        case 'image':
            localStyle = { position: "relative" }
            setValue = ImageFormatter(dataValue,head)
            break;
        case 'date':
            setValue = DateFormatter(dataValue,head)
            break;
        case 'boolean':
            setValue = BooleanFun(dataValue)
            break;

        default:
            setValue = dataValue
            break;
    }

    return <td style={{... columnStyle, ...localStyle,  ...trStyle, ...tdStyle}}>{setValue}</td>
}

let abc = (data) => data.map((thEntry, i) => {
    return (
        <th>
            <div style={{ display: "flex" }}>
                <label style={{ flex: "auto", marginRight: "14px" }}  >{thEntry[0]} </label>
                <span onClick={() => alert("Filter - " + thEntry[0])} className="material-symbols-outlined vi-tune-icon"> tune </span>
                <span onClick={() => alert("Sort - " + thEntry[0])} className="material-symbols-outlined vi-tune-icon"> sort </span>
            </div>

        </th>
    )
});

const objTh = (entries) => {

    let createArr = []
    if (Array.isArray(entries)) {
        entries.map((item, i) => createArr.push({ [0]: item.name }))
    } else {
        createArr = Object.entries(entries || [])
    }

    return abc(createArr)
}

const objTD = (entries, tableHead) => {
    let render = tableHead ?
        tableHead.map((m, i) => {
            let checkKey = []
            Object.entries(entries).map((tdEntry, i) => {
               
                if (m?.index?.toLowerCase() == tdEntry[0]?.toLowerCase()) {
                    checkKey.push({ "key" : tdEntry[1]})
                }
                if (tdEntry[0]?.toLowerCase() == 'rowstyle') {
                   
                    checkKey.push({ "rowStyle" : tdEntry[1]})
                }
                if (tdEntry[0]?.toLowerCase() == 'cellstyle') {
                    checkKey.push({ "cellStyle" : tdEntry[1]})
                }
            })
          
            return manipulateData(checkKey, m)
        })
        :
        Object.entries(entries).map((tdEntry, i) => {
            let setArr = [];
            setArr.push(tdEntry[1])
            return typeof tdEntry[1] == 'object' ? <td>{nestedTable(tdEntry[1])}</td> : manipulateData(setArr)
        })


    return render
};

const listObj = (entries) => Object.entries(entries).map((li, i) => {
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

    let [tableHead, tableHeadableHead] = useState(props.tableHead)
    let [tableBody, tableHableBody] = useState(props.tableBody)
    let [tableAction, tableHableAction] = useState(props.tableAction)

    let isTableBody = tableBody ? tableBody[0] : null

    let totalColumn = tableAction ? tableBody?.length + 4 : tableBody?.length + 3;

    let trHead = objTh(tableHead || isTableBody);

    let actionList = (data, j) => tableAction?.map((act, i) => {
        return <button className={`dropbtn B${j} A${j}`} onClick={(e) => { handleDropdown(e, "B" + j); handleDropdown(e, "A" + j) }}>{act.name}</button>
    })

    let handleSingleCheckbox = (e, i) => {
        setTimeout(() => {
            tableBody[i].checked = e.target.checked;
        }, 10);
    }

    let handleAllCheckbox = (e) => {
        let list = []
        let a = tableBody.map((tr, i) => {
            tr.checked = e.target.checked;
            if (e.target.checked) {
                list.push(tr.id)
            } else {
                list = ["Nothing is selected"]
            }
            return tr
        })
        tableHableBody(a);
        setTimeout(() => {
            alert(list)
        }, 10);

    }

    let trBody = tableBody?.map((tr, i) => {

        return (
            <>
                <tr>
                    <td className="fixed-first" >
                        <input type='checkbox' checked={tr.checked} onChange={(e) => handleSingleCheckbox(e, i)} />
                    </td>
                   
                    {objTD(tr, tableHead)}

                    {tableAction ?
                        <td className="fixed-last td-action" >
                            <span onClick={(e) => handleDropdown(e, "A" + i)} className={`material-symbols-outlined vi-more-vert-icon dropbtn A${i}`}> more_vert </span>
                            <div className="dropdown">
                                <div id={"A" + i} className={`dropdown-content A${i}`} >
                                    {actionList(tr, i)}
                                </div>
                            </div>
                        </td> : <></>}
                </tr>
                <tr className='tr-table-detail'>
                    <td colSpan={totalColumn}>
                        <div id={"B" + i} className={`tr-table-detail-content B${i} `} >
                            Successfully compiled 5 files with Babel (716ms). Successfully compiled 5 files with Babel (716ms). Successfully compiled 5 files with Babel (716ms). Successfully compiled 5 files with Babel (716ms).
                        </div>
                    </td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div className='vi-table-header' >
                <h1 >VNI Table</h1>
                <ul>
                    <li onClick={() => alert("Download")} ><span className="material-symbols-outlined "> download </span></li>
                    <li onClick={() => alert("Upload")}><span className="material-symbols-outlined "> upload </span></li>
                    <li onClick={() => alert("Print")}><span className="material-symbols-outlined "> print </span></li>
                    <li onClick={() => alert("Refresh")}><span className="material-symbols-outlined "> refresh </span></li>
                </ul>
            </div>
            <table className={`vi-table`}>
                <thead>
                    <tr>
                        <th className="fixed-first"><input type='checkbox' onChange={(e) => handleAllCheckbox(e)} /></th>
                        {/* <th className="fixed-last "></th>  */}
                        {trHead}
                        {tableAction ? <th className="fixed-last th-action"></th> : <></>}
                    </tr>
                </thead>
                <tbody>
                    {trBody}
                </tbody>
            </table>
        </>

    )
}
export default VITable;