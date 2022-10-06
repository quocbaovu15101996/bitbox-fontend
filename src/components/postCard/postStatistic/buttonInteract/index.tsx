import { Button } from 'antd';
import { CSSProperties, FC } from 'react';
import './index.less';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { formatNumberInSingleLetterNotation } from 'utils/Number';

type Props = {
  isSelected: boolean;
  numberInteract: number;
  isBtnLike: boolean;
  style?: CSSProperties | undefined;
  onPress: () => void;
};

const ButtonInteract: FC<Props> = ({ isSelected, numberInteract, isBtnLike, style, onPress }) => {
  const icon = isBtnLike ? <ArrowUpOutlined /> : <ArrowDownOutlined />;
  return (
    <Button
      onClick={onPress}
      icon={icon}
      style={{
        width: '100px',
        borderRadius: '8px',
        background: isSelected ? '#F0F7FF' : 'white',
        ...style
      }}
    >
      {formatNumberInSingleLetterNotation(numberInteract)}
    </Button>
  );
};

export default ButtonInteract;
