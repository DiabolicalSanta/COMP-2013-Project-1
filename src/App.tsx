import './App.css';
import CheckoutContainer from './Components/CheckoutContainer';
import ThriftHappens from './Components/Thrift-Happens';
import { products } from "./data/data";

function App() {

  return (
    <>
    <h1><b>Thrift Happens</b></h1>
    <ThriftHappens data={products} />
    <CheckoutContainer data={products}/>
    </>
  )
}

export default App
