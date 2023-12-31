import { styled } from 'styled-components';

const CommentsContainer = styled.div`
    margin-top: 20px;
`;
const CommentContainer = styled.div``;
const CommentCount = styled.span`
    display: block;
    opacity: 0.7;
    font-weight: 600;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const CommentAuthor = styled.span`
    font-weight: 600;
    margin-right: 10px;
`;

const CommentContent = styled.span``;

function Comments({ author, caption, reviews, reviewsNum }) {
    return (
        <CommentsContainer>
            <CommentContainer>
                <CommentAuthor>{author}</CommentAuthor>
                <CommentContent>{caption}</CommentContent>
            </CommentContainer>
            <CommentCount>댓글 {reviewsNum}개 모두 보기</CommentCount>

            {reviews?.map((review) => (
                <CommentContainer>
                    <CommentAuthor>{review.user.username}</CommentAuthor>
                    <CommentContent>{review.payload}</CommentContent>
                </CommentContainer>
            ))}
        </CommentsContainer>
    );
}

export default Comments;
