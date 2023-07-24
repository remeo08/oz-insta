import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    headers: {
        'X-CSRFToken': faCookie.get('csrftoken'),
    },
    withCredentials: true,
});

// (1) GET: getAllFeeds()
// - 전체 게시글을 가져오는 API
// - URL: http://127.0.0.1:8000/api/v1/feeds
const getAllFeeds = () => {
    return instance.get('feeds').then((res) => console.log(res.data));
};
//then=콜백함수
//res=response
