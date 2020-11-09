import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.imposter}>
    <div>
        <p>It’s decision time, sunshine!</p>
        <button>Yes</button>
        <button>No</button>
    </div>
  </div>
)