const SingleProduct = ({
  imgURL,
  brandName,
  productTitle,
  actualPrice,
  discountPrice,
}) => {
  return (
    <article className="product">
      <div className="img-container">
        <img src={imgURL} alt={`${brandName}-${productTitle}`} />
      </div>
      <h1 className="title">{brandName}</h1>
      <h3 className="productType">{productTitle}</h3>
      <h4 className="price">
        Rs.{discountPrice} &nbsp; <del> Rs.{actualPrice} </del>
      </h4>
    </article>
  );
};

export { SingleProduct };
