import React from 'react'
import './products.css'
import * as dummyData from '../../db/dummydatabase'

function Products() {
  return (
      <section className="products-section mx-auto">
        <h1 className="products-title py-5 fw-600">Try our other free products</h1>
        <div className="products-wrapper">
          {dummyData.productsData.map((product) => {
            const { id, img, label, description } = product;
            return (
              <div key={id} className="product">
                <img src={img} alt={label} />
                <div className="products-label fw-500">{label}</div>
                <p className="products-description fw-400">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default Products


