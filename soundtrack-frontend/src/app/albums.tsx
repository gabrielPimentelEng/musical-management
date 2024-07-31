import React from 'react';
import AlbumList from '../components/AlbumList';

const AlbumsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Albums</h1>
      <AlbumList />
    </div>
  );
};

export default AlbumsPage;
