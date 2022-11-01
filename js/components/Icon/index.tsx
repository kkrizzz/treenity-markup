import { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './icomoon.module.scss';
import { IIcon } from './types';

const Icon: FunctionComponent<IIcon> = (props) => {
  const { name, className } = props;
  return (
    <i
      className={classnames(styles.root, styles[`${name}`], { [styles[`${name}`]]: name }, className)}
    />
  );
};

export default Icon;
