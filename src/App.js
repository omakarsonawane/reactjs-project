



import Gallery from "./Gallery";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import{ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Image Gallery</h1>
    <Gallery/>
    </>
  );
}

export default App;
