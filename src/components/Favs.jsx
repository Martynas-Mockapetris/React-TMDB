import Movie from './Movie';

// Pasiimu props
const Favs = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites">
      <div className="movies-grid">
        {favorites.map((movie) => (
          // Einu per favs ir paduodu man reikalinga info kiekvienam filmui
          <Movie
            key={movie.id}
            movie={movie}
            isFavorite={true}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;