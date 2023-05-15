import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ to, href, className, disabled, children, iconLeft, iconRight, key, acTive, ...passProps }) {
  let Comp = 'button';
  const props = { ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  //khi disabled tất cả các sự kiện sẽ delete VD: onClick
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', disabled ? 'disabled' : '', acTive ? 'active' : '', className);

  return (
    <Comp className={classes} {...props}>
      {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
      <span className={cx('title')}>{children} </span>
      {iconRight && <span className={cx('icon')}>{iconRight}</span>}
    </Comp>
  );
}

export default Button;
