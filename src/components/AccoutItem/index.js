import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/320163386_1903971283272490_4153491822156817991_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HfxA11N0tTcAX-BxXKp&_nc_ht=scontent.fhan12-1.fna&oh=00_AfAF4MCalSsH8djBy4pZI3-rogX78YYycbCAw8D9pZdzpw&oe=645FABA3"
        alt=" "
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}> nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
