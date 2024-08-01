'use client';
import React from 'react';
import Layout from '../../../components/Layout'; // Assuming Layout is in components directory
import FaixaSearch from '../../../components/FaixaSearch'; // FaixaSearch component for searching faixas

interface Faixa {
  id: number;
  title: string;
  albumId: number;
  duration: number;
}

const SearchPage: React.FC = () => {
  const handleSelect = (faixa: Faixa) => {
    console.log('Faixa selected:', faixa);
  };

  return (
    <Layout>
      <FaixaSearch onSelect={handleSelect} />
    </Layout>
  );
};

export default SearchPage;