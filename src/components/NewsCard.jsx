export default function NewsCard({ img, title, text, link }) {
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-decoration-none text-dark"
        >
          <img src={img} className="card-img-top" alt={title} />
          
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
