import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, acTive }) {
  console.log(data);
  return (
    <Button className={cx('menu-item')} iconLeft={data.icon} to={data.to} onClick={onClick} acTive>
      {data.title}
    </Button>
  );
}

export default MenuItem;
