import React from 'react';
import './description.scss';
import Title from '@/components/title/title';

const Description = () => {
  return (
    <section className="description">
      <div className="container">
        <div className="description-container">
          <Title subTitle="Наши принципы" type="normal">
            Интерьеры, которые отражают ваш стиль и индивидуальность
          </Title>
          <div className="items">
            <div className="item" style={{ gridArea: 'A' }}>
              <Title subTitle="01" type="compact">
                Гарантия на всю мебель
              </Title>
              <span className="description">
                Мы уверены в качестве нашей продукции на 100%, поэтому
                предоставляем нашим клиентам комплексную гарантию
              </span>
            </div>
            <div className="item" style={{ gridArea: 'B' }}>
              <Title subTitle="02" type="compact">
                Все точно в срок
              </Title>
              <span className="description">
                Мы понимаем, что вы хотите получить свою мебель в краткие сроки,
                поэтому мы работаем оперативно на каждом этапе от принятия
                заказа до сборки
              </span>
            </div>
            <div className="item" style={{ gridArea: 'C' }}>
              <Title subTitle="03" type="compact">
                Премиальные материалы
              </Title>
              <span className="description">
                Мы тщательно отбираем поставщиков и следим за качеством и
                функциональностью, чтобы гарантировать долговечность и
                надежность наших изделий
              </span>
            </div>
            <div className="item" style={{ gridArea: 'D' }}>
              <Title subTitle="04" type="compact">
                Профессиональная команда
              </Title>
              <span className="description">
                Наши специалисты обладают многолетним опытом и широкими знаниями
                в области мебельного производства, что позволяет нам выполнять
                самые сложные заказы
              </span>
            </div>
            <div className="item" style={{ gridArea: 'E' }}>
              <Title subTitle="05" type="compact">
                Предугадываем желания
              </Title>
              <span className="description">
                Мы гарантируем, что каждое изделие будет выполнено с любовью и
                вниманием ко всем деталям, учитывая все ваши предпочтения,
                параметры помещения и другие особенности, даря вам абсолютный
                комфорт
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
