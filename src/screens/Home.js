import Feed from '../components/Feed';
import { useState, useEffect } from 'react';

function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/v1/feeds/');
        const json = await res.json();

        setData(json);
        setLoading(false);
    };

    // API 통신을 할 때 사용
    // 가장 최초에 컴포넌트가 생성될 때 한 번 useEffect가 실행된다.
    // -> componentDidMount()
    useEffect(() => {
        fetchData();
    }, []);
    const datas = [
        {
            id: 1,
            contentImg:
                'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            caption: '내용입니다',
            user: {
                username: 'development',
                profileImg:
                    'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            },
            likesNum: 100,
            reviewsNum: 33,
            isLiked: false,
            reviews: [
                {
                    id: 1,
                    payload: '첫 번째 댓글',
                    user: {
                        username: 'nickname2',
                        profileImg: 'https://en.pimg.jp/081/949/515/1/81949515.jpg',
                    },
                },
                {
                    id: 2,
                    payload: '두 번째 댓글',
                    user: {
                        username: 'korean_tiger',
                        profileImg: 'https://en.pimg.jp/081/949/515/1/81949515.jpg',
                    },
                },
            ],
        },
        {
            id: 2,
            contentImg:
                'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            caption: '내용입니다',
            user: {
                username: 'development',
                profileImg:
                    'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            },
            likesNum: 123,
            reviewsNum: 33,
            isLiked: true,
        },
        {
            id: 3,
            contentImg:
                'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            caption: '내용입니다',
            user: {
                username: 'development',
                profileImg:
                    'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            },
            likesNum: 93,
            reviewsNum: 33,
            isLiked: false,
        },
    ];

    console.log('data', data);

    return (
        <div>
            {data?.map((feed) => (
                <Feed key={feed.id} {...feed} />
            ))}
        </div>
    );
}

export default Home;
