import Hero from '../components/Hero'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import Categories from '../components/Categories'

function Home() {
    return (
        <div >
         
            <Hero />
            <Brands />
            <NewArrivals />
            <TopSelling />
            <Categories />
            <Testimonials />
            <Newsletter />
           
        </div>
    )
}

export default Home