// import { useEffect, useState } from 'react';
// import axios from 'axios';


// interface Album {
//   id: number;
//   title: string;
//   artist: string;
//   release_date: string;
// }

// const AlbumList: React.FC = () => {
//   const [albums, setAlbums] = useState<Album[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/albums`);
//         console.log('Response data:', response.data); // Debugging line
//         setAlbums(response.data);
//       } catch (err) {
//         setError('Failed to fetch albums');
//         console.error('Error fetching albums:', err); // Debugging line
//       }
//     };

//     fetchAlbums();
//   }, []);

//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Albums</h1>
//       <ul>
//         {albums.length > 0 ? (
//           albums.map(album => (
//             <li key={album.id}>
//               <strong>{album.title}</strong> by {album.artist} (Released: {new Date(album.release_date).toLocaleDateString()})
//             </li>
//           ))
//         ) : (
//           <li>No albums found</li> // Display if no albums are fetched
//         )}
//       </ul>
//     </div>
//   );
// };

// export default AlbumList;

// components/AlbumList.tsx
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
            <p className="text-sm text-gray-600">Artista: {album.artist}</p>
            <p className="text-sm text-gray-600">Data de lançamento (AAAA/MM/DD): {album.release_date}</p>
            <button
              onClick={() => onSelect(album)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;

