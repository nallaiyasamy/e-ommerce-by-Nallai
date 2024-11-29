import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', image: 'https://via.placeholder.com/250' },
  { id: 2, name: 'T-Shirt', price: 20, category: 'Clothing', image: 'https://via.placeholder.com/250' },
  { id: 3, name: 'Smartphone', price: 699, category: 'Electronics', image: 'https://via.placeholder.com/250' },
  { id: 4, name: 'Jeans', price: 50, category: 'Clothing', image: 'https://via.placeholder.com/250' },
];

const Category = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const { filter } = useParams();

  const filteredProducts = dummyProducts
  .filter((product) => product.name.toLowerCase().includes(search.toLowerCase())&&product.category===filter)
  .sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <div className="home">
      <div className="filters">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

