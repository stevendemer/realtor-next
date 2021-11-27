import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'e54b8aeaf8msh35fa7620e9f6f67p1289dajsn91dc5d3f3afc'
// }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e54b8aeaf8msh35fa7620e9f6f67p1289dajsn91dc5d3f3afc'
        }
    })
    return data;
}