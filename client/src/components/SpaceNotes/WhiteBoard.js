import { useEffect, useState } from 'react';
import { CardNote } from '../ui';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');

import * as S from './style';

const WhiteBoard = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [participations, setParticipations] = useState({});
  const onMouseMove = (e) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let src = e.currentTarget.children[0].getAttribute('src');
    socket.emit('client-position', { x, y, src });
    setCoordinates({ x, y });
  };
  console.log(participations, 'participations');
  useEffect(() => {
    socket.on('participants', (participants) => {
      console.log(participants, 'participants');
    });
    socket.on('client-position', (data) => {
      setParticipations({ ...participations, [data.id]: data });
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
    <S.ContainerWhiteBoard onMouseMove={onMouseMove}>
      <S.UserAvater src="https://i.pravatar.cc/300" coordinates={coordinates} />
      {Object.keys(participations).map((key) => {
        return (
          <S.UserAvater key={key} src={participations[key].img} coordinates={participations[key]} />
        );
      })}
      <button className="syncing-increase-btn">+</button>
      <CardNote />
    </S.ContainerWhiteBoard>
  );
};

export default WhiteBoard;
