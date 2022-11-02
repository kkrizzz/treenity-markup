import { FunctionComponent, useState } from 'react';
import { Col, Row, Select } from 'antd';
import styles from './select.module.scss';
import { SelectProps } from 'antd/lib/select';
import { DefaultOptionType } from 'rc-select/lib/Select';
import classnames from 'classnames';
import Icon from '../Icon';

interface ISelectComponent extends SelectProps<any, DefaultOptionType> {
  label?: string;
}

const SelectComponent: FunctionComponent<ISelectComponent> = ({ label, ...props }) => {
  const [isOpened, setIsOpened] = useState(props.open || false);
  const [isFocus, setFocus] = useState(false);

  return (
    <Row className={styles.root}>
      <Col className={styles.wrapper}>
        {label && (
          <label className={classnames(styles.label, { [styles.active]: isOpened || isFocus })}>{label}</label>
        )}
        <Select
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          suffixIcon={<Icon
            className={classnames(styles['select-arrow'], { [styles['active']]: isOpened })}
            name="select-arrow"
          />}
          onDropdownVisibleChange={setIsOpened}
          className={classnames(props.className, styles.select, { [styles['multiple']]: props.mode === 'tags' })}
        />
      </Col>
    </Row>
  );
};

export default SelectComponent;