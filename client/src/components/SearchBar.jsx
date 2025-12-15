import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto'
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '50px',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    outline: 'none'
  }
};

export default SearchBar;
