// import that from '../main.js';
// import axios from 'axios'

export const BASE_URL = process.env.NODE_ENV == 'development'
  ? 'http://159.226.128.250/MEMS/'
  // : 'http://test.yltyxy.com/'
  : 'http://159.226.128.250/MEMS/'

export const getRem = function (n = 1) {
  if (isNaN(n)) return
  n = Number(n);
  let html = document.querySelector('html');
  let fontSize = window.getComputedStyle(html).getPropertyValue('font-size');
  return n * parseFloat(fontSize);
}
