import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SFbFKt4Z_VZ78-kBWJudr_Dzr8CBNNGpRj0IuH_PazqbIWikAzmsvr6mkTn8nEfvnR2nKNx6kA4SCehICar4qr4P3SMCRuzCAhH-2rVqpvmZi5x2HcRKhxTQaBu6XnYx'
    }

});
