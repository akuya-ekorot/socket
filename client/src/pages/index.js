import { useEffect, useState } from 'react';
import io from 'socket.io-client';
let socket;

export default function Home() {
  const [value, setValue] = useState('');

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket = io('http://localhost:8000');
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('update-input', input => {
      setValue(input);
    });
  }

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
    socket.emit('input-change', input);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <input className="text-slate-900 rounded p-3" type="text" value={value} onChange={handleChange} />
    </div>
  )
}
