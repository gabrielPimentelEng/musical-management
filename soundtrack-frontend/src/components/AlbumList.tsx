import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Album {
  id: number;
  name: string;
}

const AlbumList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    axios.get('/api/albums')
      .then(response => setAlbums(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul className="list-disc pl-5">
      {albums.map(album => (
        <li key={album.id}>
          {album.name}
        </li>
      ))}
    </ul>
  );
};

export default AlbumList;
