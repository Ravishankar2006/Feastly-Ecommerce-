const API_URL = 'http://localhost:5000/api';

export const getRestaurants = async () => {
  const response = await fetch(`${API_URL}/restaurants`);
  return response.json();
};

export const getMenuByRestaurant = async (restaurantId) => {
  const response = await fetch(`${API_URL}/menu/restaurant/${restaurantId}`);
  return response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};
