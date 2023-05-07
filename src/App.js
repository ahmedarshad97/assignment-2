import { useDispatch, useSelector } from 'react-redux';
import './global.css';
import { useEffect, useState } from 'react';
import PropertyTabs from './components/PropertyTabs';
import { tableHeads } from './utils/data';
import FilteredTable from './components/FilteredTable';
import SelectedTable from './components/SelectedTable';
import { fetchProperties } from './store/propertyActions';

function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState('');
  const data = useSelector((state) => state.properties.properties);
  const [filteredData, setFilteredData] = useState(data)
  const [selectedData, setSelectedData] = useState([]);

  const dispatch = useDispatch();
  
  // Fetching property data
  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

// Filter the data based on search address and selected tab
useEffect(() => {
  let newFilteredData = data;

  if (search !== "") {
    console.log('asdad')
    newFilteredData = data?.filter((row) =>
      row.address.includes(search)
    );
  }

  else if (activeTab.label === "Flat") {
    newFilteredData = newFilteredData.filter(
      (row) => row.propertyType === 'Flat'
    );
  }

  else if (activeTab.label === "Teracced House") {
    newFilteredData = newFilteredData.filter(
      (row) => row.propertyType === 'Teracced House'
    );
  }

  else if (activeTab.label === "Semi-detached") {
    newFilteredData = newFilteredData.filter(
      (row) => row.propertyType === 'Semi-detached'
    );
  }

  setFilteredData(newFilteredData);

}, [data, search, activeTab]);

useEffect(() => {
  let selectedData = filteredData.filter((row) => selectedRows.includes(row.id));
  setSelectedData(selectedData)
}, [selectedRows, filteredData])


  const handleRowClick = (id) => {
    const index = selectedRows.indexOf(id);
    if (index > -1) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if(!data){
    return (
      <div>Loading...</div>
    )
  }

  return (
<div className='container'>
    <div class="search-container">
      <input type="text" placeholder="Address" value={search} onChange={(e) => setSearch(e.target.value) }  />
      <button class="search-btn">Search</button>
    </div>

    {selectedRows.length > 0 && <div className='selected-data'>
      <SelectedTable selectedData={selectedData} />
    </div>}

    <div className='tabs-table-filter'>
     <PropertyTabs activeTab={activeTab.label} handleTabClick={handleTabClick}  />  
     <FilteredTable filteredData={filteredData} selectedRows={selectedRows} handleRowClick={handleRowClick} />
     </div>
    </div>
  );
}

export default App;
