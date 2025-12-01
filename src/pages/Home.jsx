import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import NewsSection from "../components/NewsSection";
import "../css/Carousel.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <FeaturedProducts />
      <NewsSection />
      <Footer />
    </>
  );
}
