
import Header from '@/shared/widgets/header/header'
import Banner from './features/banner'
import Branding from './features/branding'
import Benefits from './features/benefits'
import FeatureHighlight from './features/feature-highlight'
import Pricing from './features/pricing'
 
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing/>
    </div>
    
  )
}

export default Home