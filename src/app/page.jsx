"use client";
import Header from "../components/header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";
import styles from "../components/ProductCard/ProductCard.module.css";

export default function Home() {
    return (
        <div>
            <Header totalProducts={products.length} />
            <div className={styles.products}>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
}