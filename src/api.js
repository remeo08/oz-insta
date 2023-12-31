import axios from 'axios';
import Cookies from 'js-cookie';
import { userLoggedIn } from 'apollo';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    // headers: {
    //     'X-CSRFToken': Cookies.get('csrftoken'),
    // },
    withCredentials: true,
});

// (1) GET: getAllFeeds()
// - 전체 게시글을 가져오는 API
// - URL: http://127.0.0.1:8000/api/v1/feeds
export const getAllFeeds = () => {
    return instance.get('feeds/').then((res) => res.data);
};
//then=콜백함수
//res=response

// (2) GET: getUserFeeds()
// - 유저 네임을 기반으로 해당 유저가 작성한 게시글만 불러온다.
// - URL: http://127.0.0.1:8000/api/v1/feeds/<str:username>
export const getUserFeeds = ({ queryKey }) => {
    // console.log('getUserFeeds', data.queryKey[1]);
    const [_, username] = queryKey;

    return instance.get('feeds/' + username).then((res) => res.data);
};

export const sessionLogin = ({ username, password }) => {
    return instance
        .post(
            'users/login',
            { username, password },
            {
                headers: {
                    'X-CSRFToken': Cookies.get('csrftoken'),
                },
            }
        )
        .then((res) => res.data);
};

// npm i js-cookie
export const userLogOut = () => {
    return instance
        .post('users/logout', '', {
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
        })
        .then((res) => res.data);
};
