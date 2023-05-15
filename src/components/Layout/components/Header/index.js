import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: ' English ',
    children: {
      title: 'languege',
      data: [
        { type: 'languege', code: 'en', title: 'English' },
        { type: 'languege', code: 'vi', title: 'Tieng viet' },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>, title: ' Feedback end help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>, title: ' Keyboard shortcuts ' },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const handleMenuChange = (menuItem) => {
    console.log('---menuItem---', menuItem);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const currentUser = true;
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok"></img>
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" />
            {/* <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button> */}
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <div className={cx('current-user')}>
              <Tippy content={'UpLoad Video'}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
              </Tippy>
            </div>
          ) : (
            <>
              <Button className={'text'}>Upload</Button>
              <Button className={'primary'} iconLeft={<FontAwesomeIcon icon={faSignIn} />}>
                Login
              </Button>
            </>
          )}

          <Menu items={MENU_ITEMS}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://facon.io/avatar/namch?etag=686khMMHuH4hpnvzv"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
