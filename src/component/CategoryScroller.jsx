import { useNavigate } from 'react-router-dom';
import avtar from '../assets/img/avtar.jpg'
import { RouterPath } from '../router/RouterPath';

const categories = [
  { id: 1, name: 'Westernwear', img: 'https://images-static.nykaa.com/uploads/39229504-800f-4d4c-9a6f-219b21b2974f.jpg?tr=w-120,cm-pad_resize' },
  { id: 2, name: 'Indianwear', img: 'https://images-static.nykaa.com/uploads/39229504-800f-4d4c-9a6f-219b21b2974f.jpg?tr=w-120,cm-pad_resize' },
  { id: 3, name: 'Men', img: 'https://images-static.nykaa.com/uploads/f76f6b4e-853f-46bc-a898-0799cb7c90d1.jpg?tr=w-120,cm-pad_resize' },
  { id: 4, name: 'Footwear', img: 'https://images-static.nykaa.com/uploads/97dfae74-0ff8-46c5-a283-826e307bf9ba.jpg?tr=w-120,cm-pad_resize' },
  { id: 5, name: 'Lingerie', img: 'https://images-static.nykaa.com/uploads/3c3bc5a6-881f-49e6-a81b-7d69f7dd9669.jpg?tr=w-120,cm-pad_resize' },
  { id: 6, name: 'Sports', img: 'https://images-static.nykaa.com/uploads/a4c30a62-7077-43fb-b0d3-ad22d0c80e41.jpg?tr=w-120,cm-pad_resize' },
  { id: 7, name: 'Kids', img: 'https://images-static.nykaa.com/uploads/c369ea99-5b47-4d68-95d3-95db6466eb5b.jpg?tr=w-120,cm-pad_resize' },
  { id: 8, name: 'Bags', img: 'https://images-static.nykaa.com/uploads/23549e7d-2333-418f-9eba-d0b5b1c09248.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },
  { id: 9, name: 'Jewellery', img: 'https://images-static.nykaa.com/uploads/44884c45-919b-4f64-b0e1-5f61326fca64.jpg?tr=w-120,cm-pad_resize' },

];


const CategoryScroller = () => {
  const navigate = useNavigate()
  const redirect=()=>{
  navigate(RouterPath.ProductCategoryPage);
}
  return (
    <div className="md:px-16 px-4 bg-pink-100 py-4 shadow-sm">
      {/* Scroll Container */}
      <div className="flex overflow-x-auto gap-4 px-6 no-scrollbar scroll-smooth">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className=" flex flex-col items-center group cursor-pointer"
            onClick={redirect}
          >
            {/* Image Wrapper */}
            <div className="w-[85px] h-[110px] md:w-[100px] md:h-[130px] overflow-hidden rounded-md border border-transparent  transition-all">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Label - Hidden by default like Nykaa, or keep visible */}
            <span className="text-xs mt-2 font-medium  uppercase tracking-tighter">
              {/* {cat.name} */}
            </span>
          </div>
        ))}
      </div>

      {/* Global CSS for hiding scrollbars - Add to your globals.css or use a <style> tag */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default CategoryScroller;