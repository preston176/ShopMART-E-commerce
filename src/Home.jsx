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
            <Product 
                id="1"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
            <Product 
                id="2"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
        </div>
        <div className="home__row">
            <Product 
            id="10"
            title="iPhone 14 Pro Max"
            price={930.0}
            image="https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SX679_.jpg"
            rating={4}
             />
             <Product 
                id="3"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
            <Product 
                id="4"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
        </div>
        <div className="home__row">
        <Product 
                id="5"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
             <Product 
                id="6"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
            <Product 
                id="7"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
            </div>
            <div className="home__row">
            <Product 
                id="8"
                title='The intro to C++' 
                price={29.99}
                image="https://bytehide.com/blog/wp-content/uploads/2022/06/5601.png"
                rating={5}
            />
            </div>
    </div>
    </div>
  )
}

export default Home
