'use client';

import React, { useEffect, useRef, useState } from 'react';
import Title from '@/components/title/title';
import './stages.scss';
import { Icon } from '../../ui/icon';

const Stages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    setAtStart(container.scrollLeft <= 0);
    setAtEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
    ); // небольшой зазор
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -230, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 230, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    updateScrollPosition(); // инициализация

    container.addEventListener('scroll', updateScrollPosition);
    return () => container.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <section className="stages">
      <div className="container">
        <div className="stages-container">
          <Title subTitle="Этапы работы" type="normal">
            Как будет проходить работа с нами
          </Title>
          <div className="items" ref={scrollRef}>
            <div className="item">
              <Title subTitle="01" type="compact" isVertical={true}>
                Консультация и замер помещения
              </Title>
              <span className="description">
                Свяжитесь с нами любым удобным для Вас способом для консультации
                с менеджером и записи на бесплатный замер помещения
              </span>
            </div>
            <div className="item">
              <Title subTitle="02" type="compact" isVertical={true}>
                3D-визуализация, подбор материалов
              </Title>
              <span className="description">
                Наш опытный дизайнер разработает 3D-модель будущего проекта. Вы
                сможете выбрать все материалы, цвета и фурнитуру, чтобы создать
                свое уникальное изделие
              </span>
            </div>
            <div className="item">
              <Title subTitle="03" type="compact" isVertical={true}>
                Производство
              </Title>
              <span className="description">
                После утверждения проекта и подписания договора запускается
                производство. Сроки изготовления зависят от сложности проекта и
                загруженности фабрики, и как правило,не превышают 45 дней
              </span>
            </div>
            <div className="item">
              <Title subTitle="04" type="compact" isVertical={true}>
                Доставка и сборка
              </Title>
              <span className="description">
                Готовое изделие проходит контроль качества и доставляется в
                сроки, указанные в договоре. Наши опытные сборщики оперативно
                установят мебель, что позволит обеспечить ее надежность и
                долговечность
              </span>
            </div>
          </div>
          <div className="buttons">
            <Icon
              theme="light"
              type="scroll"
              name={atStart ? 'left-disabled' : 'left'}
              width={34}
              height={34}
              onClick={scrollLeft}
            />
            <Icon
              theme="light"
              type="scroll"
              name={atEnd ? 'right-disabled' : 'right'}
              width={34}
              height={34}
              onClick={scrollRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stages;
