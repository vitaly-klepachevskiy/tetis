import Button from '../../../../components/ui/button';
import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="description">
          <h1 className="title">СОЗДАЕМ ЛУЧШЕЕ РЕШЕНИЕ ДЛЯ ВАШЕГО ИНТЕРЬЕРА</h1>
          <Button width={200} height={50} theme="transparent">
            ОБСУДИТЬ ПРОЕКТ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
