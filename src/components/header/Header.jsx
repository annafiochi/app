"use client";
import styles from "./header.module.css";

export default function Header({ totalProducts }) {
    return (
        <div className={styles.header}>
            <h1>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
            <p>📊 Total de produtos: <span>{totalProducts}</span></p>
        </div>
    );
}