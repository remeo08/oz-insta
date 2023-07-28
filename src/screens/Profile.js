import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getUserFeeds } from '../api';
import { useParams } from 'react-router-dom';
import ProfileFeed from 'components/ProfileFeed';

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const HeaderContainer = styled.div`
    border: 1px solid black;
    width: 630px;
    height: 200px;
    padding: 25px 40px;
    display: flex;
    align-items: center;
`;
const UserProfileImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 80px;
    border: 1px solid black;

    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: bottom;
    margin-right: 40px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 15px;
`;

const Followers = styled.div`
    padding: 15px;
`;

const ContentContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px;
    grid-gap: 15px;
`;

function Profile() {
    // (1) username 값을 어떻게 가져올 수 있을까?  -> url params
    const { username } = useParams();
    console.log('url username', username);

    // (2) 가져온 username 값을 어떻게 서버로 전달할 수 있을까?
    const { data } = useQuery(['getUserFeeds', username], getUserFeeds);
    return (
        <ProfileContainer>
            <HeaderContainer>
                <UserProfileImage bg="https://item.kakaocdn.net/do/ab0d35d97dcee11482769e5fc9aa70349f17e489affba0627eb1eb39695f93dd"></UserProfileImage>
                <UserInfo>
                    <UserName>유저가 뭔데 수저나 가져와</UserName>
                    <Followers>300 followers 100 following</Followers>
                </UserInfo>
            </HeaderContainer>

            <ContentContainer>
                {data?.map((feed) => (
                    <ProfileFeed key={feed.id} {...feed} />
                ))}
            </ContentContainer>
        </ProfileContainer>
    );
}

export default Profile;
