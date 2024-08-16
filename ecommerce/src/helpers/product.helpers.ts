import IProduct from '../interfaces/IProducts'

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductDB(): Promise<IProduct[]> {
  try {

        const response = await fetch(`${APIURL}/products`, {
        cache: 'no-cache'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const products: IProduct[] = await response.json();
    return products;
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred while fetching the products');
  }
}

export async function getProductDBById(id:string): Promise<IProduct> {
  try {
    const products: IProduct[] = await getProductDB();
    const productFiltered = products.find((product)=> product.id.toString()=== id)
    if(!productFiltered) throw new Error("Product not found")
      return productFiltered  
     
  } catch (error: any) {
    throw new Error(error);
  }
}