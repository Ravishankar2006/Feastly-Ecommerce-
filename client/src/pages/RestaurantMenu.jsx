import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from './Menu';

const RestaurantMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Menu restaurantId={id} />
    </div>
  );
};

const styles = {
  backBtn: {
    margin: '1rem',
    padding: '0.7rem 1.5rem',
    backgroundColor: '#00bfff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default RestaurantMenu;
