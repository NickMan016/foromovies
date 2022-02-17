import axios from 'axios';

export default async function movieDBApi( url ) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3${url}?api_key=494a95f40485f23916fc695e58b757e6&language=es-MX`);

        return response;
    } catch (error) {
        Promise.reject(error);
    }
}