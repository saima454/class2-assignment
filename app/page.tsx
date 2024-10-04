import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

 function Home(){
  return(
    <div>
      <h1>this is my Home page.</h1>
      <Header/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home;