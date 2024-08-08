import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import { useSearchParams } from 'react-router-dom';


function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch('http://localhost:8000/products?'+searchParams)
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [searchParams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>


      <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard key={product._id} product={product} />)} 
        </div>
      </section>
    </Fragment>
  );
}

export default Home