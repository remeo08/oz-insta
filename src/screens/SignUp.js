import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import { styled } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;

const WhiteBox = styled.div`
    background-color: white;
    border: 1px solid rgb(219, 219, 219);
    width: 100%;
`;

const TopBox = styled(WhiteBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 40px 25px 40px;
`;

const Form = styled.form`
    margin-top: 30px;
`;

const Facebook = styled.div`
    padding: 5px 0 10px;
    color: #385185;
`;

const BottomBox = styled(WhiteBox)`
    margin-top: 10px;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fff;
    border: 0.5px solid rgb(219, 219, 219);
    margin-top: 5px;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 500;
`;
const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: #0095f6;
    color: white;
    text-align: center;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    width: 268px;
`;

const Line = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
    border-bottom: 0.5px solid rgb(219, 219, 219);
`;

const Or = styled.div`
    color: rgb(115, 115, 115);
    font-weight: 600;
    font-size: 0.8125rem;
    background-color: white;
    padding: 0px 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Friend = styled.div`
    color: rgb(115, 115, 115);
    font-weight: 600;
    font-size: 12px;
    width: 268px;
    padding: 15px 0 0;
    text-align: center;
`;

function SignUp() {
    return (
        <Container>
            <Helmet>
                <title>Instagram SignUp</title>
            </Helmet>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <Friend> 친구들의 사진과 동영상을 보려면 가입하세요. </Friend>
                    <Facebook>
                        <Button type="submit">
                            <FontAwesomeIcon icon={faSquareFacebook} style={{ color: '#ffffff' }} />
                            &nbsp; Facebook으로 로그인
                        </Button>
                    </Facebook>
                    <Line>
                        <div></div>
                        <Or> OR </Or>
                    </Line>
                    <Form>
                        <Input name="username" type="text" placeholder="휴대폰 번호 또는 이메일 주소" />
                        <Input name="password" type="text" placeholder="성명" />
                        <Input name="password" type="text" placeholder="사용자 이름" />
                        <Input name="password" type="text" placeholder="비밀번호" />
                        <Button type="submit">가입</Button>
                    </Form>
                </TopBox>
                <BottomBox>
                    계정이 있으신가요? &nbsp;<Link to="/">로그인</Link>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}

export default SignUp;
