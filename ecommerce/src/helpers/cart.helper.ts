'use client'
import IProduct from "@/interfaces/IProducts";

export const addToCart = (product: IProduct) => {
    const userSession = localStorage.getItem('userSession');
    if (!userSession) {
        alert('Debes loguearte para poder comprar.');
        window.location.href = '/login';
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const isProductInCart = cart.some((cartItem: IProduct) => cartItem.id === product.id);
    if (isProductInCart) {
        alert('Este producto ya está en el carrito.');
        return;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');

};




