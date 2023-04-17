import { useEffect, useState } from 'react';
import io from 'socket.io-client';
let socket;

export default function Home() {
  const [value, setValue] = useState('');

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('http://localhost:8000');
    socket = io();
    socket.on('connect', () => {
      console.log('connected');
    });
  }

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
    socket.emit('input-change', input);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
