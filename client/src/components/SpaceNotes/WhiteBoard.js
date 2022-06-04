import { useEffect } from 'react';
import { CardNote } from '../ui';
import Mitt from 'mitt';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');
import * as S from './style';
const emitter = new Mitt();
const createNewNote = async () => {
  await socket.emit('new-note');
};
const WhiteBoard = () => {
  useEffect(() => {
    socket.on('connect', () => console.log(socket.id));
    socket.on('new-note', (noteId, operations) => {});
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000);
    });
    socket.on('disconnect', () => console.log('Client disconnected'));
  }, []);
  return (
    <S.ContainerWhiteBoard>
      <CardNote />
    </S.ContainerWhiteBoard>
  );
};

export default WhiteBoard;
