const Search = ({ searchTerm, handleSearch, genres, handleGenreSelect }) => {
  return (
    <header>
      <input type="text" placeholder="Filmo pavadinimas..." value={searchTerm} onChange={handleSearch} />
      <select
        onChange={(e) => {
          // Pasitikrinu ar veikia
          // console.log('id:', e.target.value);
          // Kvieciu funkcija ir paduodu zanro id
          handleGenreSelect(e.target.value);
        }}
      >
        <option value="">Pasirinkite Žanrą</option>
        {/* Susidedu visus zanrus */}
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Search;