import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './Button.scss';

const Button = ({ children, outline, className, active, to, ...rest }) => {
  // React.createElement(to ? Link : 'button', {
  //   to,
  //   className: cn('Button', { outline, active }),
  //   children,
  //   ...rest,
  // });
  // 위 아래 코드가 같은거라는데 이해가 안되네...
  if (to) {
    return (
      <Link to={to} className={cn('Button', className, { outline })} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn('Button', className, { outline })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
