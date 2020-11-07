import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.cover}>
    <div><p>first child</p></div>
    <h1>Centered Child By Cover</h1>
    <div><p>first child</p></div>
  </div>
)