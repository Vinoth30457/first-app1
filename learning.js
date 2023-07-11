const App = () => {
  const products = [
    {
      imgURL: `https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg`,
      brandName: "HRX by Hrithik roshan",
      productTitle: "Men Active Boomer Jacket",
      actualPrice: 3999,
      discountPrice: 1299,
    },
    {
      imgURL: `https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22483440/2023/3/23/35487c10-3705-4749-9274-5f593893045d1679576283721RainJacket1.jpg`,
      brandName: "Zeel",
      productTitle: "Men Hooded Rain Jacket",
      actualPrice: 3999,
      discountPrice: 1349,
    },
  ];
  return (
    <div className="products">
      {products.map((product, index) => {
        return <Product {...product} key={index} />;
      })}
    </div>
  );
};

export default App;
h;

const Product = ({
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
