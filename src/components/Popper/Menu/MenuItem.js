import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, acTive }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} iconLeft={data.icon} to={data.to} onClick={onClick} acTive>
      {data.title}
    </Button>
  );
}

export default MenuItem;
