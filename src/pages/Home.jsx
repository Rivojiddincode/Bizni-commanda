import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import NewArrivals from './components/NewArrivals'
import TopSelling from './components/TopSelling'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Testimonials from './components/Testimonials'
import Categories from './components/Categories'

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Brands />
            <NewArrivals />
            <TopSelling />
            <Categories />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home