import axios from 'axios';
// `https://www.omdbapi.com/?s=${searchText}&apikey=5a7a5f14`

// axios.get(`https://www.omdbapi.com/?s=harry&apikey=5a7a5f14`)
//     .then((res) => {
//         console.log(res.data)
//     })

async function fetchdata() {
    const res = await axios.get(`https://www.omdbapi.com/?s=harry&apikey=5a7a5f14`)
    console.log(res.data)
}

fetchdata()
