import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.boxcontainer}>
    <div className={style.boxheader}>head</div>
    <div className={style.boxbody}>body</div>
  </div>
);