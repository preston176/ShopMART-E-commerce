import Product from './Product'
import './home.css'

const Home = () => {
  return (
    <div className="home">
    <div className="home__container">
        <img
            className="home__image"
            src="./images/banner.jpg"
            alt="home-image"
        />
        <div className="home__row">
            <Product />
            <Product />
            {/* product */}
        </div>
        <div className="home__row">
            <Product />
            <Product />
            <Product />
        </div>
        <div className="home__row">
        <Product />
            <Product />
            <Product />
            </div>
            <div className="home__row">
            <Product />
            </div>
    </div>
    </div>
  )
}

export default Home
