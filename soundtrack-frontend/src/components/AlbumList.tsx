import { FC } from 'react';

interface Album {
  id: number;
  title: string;
  artist: string;
  release_date: string;
}

interface AlbumListProps {
  albums: Album[];
  onSelect: (album: Album) => void;
}

const AlbumList: FC<AlbumListProps> = ({ albums, onSelect }) => {
  return (
    <div>
      <ul>
        {albums.map(album => (
          <li key={album.id} className="mb-2 p-2 border border-gray-200 rounded-md">
            <h2 className="text-lg font-semibold">{album.title}</h2>
            <p className="text-sm text-gray-600">Álbum Id: {album.id}</p>
            <p className="text-sm text-gray-600">Artista: {album.artist}</p>
            <p className="text-sm text-gray-600">Data de lançamento (AAAA/MM/DD): {album.release_date}</p>
            <button
              onClick={() => onSelect(album)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;

