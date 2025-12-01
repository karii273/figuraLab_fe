import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CatalogoItem from "../components/CatalogoItem";
import "../css/catalogo.css";
import BackButton from "../components/BackButton";


export default function Categorias() {
  const categorias = [
    { label: "Anime", img: "/img/imgCatalogo/imgAnime.png", link: "/categoria/Anime" },
    { label: "Videojuegos", img: "/img/imgCatalogo/imgVideo.jpg", link: "/categoria/Videojuegos" },
    { label: "Comics", img: "/img/imgCatalogo/imgcomic.jpg", link: "/categoria/Comics" },
    { label: "Peliculas", img: "/img/imgCatalogo/imgPelicula.jpg", link: "/categoria/Películas" },
    { label: "Dioramas", img: "/img/imgCatalogo/imgDiorama.jpg", link: "/categoria/Dioramas" },
    { label: "+18", img: "/img/imgCatalogo/img18.png", link: "/categoria/%2B18" }
  ];

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="row g-3 justify-content-center">
          {categorias.map((c, i) => (
            <CatalogoItem key={i} {...c} />
          ))}

        </div>
      </div>
      <BackButton/>
      <Footer />
    </>
  );
}
