import ProductCard from "../component/ProductCard";
import UserSidebar from '../component/UserSidebar';



const Wishlist = () => {
  return (
    <div>
         <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 mt-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* --- RESPONSIVE SIDEBAR --- */}
        <UserSidebar/>
       
        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
        </main>
      </div>
      </div>
    </div>
  )
}

export default Wishlist
