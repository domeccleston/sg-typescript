import { User } from './models/User';
import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'Dom',
  age: 24
});

// const user = new User({ name: 'Dom', age: 24 });

// user.on('change', () => {});
// user.on('change', () => {});
// user.on('mousedown', () => {});

// console.log(user)