'use client';

import React from 'react';
import Title from '@/components/title/title';
import './partners.scss';

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-container">
          <Title subTitle="Наши партнеры" type="normal">
            Мы сотрудничаем с ведущими компаниями в нашей отрасли
          </Title>
          <div className="items">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
            <div className="item item-5"></div>
            <div className="item item-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
