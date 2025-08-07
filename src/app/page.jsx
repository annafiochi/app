"use client";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";
import styles from "../components/ProductCard/ProductCard.module.css";

export default function Home() {
  return (
    <div>
      <h1 style={{ 
        textAlign: 'center', 
        margin: '20px 0', 
        color: '#333',
        fontSize: '2rem'
      }}>
        🛍️ Catálogo de Produtos
      </h1>
      <div className={styles.products}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}