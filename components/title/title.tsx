import React from 'react';
import './title.scss';
import SubTitle from '../subTitle/subtitle';
import classNames from 'classnames';

interface Title {
  children: React.ReactNode;
  subTitle: string;
  isVertical?: boolean;
  type: 'compact' | 'normal';
  theme?: 'light' | 'dark';
}

const Title = ({
  children,
  subTitle,
  theme = 'dark',
  isVertical = false,
  type,
}: Title) => {
  return (
    <div
      className={classNames('titles', type, theme, { vertical: isVertical })}
    >
      <span className="title">{children}</span>
      <SubTitle type={type}>{subTitle}</SubTitle>
    </div>
  );
};

export default Title;
