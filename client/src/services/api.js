const API_URL = "https://feastly-ecommerce.onrender.com/api";

export const getRestaurants = async () => {
  const res = await fetch(`${API_URL}/restaurants`);
  return res.json();
};

export const getMenuByRestaurant = async (restaurantId) => {
  const res = await fetch(`${API_URL}/menu/${restaurantId}`);
  return res.json();
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
