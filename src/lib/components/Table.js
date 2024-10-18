import React from 'react';
const VITable = (props) => {
    
    return (
        <table className={`vi-table ${props.size} ${props.type}`}>
            <tr>
                <th>1 header</th>
                <th>1 header</th>
                <th>1 header</th>
            </tr>
            <tr>
                <td>1 data</td>
                <td>1 data</td>
                <td>1 data</td>
            </tr>
            <tr>
                <td>2 data</td>
                <td>2 data</td>
                <td>2 data</td>
            </tr>
            <tr>
                <td>3 data</td>
                <td>3 data</td>
                <td>3 data</td>
            </tr>
            <tr>
                <td>4 data</td>
                <td>4 data</td>
                <td>4 data</td>
            </tr>
            <tr>
                <td>5 data</td>
                <td>5 data</td>
                <td>5 data</td>
            </tr>
        </table>
    )
}
export default VITable;