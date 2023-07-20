import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';

const FeedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;
const Wrapper = styled.div`
    width: 630px;
    height: 600px;
    border: 1px solid black;
`;
const FeedHeader = styled.div`
    height: 60px;
    padding: 15px 20px;
    border: 1px solid black;
    display: flex;
    align-items: center;
`;
const ProfileImage = styled.div`
    width: 40px;
    height: 40px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 80px;
    }
`;
const UserName = styled.div`
    padding-left: 10px;
`;
const FeedImage = styled.div`
    border-radius: 50px;

    img {
        width: 100%;
    }
`;
const FeedActions = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;

const Icons = styled.div`
    display: flex;
    width: 78px;
    justify-content: space-between;
`;
const Likes = styled.div`
    padding: 7px 20px;
`;
const CommentContainer = styled.div`
    padding: 8px 20px;
    font-size: 13px;
`;
const SingleComment = styled.div`
    display: flex;
    padding-bottom: 7px;
`;
const CommentWriter = styled.div`
    font-weight: 700;
    padding-right: 10px;
`;
const CommentContent = styled.div``;
const CommentAll = styled.div`
    padding-bottom: 10px;
    font-size: 12px;
    color: rgb(115, 115, 115);
`;

function Home() {
    return (
        <FeedContainer>
            <Wrapper>
                <FeedHeader>
                    <ProfileImage>
                        <img src="https://t1.daumcdn.net/cfile/tistory/247A4D3D556FFF5224"></img>
                    </ProfileImage>
                    <UserName>유저가 뭔데 수저나 가져와</UserName>
                </FeedHeader>
                <FeedImage>
                    <img src="https://i.ytimg.com/vi/9uzDtWkbV8Q/maxresdefault.jpg"></img>
                </FeedImage>
                <FeedActions>
                    <Icons>
                        <div>
                            <FontAwesomeIcon
                                style={{ color: '#f73636' }}
                                icon={false ? SolidHeart : far.faHeart}
                                size="xl"
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faComment} size="xl" style={{ color: '#1f1f1f' }} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPaperPlane} size="xl" style={{ color: '#181818' }} />
                        </div>
                    </Icons>
                    <div>
                        <FontAwesomeIcon icon={faBookmark} size="xl" style={{ color: '#1f1f1f' }} />
                    </div>
                </FeedActions>
                <Likes>0 Likes</Likes>
                <CommentContainer>
                    <SingleComment>
                        <CommentWriter>작성자</CommentWriter>
                        <CommentContent>작성 내용</CommentContent>
                    </SingleComment>
                    <CommentAll>댓글 N개 모두 보기</CommentAll>
                    <SingleComment>
                        <CommentWriter>작성자</CommentWriter>
                        <CommentContent>작성 내용</CommentContent>
                    </SingleComment>
                    <SingleComment>
                        <CommentWriter>작성자</CommentWriter>
                        <CommentContent>작성 내용</CommentContent>
                    </SingleComment>
                </CommentContainer>
            </Wrapper>
        </FeedContainer>
    );
}

export default Home;
