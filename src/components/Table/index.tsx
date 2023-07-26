import React from 'react'
type Props ={
    data: any,
    columns: any
}
const Table = ({data, columns}: Props) => {
    const renderHeaders = columns.map((column: any) => {
        return (
            <th key={column.dataIndex}>{column.header ? column.header(column) : column.title}</th>
        );
    });
    const renderRown = data.map((item: any) =>{
       const renderCells = columns.map((columns: any) =>{
        return (
            <td key={columns.key}>
                {columns.render ? columns.render(item) : item[columns.dataIndex]}
            </td>
        );
       })
       return <tr key={item.id}>{renderCells}</tr>
    })
  return (
    <table>
        <thead>
            <tr>{renderHeaders}</tr>
        </thead>
        <tbody>{renderRown}</tbody>
    </table>
    )
}

export default Table