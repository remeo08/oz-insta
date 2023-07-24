import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { far } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';

import { faBookmark, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import Comments from './Comments';

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 60px;
`;

const Wrapper = styled.div`
    max-width: 650px;
`;

const FeedHeader = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    border-bottom: 1px solid black;
`;

const FeedAction = styled.div`
    margin-right: 10px;
    cursor: pointer;
`;

const FeedActionContainer = styled.div`
    padding: 12px 15px;
`;

const UserPfofileContainer = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`;

const UserProfileName = styled.div`
    margin-left: 10px;
    font-weight: 600;
`;

const FeedImg = styled.img`
    width: 100%;
    max-width: 100%;
`;

const FeedActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;
    }
    svg {
        font-size: 20px;
    }
`;

const ProfileImgContainer = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
`;

const UserPfofileImg = styled.img`
    max-width: 100%;
`;

const Column = styled.div``;

function Feed({ id, contentImg, caption, user, likesNum, reviewsNum, reviews, isLiked }) {
    return (
        <FeedContainer key={id}>
            <Wrapper>
                <FeedHeader>
                    <ProfileImgContainer>
                        <UserPfofileImg src={user.profileImg}></UserPfofileImg>
                    </ProfileImgContainer>

                    <UserProfileName>{user.username}</UserProfileName>
                </FeedHeader>

                <FeedImg src={contentImg}></FeedImg>

                <FeedActionContainer>
                    <FeedActions>
                        <Column>
                            <FeedAction>
                                <FontAwesomeIcon style={{ color: 'tomato' }} icon={false ? SolidHeart : far.faHeart} />
                            </FeedAction>

                            <FeedAction>
                                <FontAwesomeIcon icon={faComment} />
                            </FeedAction>

                            <FeedAction>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </FeedAction>
                        </Column>

                        <Column>
                            <FontAwesomeIcon icon={faBookmark} />
                        </Column>
                    </FeedActions>

                    <Comments
                        key={id}
                        author={user.username}
                        caption={caption}
                        reviews={reviews}
                        reviewsNum={reviewsNum}
                    />
                </FeedActionContainer>
            </Wrapper>
        </FeedContainer>
    );
}

export default Feed;
