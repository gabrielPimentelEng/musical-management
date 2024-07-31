import { useEffect, useState } from 'react';
import axios from 'axios';

interface Album {
  id: number;
  title: string;
  artist: string;
  release_date: string;
}

const AlbumList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/albums`);
        console.log('Response data:', response.data); // Debugging line
        setAlbums(response.data);
      } catch (err) {
        setError('Failed to fetch albums');
        console.error('Error fetching albums:', err); // Debugging line
      }
    };

    fetchAlbums();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.length > 0 ? (
          albums.map(album => (
            <li key={album.id}>
              <strong>{album.title}</strong> by {album.artist} (Released: {new Date(album.release_date).toLocaleDateString()})
            </li>
          ))
        ) : (
          <li>No albums found</li> // Display if no albums are fetched
        )}
      </ul>
    </div>
  );
};

export default AlbumList;
