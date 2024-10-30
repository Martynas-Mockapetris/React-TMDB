import 'bootstrap-icons/font/bootstrap-icons.css';

// Pasiimu visus props
const Movie = ({ movie, isFavorite, onToggleFavorite }) => {
  return (
    // Susidedu info i filmo konteineri
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      {/* Del stiliavimo i viena eile susidedu i wrapperi pavadnima */}
      <div className="title-wrap">
        <h3>{movie.title}</h3>
      </div>
      {/* Tikrinu ar filmas yra megstamiausiuose ir pagal tai rodau bootstrap ikonas */}
      <button onClick={() => onToggleFavorite(movie)}>{isFavorite ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</button>
    </div>
  );
};

export default Movie;
