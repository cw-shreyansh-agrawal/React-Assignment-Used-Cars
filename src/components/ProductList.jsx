import { useEffect, useState } from "react"
import {ProductCard} from "./ProductCard"

export const ProductList = ({filters}) => {

    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    const buildUrl = (filters) => {
        const params = [];

        if (filters.fuel.length > 0) {
            params.push(`fuel=${filters.fuel.join("+")}`);
        }

        if (filters.budget) {
            params.push(`budget=${filters.budget}`);
        }

        if (filters.car) {
            params.push(`car=${filters.car}`);
        }

        if (filters.city) {
            params.push(`city=${filters.city}`);
        }

        return params.length > 0
            ? `/api/stocks?${params.join("&")}`
            : "/api/stocks";
    };

    useEffect(()=>{
        const url = buildUrl(filters);

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProducts(data.stocks);
            setTotalCount(data.totalCount);
        })
        .catch(error => console.error(error));
    }, [filters]);

    return (
        <div>
            <h1>{totalCount} Used Cars</h1>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.stockId} product={product}/>
                ))}
            </div>
        </div>
    )
}
