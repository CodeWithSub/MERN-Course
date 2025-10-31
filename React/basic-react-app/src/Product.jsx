import './Product.css'

function Product({ name, price = 1000, features = [] }) { //Default 1000
  let isDiscount = price >= 40000;
  let style = { backgroundColor: isDiscount ? "lightblue" : "" }
  return (
    <div className='product' style={style}>
      <h3> {name} </h3>
      <h3>Price: {price} </h3>
      {isDiscount ? <p>Discount of 5%</p> : null}
      {/* {price>=40000 && <p>Discount of 5%</p> } */}
      <ul>{features.map((feature) => <li>{feature}</li>)}</ul>
    </div>
  );
}

export default Product