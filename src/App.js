import Navbar from './components/navbar';
import CategoryList from './components/categoryList';
import SaleImage from './components/saleImage';
import Recommended  from './components/recommended';
import Topic  from './components/topic';
import PopularSection  from './components/popularSection';
import Footer  from './components/footer';

function App(){
  return(
      <div>
        <Navbar></Navbar>
        <CategoryList></CategoryList>
        <SaleImage></SaleImage>
        <Recommended></Recommended>
        <Topic></Topic>
        <PopularSection></PopularSection>
        <Footer></Footer>
      </div>
  )
}

export default App