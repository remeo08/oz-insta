import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import { styled } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
    opacity: ${(props) => (props.disabled ? '0.7' : 1)};
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
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm({ mode: 'onChange' }); //mode: onBlur는 클린한 후 다른 곳으로 이동한 경우에 error문을 보임.

    const onSubmitValid = (data) => {
        //API CALL
        console.log('data valid', data);
        //ex) axios.post("https://oz.com/api/v1/", data)
    };

    const onSubmitInvalid = (data) => {
        console.log('data invalid', data);
    };

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
                    <Form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
                        <Input
                            type="text"
                            placeholder="휴대폰 번호 또는 이메일 주소"
                            {...register('phone', { required: true, minLength: 11 })}
                        />
                        <Input type="text" placeholder="성명" {...register('name', { required: true, minLength: 3 })} />

                        {errors.name && errors.name.type === 'required' && (
                            <p style={{ color: 'red' }}>이름은 반드시 입력되어야 합니다.</p>
                        )}

                        {errors.name && errors.name.type === 'minLength' && (
                            <p style={{ color: 'red' }}>이름은 최소 3글자 이상 입력해주셔야 합니다.</p>
                        )}
                        <Input
                            type="text"
                            placeholder="사용자 이름"
                            {...register('username', { required: true, minLength: 3 })}
                        />
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            {...register('password', { required: true, minLength: 4 })}
                        />
                        <Button type="submit" value="가입하기" disabled={!formState.isValid}>
                            가입
                        </Button>
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
