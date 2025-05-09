import Hero from './components/sections/main/hero';
import Description from './components/sections/main/description';
import Stages from './components/sections/main/stages';
import Partners from './components/sections/main/partners';
import Designers from './components/sections/main/designers';
import Questions from './components/sections/main/questions';

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Stages />
      <Partners />
      <Designers />
      <Questions />
    </>
  );
}
