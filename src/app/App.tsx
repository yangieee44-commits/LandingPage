import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Agitation } from './components/Agitation';
import { Solution } from './components/Solution';
import { Portfolio } from './components/Portfolio';
import { Offer } from './components/Offer';
import { Narrow } from './components/Narrow';
import { Products } from './components/Products';
import { Action } from './components/Action';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Problem />
      <Agitation />
      <Solution />
      <Portfolio />
      <Offer />
      <Narrow />
      <Products />
      <Action />
      <Footer />
    </div>
  );
}