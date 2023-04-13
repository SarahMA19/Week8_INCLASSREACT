import { DataContext, useEffect, useState } from 'react';
import axios from 'axios';


const Shop = () => {
    /* What now?
    1. Make an API call to our flask app
    2. set up state variable for products
    3. set that state variable based on the API call
    4. Set up a way to display those products (otherwise well show loading)
    */
    const web_url = 'https://clutch-flask.onrender.com/api/products';
    const local_url = 'http://127.0.0.1:5000/api/products'
    console.log(web_url, local_url)
    useEffect(() => { console.log('The Shop componet has rendered (or re-rendered)') });
    const getProductData = async () => {
        let response = await axios.get(local_url);
        console.log(web_url)
        return response.status === 200 ? response.data : null

    }
    const loadProductData = async () => {
        let data = await getProductData();
        console.log(data, typeof data)
        setProducts(data.data)

    }
    const [products, setProducts] = useState(() => loadProductData());
    // useEffect(loadProductData()); Don't do this - infinite loop

    // access our cart from our context provider AND its setter
    const {cart, setCart} = useContext(DataContext);

    // func to add product to cart
    const addProduct = (product) => {
        //this is our ususal process at this point
        let copyCart = {...cart}

        copyCart.sixe ++; 
        copyCart.total += product.price;
        
        // if (copyCart.products[product.id]){
        //     copyCart.products[product.id].quantity ++;
        // }else {
        //     copyCart.products[product.id] = {data: product, quantity:1};
        // }
        copyCart.products[product.id] ?
        copyCart.products[product.id].quanity ++
        :
        copyCart.products[product.id] = {data: product, quantity:1};
        console.log(copyCart);

        setCart(copyCart)
    }


    return (
        <div className="container">
            <div className="row">
                <h1>THIS WILL BE WHERE YOU SHOP</h1>
            </div>
            <div className='row'>
                {/* this is where we will throw in a bootstrap card for each product*/} 
                {typeof products === 'array' && !products.then ? products.map((product, index) => {
                    return <div className="card m-4 border-4 border-dark" key ={index} style={{width: 10 + 'rem'}}>
                        <img src={product.img_url} class="card-img-top mt-3 rounded" alt={product.name}/>
                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <h5 className="card-title">{product.make} {product.model}</h5>
                            <p className="card-text">{product.desc}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Year: {product.year}</li>
                            <li className="list-group-item">Miles: {product.miles}</li>
                            <li className="list-group-item">Price:$ {product.price}</li>
                            
                        </ul>
                        <div className="card-body">
                            <button href="#" class="card-link btn btn-success mb-2" onclick={() => addProduct(product)} >Add to Cart</button>
                            <button href="#" class="card-link btn btn-secondary">Another link</button>
                        </div>
                </div>
                }) : <h3>Were are finding products</h3>
            }
              
            
            </div>
        </div>
    );
}

export default Shop;