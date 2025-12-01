import NewsCard from "./NewsCard";

export default function NewsSection() {
  const news = [
    {
      img: "/img/imgNoticias/imgJujutsuKaisen.jpeg",
      title: "Nueva temporada de Jujutsu Kaisen",
      text: "El anime regresa con una nueva temporada llena de acción y sorpresas.",
      link: "https://as.com/meristation/manga-y-anime/se-acabo-la-espera-jujutsu-kaisen-presenta-el-primer-trailer-de-su-temporada-3-y-ya-hay-fecha-de-estreno-n/"
    },
    {
      img: "/img/imgNoticias/imgNarutoSasuke2.jpeg",
      title: "Figura 3D de Naruto",
      text: "Se lanza una edición coleccionista con detalles increíbles y edición limitada.",
      link: "https://naruto-official.com/es/news/01_1839"
    },
    {
      img: "/img/imgNoticias/imgLuffy.png",
      title: "One Piece: Luffy en Gear 5",
      text: "La esperada figura ya está disponible para preventa en tiendas oficiales.",
      link: "https://as.com/meristation/manga-y-anime/one-piece-para-todos-los-bolsillos-con-un-imponente-luffy-gear-5-y-otro-que-es-una-monada-n/"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Noticias de Anime y Figuras 3D</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {news.map((n, i) => (
          <NewsCard key={i} {...n} />
        ))}
      </div>
    </div>
  );
}
