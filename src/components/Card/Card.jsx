import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ image, description, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image}
          alt={description}
          width={220}
          height={140}
          layout="responsive"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardDescription}>{description}</p>
        <span className={styles.cardPrice}>R$ {price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Card;