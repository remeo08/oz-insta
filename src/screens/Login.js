import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import { styled } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sessionLogin } from 'api';
import { useMutation } from '@tanstack/react-query';
import { userLoggedIn } from 'apollo';

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
    //useState(): 컴포넌트에서 바뀌는 변수 또는 값을 관리해주는 함수
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const userMutation = useMutation(sessionLogin, {
        onSuccess: (data) => {
            console.log('onSuccess');
            console.log('onSuccess data', data);
            userLoggedIn();
        },
        onError: () => {
            console.log('onError');
        },
    });

    const onChange = (event) => {
        const { name, value } = event.currentTarget;
        console.log(name, value);

        if (name === 'username') {
            setUserName(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault(); //새로고침 방지
        console.log('onSubmit');

        // if (password.length < 5) {
        //     alert('비밀번호가 짧습니다');
        // }

        // useQuery(GET), useMutation(UPDATE, )
        userMutation.mutate({ username, password });
    };

    return (
        <Container>
            <Helmet>
                <title>Instagram | Login</title>
            </Helmet>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <Form onSubmit={onSubmit}>
                        <Input name="username" type="text" placeholder="유저네임" onChange={onChange} required />
                        <Input name="password" type="text" placeholder="비밀번호" onChange={onChange} required />
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
                    계정이 없으신가요? &nbsp;<Link to="/signup">가입하기</Link>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}

export default Login;
