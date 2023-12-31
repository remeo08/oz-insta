import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

import { styled } from 'styled-components';
import { userLogOut } from 'api';
import { userLoggedOut } from 'apollo';
import { Button } from '@chakra-ui/react';

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
    width: 630px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Column = styled.div`
    display: flex;
    text-align: center;

    span {
        margin-right: 6px;
    }
`;
// const Button = styled.div`
//     width: 100px;
//     border: 1px solid black;
//     border-radius: 3px;
// `;

function Header() {
    const onLogout = async () => {
        const res = await userLogOut();

        if (res) {
            userLoggedOut();
        }
    };

    return (
        <HeaderContainer>
            <Wrapper>
                <Column>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </Column>
                <Column>
                    <span>
                        <FontAwesomeIcon icon={faHouse} size="xl" style={{ color: '#181818' }} />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faPaperPlane} size="xl" style={{ color: '#181818' }} />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUser} size="xl" style={{ color: '#181818' }} />
                    </span>
                    <span>
                        <Button onClick={onLogout}>로그아웃</Button>
                    </span>
                </Column>
            </Wrapper>
        </HeaderContainer>
    );
}

export default Header;
