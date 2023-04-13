import { DataContext } from "../context/DataProvider";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    /*
    1. access to our cart and setCart --- context
    2. clear the entire cart
    3. remove all of a certain item
    4. increment (+)
    5. descrement (-)
    */

    const {cart, setCart} = useContext(DataContext);

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Your Cart:</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    {Object.values(cart.products).map((product, index) => {
        console.log(product);
        return <ListGroup.Item key={index}>
            <Card.Img variant="top" src={product.data.img_url} />
            <h3>{product.data.name}</h3>
            <h5>{product.data.make}{product.data.model}</h5>
            <h5>Price:$ {product.data.price}</h5>
            <Button variant="warning"><b> - 1 </b></Button>
            <span>{product.quantity}</span>
            <Button variant="success"><b> + 1 </b></Button>
        </ListGroup.Item>
    })}
    
    </ListGroup>
    <Card.Body>
        <Button variant="primary">Checkout</Button>
    </Card.Body>
</Card>
  );
}

export default Cart;