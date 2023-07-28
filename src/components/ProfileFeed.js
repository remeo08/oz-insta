import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

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

function ProfileFeed({ id, contentImg, likesNum, reviewsNum }) {
    return (
        <Feed key={id} bg={contentImg}>
            <InnerContainer>
                <Icon>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    {likesNum}
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    {reviewsNum}
                </Icon>
            </InnerContainer>
        </Feed>
    );
}

export default ProfileFeed;
