import Carousel from '@/components/carousel';
import Feature from '../components/feature'
import Offer from '@/components/offer';
export default function HomePage() {
  return (
    <div>
      <Carousel/>
      <div className="container mx-auto p-8">
      <Feature />
      <Offer />
      </div>
    </div>
  );
}
