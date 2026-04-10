import ProductCard from "../component/ProductCard"


const Wishlist = () => {
  return (
    <div>
         <div className='py-8 lg:px-4 md:px-8'>
        <div className='px-8 mb-6' >
          <h2 className='font-medium'> Wishlist</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </div>
      
    </div>
  )
}

export default Wishlist
