
export default function ProductCard( { image, title, price, description, rating, category }) {
    const imageExibida = image ? image : "Imagem não disponível";
    const titleExibido = title ? title : "Título não disponível";
    const priceExibido = price ? price : "Preço não disponível";
    const descriptionExibida = description ? description : "Descrição não disponível";
    const ratingExibido = rating ? `${rating.stars} (${rating.reviews} avaliações)` : "Avaliação não disponível";
    const categoryExibida = category ? category : "Categoria não disponível";
    return (
      <div>
             <Image src={imageExibida} alt={titleExibido} width={200} height={200} />
             <h4>{titleExibido}</h4>
             <p>{priceExibido}</p>
             <p>{descriptionExibida}</p>
             <p>{ratingExibido}</p>
             <p>{categoryExibida}</p>
             <hr></hr>
      </div>
    );
  }