import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import { styled } from 'styled-components';

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
    padding: 35px 0 10px;
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
    background-color: #fafafa;
    border: 0.5px solid rgb(219, 219, 219);
    margin-top: 5px;
    box-sizing: border-box;
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

function Login() {
    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <Form>
                        <Input name="username" type="text" placeholder="유저네임" />
                        <Input name="password" type="text" placeholder="비밀번호" />
                        <Button type="submit">로그인</Button>
                    </Form>
                    <Line>
                        <div></div>
                        <Or> OR </Or>
                    </Line>

                    <Facebook>
                        <FontAwesomeIcon icon={faSquareFacebook} style={{ color: '#385185' }} />
                        &nbsp;Facebook으로 로그인
                    </Facebook>
                </TopBox>
                <BottomBox>
                    계정이 없으신가요? &nbsp;<a href="/login">가입하기</a>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}

export default Login;
