import Hero from "../components/hero.jsx";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller.jsx";
const Home = () => {
  return (
    <div className="mt-10">
      <Hero />
      <Category />
      <BestSeller/>
    </div>
  )
}

export default Home;
