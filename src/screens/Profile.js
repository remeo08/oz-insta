import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
const InnerContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;
const Icon = styled.span`
    font-size: 12px;
    display: flex;
    align-items: center;
    margin: 0 5px;
    svg {
        font-size: 14px;
        margin-right: 5px;
    }
`;
const Feed = styled.div`
    border: 1px solid black;
    position: relative;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
`;

function Profile() {
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
                <Feed bg="https://blog.kakaocdn.net/dn/dGBlmE/btseSCqyFQ0/vPoVPDI7zqueffuMIxosLk/img.jpg">
                    <InnerContainer>
                        <Icon>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            좋아요수
                        </Icon>
                        <Icon>
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            댓글수
                        </Icon>
                    </InnerContainer>
                </Feed>
                <Feed bg="https://sitem.ssgcdn.com/01/13/94/item/1000177941301_i1_750.jpg">
                    <InnerContainer>
                        <Icon>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            좋아요수
                        </Icon>
                        <Icon>
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            댓글수
                        </Icon>
                    </InnerContainer>
                </Feed>
                <Feed bg="https://item.kakaocdn.net/do/ad563a09a51ee3b56535ed9587d3d06ef43ad912ad8dd55b04db6a64cddaf76d">
                    <InnerContainer>
                        <Icon>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            좋아요수
                        </Icon>
                        <Icon>
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            댓글수
                        </Icon>
                    </InnerContainer>
                </Feed>
            </ContentContainer>
        </ProfileContainer>
    );
}

export default Profile;
