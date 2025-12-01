export default function CatalogoItem({ img, label, link }) {
  return (
    <div className="col-6 col-md-4">
      <a href={link}>
        <div
          className="catalogo-item"
          style={{ backgroundImage: `url(${img})` }}
        >
          <span>{label}</span>
        </div>
      </a>
    </div>
  );
}
