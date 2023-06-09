import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from './Footer';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('container')}>
        <Sidebar></Sidebar>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
