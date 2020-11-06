import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.withsidebar}>
    <form>
      <input type="text" aria-label="Search" />
      <button type="submit">Search</button>
    </form>
  </div>
) 