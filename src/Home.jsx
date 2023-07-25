import Product from './Product'
import './home.css'
import { products } from './producsData';

const Home = ({ searchQuery }) => {
   

      const filteredProducts = products.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="./images/banner.jpg"
          alt="home-image"
        />
        <div className="home__search">
        </div>
        <div className="home__row">
          {filteredProducts.map((product) => (
         
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
             
          ))}
          </div>
      </div>
    </div>
  );
};

export default Home;
