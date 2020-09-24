const URL = 'https://api.giphy.com/v1/gifs/random';
const API = '?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY';

export const fetchImages = async () => {
  const response = await fetch(`${URL}${API}`)
  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.message);
  }
    
  return data;
};