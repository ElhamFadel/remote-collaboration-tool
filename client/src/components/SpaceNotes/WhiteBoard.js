import { useEffect } from 'react';
import { CardNote } from '../ui';
import io from 'socket.io-client';
const socket = io('http://localhost:4000');

import * as S from './style';

const WhiteBoard = () => {
  useEffect(() => {
    socket.on('participants', (participants) => {
      console.log(participants, 'participants');
    });
    socket.on('new-note', (data) => {
      console.log('new-note', data);
    });
    return () => {
      socket.off('new-note');
      socket.off('participants');
    };
  }, []);
  return (
    <S.ContainerWhiteBoard>
      <button className="syncing-increase-btn">+</button>
      <CardNote />
    </S.ContainerWhiteBoard>
  );
};

export default WhiteBoard;
