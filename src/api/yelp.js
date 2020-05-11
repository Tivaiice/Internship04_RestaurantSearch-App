import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer TlB7QKGKOLRh3l5UMEfgW6U3YQUoFvhbfjihwd1008ut0UyBVYGJDpPCcZ0MJTQRSTnJLWKhyeWUCtDjbecWyZhWGBKe-Tt5hMUktizOAt3wNXFS9718UKFF18u4XnYx'
    }

});
