import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.stack}>
    <p>...</p>
    <blockquote>...</blockquote>
    <div className={style.box}></div>
    <p>...</p>
  </div>
)