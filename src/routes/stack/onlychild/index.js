import { Fragment, h } from 'preact';

import style from './style.css';

export default () => (
  <Fragment>
    <div className={style.stack}>
      <div></div>
    </div>

    {/* If you uncomment this div
    div stack become no longer the only child */}

    {/* <div className={style.stack}>
      <div></div>
    </div> */}
    
  </Fragment>
)