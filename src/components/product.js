import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";


// product component
function Product() {
  return (
    <div className="products">
      <div className="box">
        <img src={one} alt="Perfume one" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img src={two} alt="Perfume two" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img src={three} alt="Perfume three" />
        <p>Designer Club-Be Spoke Perfume</p>
      </div>
    </div>
  );
}

export default Product