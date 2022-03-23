import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
        },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '506cfb6df6msh9e9b42bac04ec4dp18654djsn46ae9a7d87e8'
    }
};

export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
    } catch (error) {
        console.log(error)
    }
}