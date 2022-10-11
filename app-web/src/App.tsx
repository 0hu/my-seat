import './App.css';

import { useEffect } from 'react';

import { loadItem } from './services/stoage';

import { useAppDispatch } from './hooks';

import { setAccessToken } from './authSlice';

import HeaderContainer from './HeaderContainer';
import SeatsContainer from './seatsContainer';

export default function App() {
  const dispatch = useAppDispatch();

  const accessToken = loadItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      dispatch(setAccessToken(accessToken));
    }
  }, [accessToken]);

  return (
    <div>
      <HeaderContainer/>
      <SeatsContainer/>
    </div>
  );
}
