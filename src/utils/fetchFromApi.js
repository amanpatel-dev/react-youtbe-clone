import axios from 'axios';
const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  params: { 
    maxResults: '50' 
  },
  headers: {
    'X-RapidAPI-Key': '0be3b789f4msh5a62aa8241fa481p18d7f4jsn6a1c2044730f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi=async (url)=>{
const {data}=await axios.get(`${BASE_URL}/${url}`,options);
return data;
}

