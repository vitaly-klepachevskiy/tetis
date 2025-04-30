import './subTitle.scss';
import classNames from 'classnames';

interface SubTitle {
  children: React.ReactNode;
  type: 'compact' | 'normal';
  subTitleIsVertical?: boolean;
}

const SubTitle = ({ children, type }: SubTitle) => {
  return <span className={classNames('subTitle', type)}>[{children}]</span>;
};

export default SubTitle;
