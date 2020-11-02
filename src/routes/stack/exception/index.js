import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.stack}>
    <div></div>
    <div></div>
    <div className={style.stackexception} ></div>
    <div></div>
    <div></div>
  </div>
)