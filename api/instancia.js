import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://interno.todoscomemos.com/api'
})