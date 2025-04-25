import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { products } from '../products'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductsDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const Products = products.find((product) => product.id === parseInt(id));
  if(!Products){
    return <div className='container mx-auto py-8'>Product not found</div>;
  }
  return (
    <div className='container px-4 py-8 mx-auto'>
      <div>
        <Link className='ml-12 flex' to={'/'}><FaArrowLeft className='mx-2 text-2xl'/> Back to Products</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="shadow mx-5 p-10 rounded-lg">
            <img src={Products.image} alt="image title" className='w-full object-fit rounded-lg' />
          </div>
          <div className="p-4">
            <h1 className='text-3xl mb-5 font-semibold '>{Products.title}</h1>
            <p className="text-gray-700 mb-5">{Products.description}</p>
            <h2 className="text-3xl mb-5 font-semibold ">${Products.price}</h2>
            <h3 className="text-xl font-semibold mb-5">Category</h3>
            <span className='text-sm bg-gray-300 rounded py-2 px-4'>{Products.category}</span>
            <div className='flex justify-between items-center mt-5'>
            <button onClick={() => dispatch(addToCart({Products})) }
            className='flex gap-3 items-center bg-zinc-200 rounded py-2 px-4 hover:bg-zinc-400'><FaShoppingCart/> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductsDetails
