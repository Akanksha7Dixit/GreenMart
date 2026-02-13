import Hero from "../components/hero.jsx";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="mt-10">
      <Hero />
      <Category />
      <BestSeller/>
      <NewsLetter/>
      <br></br>
      <Footer/>
    </div>
  )
}

export default Home;
