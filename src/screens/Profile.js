import { hover } from '@testing-library/user-event/dist/hover';
import { styled } from 'styled-components';

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
    background-color: black;
    border-radius: 80px;
    margin-right: 40px;

    img {
        width: 100%;
        height: 100%;
    }
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
const ContentContainer = styled.div``;
const ContentWrapper = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 300px;
    grid-gap: 15px;
`;

const Feed = styled.div`
    border: 1px solid black;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        background-color: black;
        opacity: 0.5;
    }
`;

function Profile() {
    return (
        <ProfileContainer>
            <HeaderContainer>
                <UserProfileImage>
                    {/* <img src="https://upload3.inven.co.kr/upload/2022/03/23/bbs/i15628137632.jpg?MW=800"></img> */}
                </UserProfileImage>
                <UserInfo>
                    <UserName>유저가 뭔데 수저나 가져와</UserName>
                    <Followers>300 followers 100 following</Followers>
                </UserInfo>
            </HeaderContainer>
            <ContentContainer>
                <ContentWrapper>
                    <Feed>
                        <img src="https://blog.kakaocdn.net/dn/dGBlmE/btseSCqyFQ0/vPoVPDI7zqueffuMIxosLk/img.jpg"></img>
                    </Feed>
                    <Feed>
                        <img src="https://sitem.ssgcdn.com/01/13/94/item/1000177941301_i1_750.jpg"></img>
                    </Feed>
                    <Feed>
                        <img src="https://item.kakaocdn.net/do/ad563a09a51ee3b56535ed9587d3d06ef43ad912ad8dd55b04db6a64cddaf76d"></img>
                    </Feed>
                </ContentWrapper>
            </ContentContainer>
        </ProfileContainer>
    );
}

export default Profile;
