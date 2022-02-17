import { FC } from 'react';
import { List } from '@mui/material';
import Room from '~/features/Rooms/Room';

const ROOMS = [
  {
    id: 'xsderthrd5rdth',
    name: 'War Crimes',
    active: false,
    owned: true,
  },
  {
    id: 'xsderthd5rdth',
    name: 'Nightmare',
    active: true,
    owned: false,
  },
  {
    id: 'xsdrthrd5rdth',
    name: 'GensymTech',
    active: false,
    owned: false,
  },
  {
    id: 'xsderthrd5rdh',
    name: 'Speedrun Panel',
    active: true,
    owned: true,
  },
  {
    id: 'xsderthrd5rh',
    name: 'Minecraft',
    active: true,
    owned: false,
  },
];

interface Props {}

const RoomList: FC<Props> = () => {
  return (
    <List>
      {ROOMS.map(room => (
        <Room {...room} key={room.id} />
      ))}
    </List>
  );
};

export default RoomList;
