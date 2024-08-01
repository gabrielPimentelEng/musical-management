import { useState } from 'react';
import axios from 'axios';
import '@/styles/albumAdd.css';

interface Album {
  id: number;
  title: string;
  artist: string;
  release_date: string;
}

const AlbumSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/albums/search`, {
        params: { query: query },
      });
      setAlbums(response.data);
    } catch (err) {
      setError('Failed to fetch albums');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Escolha uma sequência de palavras que contenha no(s) título(s) desejado(s)</h1>
      <form onSubmit={handleSearch} className="mt-4">
        <div className="mb-4">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">Pesquisa por título</label>
          <input
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-text mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Título"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confimar
        </button>
      </form>

      {error && <div className="mt-4 text-red-600">{error}</div>}

      <div className="mt-4">
        <ul>
          {albums.map(album => (
            <li key={album.id} className="mb-2 p-2 border border-gray-200 rounded-md">
              <h2 className="text-lg font-semibold">{album.title}</h2>
              <p className="text-sm text-gray-600">Artista: {album.artist}</p>
              <p className="text-sm text-gray-600">Data de Lançamento (AAAA/MM/DD): {album.release_date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumSearch;
