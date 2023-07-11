import { productItem } from "../constants";
import { SingleProduct } from ".";

const Products = () => {
  return (
    <div className="products">
      {productItem.map((product, index) => {
        return <SingleProduct {...product} key={index} />;
      })}
    </div>
  );
};

export default Products;
