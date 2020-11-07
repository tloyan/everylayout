import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.cover}>
    <div className={style.cluster}>
      <div>
        <div><img src="/assets/image.jpg" /></div>
        <div className={style.clusternav}>
          <div>
            <p><a>About</a></p>
            <p><a>Blog</a></p>
            <p><a>Post</a></p>
            <p><a>Contact</a></p>
            <p><a>Accesibility</a></p>
          </div>
        </div>
      </div>
    </div>
    <h1>Title Centered By Cover Layout</h1>
    <p>Just litle footer</p>
  </div>
)