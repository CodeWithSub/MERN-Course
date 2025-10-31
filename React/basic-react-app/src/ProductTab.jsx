import Product from './Product.jsx'

export default function ProductTab() {
  return (
    <div>
      <Product name='Phone' price={20000} features={["Reliable", "Value for money"]} /> {/* Number should be inside {} */}
      <Product name='Laptop' price={60000} features={["Good Build Quality", "Catchy Design"]} />
    </div>
  )
}