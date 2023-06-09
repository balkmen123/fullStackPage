import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const [active, setActive] = useState(false);
  const current = history[history.length - 1]; //lấy phần tử cuối cùng trong mảng history
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
              onChange(item);
              setActive(true);
            }
          }}
        ></MenuItem>
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('Item-render', active ? 'active' : '')}>
            {history.length > 1 && (
              <Header
                title="lang"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                  setActive(false);
                }}
              ></Header>
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
