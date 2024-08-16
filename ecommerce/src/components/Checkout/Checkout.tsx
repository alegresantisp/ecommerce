'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/Context/CartContext';
import { useAuth } from '../Context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import Swal from 'sweetalert2';

const Checkout: React.FC = () => {
    const { user, token } = useAuth();
    const { cart, clearCart } = useCart();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [orderDate, setOrderDate] = useState<string>('');

    const router = useRouter();

    useEffect(() => {
        const date = new Date();
        setOrderDate(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
    }, []);

    const handlePlaceOrder = async () => {
        setLoading(true);
        setError(null);

        if (!token) {
            setError('Authentication token not found.');
            setLoading(false);
            return;
        }

        try {
            await createOrder(cart.map(product => product.id), token);
            await Swal.fire({
                title: 'Success!',
                text: 'Thank you for your purchase!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            clearCart();
            router.push('/');
        } catch (error) {
            console.error('Error placing the order:', error);
            setError('There was a problem with your order. Please try again.');
            Swal.fire({
                title: 'Error!',
                text: 'There was a problem with your order. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

        setLoading(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Order Details</h1>
            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="md:w-1/2 mb-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">User Information</h2>
                        {user ? (
                            <div className="space-y-4">
                                <div className="py-2">
                                    <p className="text-sm font-medium text-gray-600">Name:</p>
                                    <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-sm font-medium text-gray-600">Email:</p>
                                    <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-sm font-medium text-gray-600">Shipping Address:</p>
                                    <p className="text-lg font-semibold text-gray-800">{user.address}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600">User information not found.</p>
                        )}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-600">Order Date and Time:</p>
                            <p className="text-lg font-semibold text-gray-800">{orderDate}</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-2">Cart Products</h2>
                        {cart.length === 0 ? (
                            <p>No products in the cart.</p>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((product) => (
                                    <div key={product.id} className="flex justify-between items-center border-b py-2">
                                        <div className="flex items-center">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                                            <span>{product.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span>${product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Order Summary</h2>
                            <p><strong>Total:</strong> ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    onClick={handlePlaceOrder}
                    className={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Place Order'}
                </button>
            </div>
            
        </div>
    );
};

export default Checkout;




/* import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import IProduct from '@/interfaces/IProducts';
import { createOrder } from '@/helpers/orders.helper'; 
import { useAuth } from '../Context/AuthContext';

const Checkout: React.FC = () => {
    const router = useRouter();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [orderDate, setOrderDate] = useState<string>('');
    const{dataUser} = useAuth();


    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        const date = new Date();
        setOrderDate(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
    }, []);

    const handlePlaceOrder = async () => {
        setLoading(true);
        setError(null);
    
        if (!dataUser) {
            setError('No se encontró la información del usuario.');
            setLoading(false);
            return;
        }
    
        const token = dataUser.token; 
        if (!token) {
            setError('No se encontró el token de autenticación.');
            setLoading(false);
            return;
        }
    
        try {
            await createOrder(cart.map(product => product.id), token);
            alert('Gracias por tu compra!');
            localStorage.removeItem('cart');
            router.push('/');
        } catch (error) {
            console.error('Error al realizar el pedido:', error);
            setError('Hubo un problema con tu pedido. Intenta nuevamente.');
        }

        setLoading(false);
    };
  
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Detalles del Pedido</h1>
            <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-4">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Información del Usuario</h2>
                    {dataUser ? (
                        <div className="space-y-4">
                            <div className="py-2">
                                <p className="text-sm font-medium text-gray-600">Nombre:</p>
                                <p className="text-lg font-semibold text-gray-800">{dataUser.name}</p>
                            </div>
                            <div className="py-2">
                                <p className="text-sm font-medium text-gray-600">Correo Electrónico:</p>
                                <p className="text-lg font-semibold text-gray-800">{dataUser.email}</p>
                            </div>
                            <div className="py-2">
                                <p className="text-sm font-medium text-gray-600">Dirección de Envío:</p>
                                <p className="text-lg font-semibold text-gray-800">{dataUser.address}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-600">No se encontró la información del usuario.</p>
                    )}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-600">Fecha y Hora del Pedido:</p>
                        <p className="text-lg font-semibold text-gray-800">{orderDate}</p>
                    </div>
                    </div>
                </div>
                
                <div className="md:w-1/2">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-2">Productos en el Carrito</h2>
                        {cart.length === 0 ? (
                            <p>No hay productos en el carrito.</p>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((product) => (
                                    <div key={product.id} className="flex justify-between items-center border-b py-2">
                                        <div className="flex items-center">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                                            <span>{product.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span>${product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Resumen del Pedido</h2>
                            <p><strong>Total:</strong> ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    onClick={handlePlaceOrder}
                    className={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Procesando...' : 'Finalizar Compra'}
                </button>
            </div>
        </div>
    );
};


export default Checkout; */




