import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  image,
  title,
  price,
  description,
  rating,
  category,
}) {
  const imageExibida = image ? image : "/placeholder.jpg";
  const titleExibido = title ? title : "Título não disponível";
  const priceExibido = price ? price : "Preço não disponível";
  const descriptionExibida = description
    ? description
    : "Descrição não disponível";
  const ratingExibida = rating
    ? `${rating.stars} (${rating.reviews} avaliações)`
    : "Avaliação não disponível";
  const categoryExibida = category ? category : "Categoria não disponível";

  return (
    <div className={styles.productCard}>
      <Image
        className={styles.productImage}
        src={imageExibida}
        alt={titleExibido}
        width={400}
        height={300}
      />
      <h4 className={styles.productTitle}>{titleExibido}</h4>
      <p className={styles.productPrice}>{priceExibido}</p>
      <p className={styles.productDescription}>{descriptionExibida}</p>
      <p className={styles.productRating}>{ratingExibida}</p>
      <p className={styles.productCategory}>{categoryExibida}</p>
      <hr className={styles.divider} />
    </div>
  );
}