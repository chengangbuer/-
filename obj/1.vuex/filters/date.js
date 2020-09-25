import {fillzero} from './fillzero.js';

export default time => {
  let d = new Date();
  d.setTime(time);
  let year = d.getFullYear();
  let mon = d.getMonth()+1;
  let date = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  
  return `${year}-${fillzero(mon)}-${fillzero(date)} ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`;
  
}