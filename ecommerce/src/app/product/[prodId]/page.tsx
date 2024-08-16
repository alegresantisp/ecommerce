import { getProductDBById } from '@/helpers/product.helpers';
import ProductDetailClient from '@/components/ProductDetailClient/ProductDetailClient';
import Image from 'next/image';
import Link from 'next/link';

interface ProductDetailProps {
  params: {
    prodId: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = async ({ params }) => {
  const { prodId } = params;
  
  const product = await getProductDBById(prodId);

  return (
       
    <div className="p-4 flex justify-center">
      <div className="max-w-4xl w-full flex bg-white shadow-lg rounded-lg p-6">
        
        <div className="flex-shrink-0 w-1/3 mr-6">
       
          <div className="relative w-full h-48 overflow-hidden rounded-lg mt-5">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <div className='mt-4'>
            <Link
              href="/"
              className=" mt-6 rounded  text-blue-500 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
              >
              Go to Home
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mb-4">In Stock: {product.stock}</p>
          <ProductDetailClient product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;