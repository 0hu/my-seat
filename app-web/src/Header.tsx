import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import styled from '@emotion/styled';

const MainText = styled.h1({
  color: 'black',
  textShadow: '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',

  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  'a: hover': {
    color: 'grey',
  },
});

const LoginText = styled.div({
  color: 'black',

  textShadow: '1px 1px 1px lightgrey',

  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  'a: hover': {
    color: 'grey',
  },
});

export default function Header({ accessToken, onClick }: any) {
  return (
    <header style={{ textAlign: 'center' }}>
      <MainText>
        <Link to="/">CodeSoom Space</Link>
      </MainText>
      <LoginText>
        <Link to="/signup">
          <Button>회원 가입</Button>
        </Link>
        {accessToken ? (
          <>
            <Button onClick={onClick}>로그아웃</Button>
            <Link to="/reservations">
              <Button>예약</Button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Button>로그인</Button>
          </Link>
        )}
      </LoginText>
    </header>
  );
}

