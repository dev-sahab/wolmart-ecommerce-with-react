import { Link } from "react-router-dom";
import shop1 from "../../assets/images/shop/1.jpg";

const ProductCard = () => {
  return (
    <>
      <div className="product-wrap">
        <div className="product text-center">
          <figure className="product-media">
            <Link to="/product/:id">
              <img src={shop1} alt="Product" width={300} height={338} />
            </Link>
            <div className="product-action-horizontal">
              <a
                href="#"
                className="btn-product-icon btn-cart w-icon-cart"
                title="Add to cart"
              />
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Wishlist"
              />
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              />
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              />
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <a href="shop-banner-sidebar.html">Electronics</a>
            </div>
            <h3 className="product-name">
              <Link to="/product/:id">3D Television</Link>
            </h3>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }} />
                <span className="tooltiptext tooltip-top" />
              </div>
              <Link to="/product/:id" className="rating-reviews">
                (3 reviews)
              </Link>
            </div>
            <div className="product-pa-wrapper">
              <div className="product-price">$220.00 - $230.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
