import 'primereact/resources/primereact.min.css';
import './layout/flags/flags.css';
import './layout/layout.scss';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// import 'prismjs/themes/prism-coy.css';
import './App.scss';
import { Crud } from './Crud';
import React, { useEffect, useRef, useState } from 'react';
import './reportWebVitals'
import axios from 'axios'
import { ProductService } from './service/ProductService';
import FileUploadDemo from './UploadComponent'
function App() {
  // const [data, setData] = useState(null)
  const [products, setProducts] = useState(null);

  const handleRemove = (data) => {
    console.log(data)

    // axios.delete(`http://localhost:3004/data/${products}`)
    //   .then(res => {
    //     console.log(res.data)

    //     //   axios.get('http://localhost:3004/data')
    //     //     .then(result => {
    //     //       console.log(result.data)
    //     //       setData({
    //     //         data: result.data
    //     //       })
    //     //     })
    //   })

  }
  useEffect(() => {
    const productService = new ProductService();
    productService.getProducts().then(data => setProducts(data));
  }, []);
  return (
    <React.Fragment>
      <div className="App">
        {/* <Crud /> */}
        <FileUploadDemo name="demo" url="./upload" auto />
      </div>
    </React.Fragment>
  );
}

export default App;
