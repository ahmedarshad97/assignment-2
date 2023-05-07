import React from 'react'
import { tableHeads } from '../utils/data'

const SelectedTable = ({selectedData}) => {
  return (
    <div className='selected-table'>
    <p className='title'>Selected Properties</p>

    <table>
    <thead>
      <tr>
      <th></th>
      { tableHeads?.map(item => (
        <th>{item.name}</th>
      ))}
      </tr>
    </thead>
    <tbody>
      {selectedData?.length > 0 ? selectedData.map((row) => (
        <tr
          key={row.id}
        //   onClick={() => handleRowClick(row.id)}
        //   className={selectedRows.includes(row.id) ? "selected" : ""}
        >
          <td></td>
          <td>{row.address}</td>
          <td>{row.postcode}</td>
          <td>{row.propertyType}</td>
          <td>{row.numRooms}</td>
          <td>{row.floorArea}</td>
        </tr>
      )) : ''}
    </tbody>
  </table>
  </div>
  )
}

export default SelectedTable