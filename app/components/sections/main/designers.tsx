import Title from '@/components/title/title';
import Button from '@/components/ui/button';
import './designers.scss';

const Designers = () => {
  return (
    <section className="designers">
      <div className="container">
        <div className="designers-container">
          <Title
            subTitle="Партнерам"
            type="normal"
            isVertical={true}
            theme="light"
          >
            Мы открыты к сотрудничеству с дизайнерами, дизайн-студиями и
            архитекторами
          </Title>
          <Button theme="transparent" width={210} height={50}>
            УЗНАТЬ ПОДРОБНЕЕ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Designers;
