'use client';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import AlbumList from '../../components/AlbumList';
import AlbumDelete from '../../components/AlbumDelete';
import axios from 'axios';

interface Album {
  id: number;
  title: string;
  artist: string;
  release_date: string;
}

const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/albums`);
      setAlbums(response.data);
    } catch (err) {
      console.error('Failed to fetch albums', err);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleDelete = () => {
    fetchAlbums(); // Refresh the album list after deletion
    setSelectedAlbum(null); // Clear selection
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Álbuns</h1>
      <AlbumList albums={albums} onSelect={setSelectedAlbum} />
      {selectedAlbum && (
        <AlbumDelete album={selectedAlbum} onDelete={handleDelete} />
      )}
    </Layout>
  );
};

export default AlbumsPage;
