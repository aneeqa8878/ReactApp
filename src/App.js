import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


function App() {
  return (
<>
<Prenav/>
<Counter/>
<Navbar/>
  <Carousel/>
  <Cards/>
  <Footer/>
  <ToastContainer


position="top-left"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
  />

   </>
  );
  
}

export default App;
