import React from 'react';
import './title.scss';
import SubTitle from '../subTitle/subtitle';
import classNames from 'classnames';

interface Title {
  children: React.ReactNode;
  subTitle: string;
  isVertical?: boolean;
  type: 'compact' | 'normal';
}

const Title = ({ children, subTitle, isVertical = false, type }: Title) => {
  return (
    <div className={classNames('titles', type, { vertical: isVertical })}>
      <span className={classNames('title', type)}>{children}</span>
      <SubTitle type={type}>{subTitle}</SubTitle>
    </div>
  );
};

export default Title;
