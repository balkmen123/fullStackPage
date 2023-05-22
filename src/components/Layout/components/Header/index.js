import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faCloudUpload,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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

const userMenu = [
  { icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>, title: ' View profile', to: '@Nam' },
  { icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>, title: ' Get coins', to: '/coin' },
  { icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>, title: ' Setting', to: '/Setting' },
  ...MENU_ITEMS,
  { icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>, title: ' Log out', to: '/Logout', separate: true },
];

function Header() {
  const currentUser = true;
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok"></img>
        </div>

        {/* Search */}
        <Search></Search>
        <div className={cx('actions')}>
          {currentUser ? (
            <div className={cx('current-user')}>
              <Tippy delay={[0, 200]} content={'UpLoad Video'}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content={'UpLoad Video'}>
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                   */}
                  <UploadIcon height="3rem" width="3rem" className={cx('icon-header')}></UploadIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content={'UpLoad Video'}>
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                   */}
                  <MessageIcon height="3.5rem" width="3.5rem" className={cx('icon-header')}></MessageIcon>
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

          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image
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
