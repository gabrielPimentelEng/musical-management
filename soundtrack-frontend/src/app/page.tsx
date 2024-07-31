import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Discography Manager</h1>
      <Link href="/albums" className="text-blue-500">View Albums</Link>
    </div>
  );
};

export default HomePage;