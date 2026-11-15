import './App.css';
import ThriftHappens from './Components/Thrift-Happens';
import { products } from "./data/data";

function App() {

  return (
    <>
    <h1><b>Thrift Happens</b></h1>
    <ThriftHappens data={products} />
    </>
  )
}

export default App
