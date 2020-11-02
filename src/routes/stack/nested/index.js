import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.stack_large}>
    <div></div>
    <div className={style.stack_small}>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </div>
)