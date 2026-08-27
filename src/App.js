import { useState } from 'react';
import './App.css';
import { FilterSection } from './components/FilterSection';
import { ProductList } from './components/ProductList';


function App() {

  const [filters, setFilters] = useState({
    fuel: [],
    budget: "",
    car: "",
    city: ""
  })

  return (
    <div className="used-car-page">

      <div className='filter-section'>
        <FilterSection filters={filters} setFilters={setFilters} />
      </div>

      <div className='products-list'>
        <ProductList filters={filters} />
      </div>

    </div>
  );
}

export default App;
