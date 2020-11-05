import { h } from 'preact';

import style from './style.css';

export default () => (
  <div className={style.stack}>
    <div></div>
    <div></div>
    <div className={style.center}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse auctor sed dui in cursus. Praesent rhoncus maximus arcu in dictum. 
        Cras nec lacus at est pulvinar egestas a a velit. Aliquam pellentesque neque luctus 
        elit congue mattis. Proin semper augue vitae varius ullamcorper. Aenean odio turpis, gravida eget pharetra 
        ac, dapibus eget neque. In id pretium enim, vitae elementum augue. Morbi imperdiet erat eget justo feugiat, 
        vehicula scelerisque sapien fringilla. Vivamus eleifend viverra luctus. Vivamus leo enim, placerat quis lectus vitae, sagittis 
        gravida augue. Nulla et tristique dolor, vehicula vehicula erat. Mauris dictum libero diam, nec pellentesque enim luctus ac. 
        Duis auctor turpis erat, consequat semper nisl varius tincidunt. Suspendisse auctor elementum ligula ut gravida.</p>
      <button>BUTTON</button>
    </div>
    <div></div>
    <div></div>
  </div>
)