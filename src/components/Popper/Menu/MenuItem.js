import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button className={cx('menu-item')} iconLeft={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
