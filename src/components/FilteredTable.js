import React from 'react'
import { tableHeads } from '../utils/data'

const FilteredTable = ({filteredData, selectedRows, handleRowClick}) => {
  return (
    <div className='filtered-table'>
    <p className='title'>Search Results</p>

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
      {filteredData?.map((row) => (
        <tr
          key={row.id}
          onClick={() => handleRowClick(row.id)}
          className={selectedRows.includes(row.id) ? "selected" : ""}
        >
          <td>{selectedRows.includes(row.id) ? "X" : ""}</td>
          <td>{row.address}</td>
          <td>{row.postcode}</td>
          <td>{row.propertyType}</td>
          <td>{row.numRooms}</td>
          <td>{row.floorArea}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  )
}

export default FilteredTable