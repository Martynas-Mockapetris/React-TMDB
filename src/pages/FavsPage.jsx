import Favs from '../components/Favs';

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div>
      <h1>mano mėgstamiausi</h1>
      {/* Kvieciu favs komp ir duodu duomenis */}
      <Favs favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default Favorites;
