
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import Content from './pages/content/Content'
import Article from './pages/article/Article'
import Review from './pages/review/Review'
import Banner from './pages/banner/Banner';
import Features from './pages/features/Features'
import Chart from './pages/chart/Chart'
import Footer from './pages/footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Content />
      <Article />
      <Review />
      <Banner />
      <Features />
      <Chart />
      <Footer />
    
    </div>
  )
}

export default App
