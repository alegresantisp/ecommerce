export  interface IProduct{
    name: string,
    price: number,
    image: string,
    description?: string,
    stock: number,
    categoryId: number
    id: number
}

export default IProduct;