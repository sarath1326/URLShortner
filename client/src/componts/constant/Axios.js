

import axios from "axios";

// "https://urlshortnerbackend-gjxz.onrender.com"

const url="https://urlshortnerbackend-gjxz.onrender.com"

const instans=axios.create({

      baseURL:url
});


export default instans ;