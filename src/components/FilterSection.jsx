import { FUEL_TYPES } from "../constants/FuelTypes"
import { BUDGETS } from "../constants/Budgets";
import { useState, useEffect } from "react";


export const FilterSection = ({ filters, setFilters }) => {

    // fuel update
    const handleFuelChange = (fuelId) => {
        setFilters(prev => {
            const alreadySelected = prev.fuel.includes(fuelId);

            return {
                ...prev,
                fuel: alreadySelected
                    ? prev.fuel.filter(id => id !== fuelId)
                    : [...prev.fuel, fuelId]
            };
        });
    };

    // budget update
    const handleBudgetChange = (value) => {
        setFilters(prev => ({
            ...prev,
            budget: value
        }));
    };

    // Fetching makes data
    const [makes, setMakes] = useState([]);

    useEffect(() => {
        fetch("/api/v2/makes?type=new")
            .then(response => response.json())
            .then(data => setMakes(data));
    }, []);

    // Fetching cities data
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("/api/cities")
            .then(response => response.json())
            .then(data => setCities(data));
    }, []);


    return (
        <div className="filter-section">
            <h2>Filters</h2>

            {/* Fuel Filter */}
            <div className="filter-group">
                <div className="filter-title">
                    <h3>Fuel Type</h3>
                </div>

                <div className="checkbox-list">
                    {FUEL_TYPES.map(fuel => (
                        <label key={fuel.value} className="checkbox-item">
                            <input
                                type="checkbox"
                                checked={filters.fuel.includes(fuel.value)}
                                onChange={() => handleFuelChange(fuel.value)}
                            />

                            {fuel.name}
                        </label>
                    ))}
                </div>
            </div>

            {/*Brand filter*/}
            <div className="filter-group">
                <div className="filter-title">
                    <h3>Brand</h3>
                </div>
                <select
                    className="filter-select"
                    value={filters.car}
                    onChange={(e) =>
                        setFilters(prev => ({
                            ...prev,
                            car: e.target.value
                        }))
                    }
                >
                    <option value="">All Brands</option>

                    {makes.map(make => (
                        <option
                            key={make.makeId}
                            value={make.makeId}
                        >
                            {make.makeName}
                        </option>
                    ))}
                </select>
            </div>

            {/* City filter */}
            <div className="filter-group">
                <div className="filter-title">
                    <h3>City</h3>
                </div>
                <select
                    className="filter-select"
                    value={filters.city}
                    onChange={(e) =>
                        setFilters(prev => ({
                            ...prev,
                            city: e.target.value
                        }))
                    }
                >
                    <option value="">All Cities</option>

                    {cities.map(city => (
                        <option key={city.CityId} value={city.CityId}>
                            {city.CityName}
                        </option>
                    ))}
                </select>
            </div>

            {/* Budget Filter */}
            <div className="filter-group">
                <h3>Budget (Lakh)</h3>
                <div className="budget-options">
                    {BUDGETS.map(budget => (
                        <button
                            key={budget.value}
                            onClick={() => handleBudgetChange(budget.value)}
                            className={
                                filters.budget === budget.value
                                    ? "budget-button selected"
                                    : "budget-button"
                            }
                        >
                            {budget.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
