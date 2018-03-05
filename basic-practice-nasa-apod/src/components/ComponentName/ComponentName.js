import React from 'react';
import styles from './ComponentName.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ComponentName = ()=>{
  return(
    <div className={cx('component-name')}>
    </div>
  )
}

export default ComponentName;