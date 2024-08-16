'use client';

import React, { useEffect, useState } from 'react';
import { getOrders } from '@/helpers/orders.helper';

const OrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [userSession, setUserSession] = useState<{ token: string } | null>(null);

    useEffect(() => {
        const fetchSessionAndOrders = async () => {
            const storedSession = localStorage.getItem('userSession');
            if (!storedSession) {
                setError('User session not found.');
                return;
            }

            const session = JSON.parse(storedSession);
            setUserSession(session);

            try {
                const orders = await getOrders(session.token);
                setOrders(orders);
            } catch (error: any) {
                setError(error.message || 'Error fetching orders.');
            }
        };

        fetchSessionAndOrders();
    }, []);

    const calculateTotal = (products: any[]) => 
        products.reduce((total, product) => total + product.price, 0).toFixed(2);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {orders.length === 0 ? (
                <p className="text-lg text-center">You have no orders.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order: any) => (
                        <div key={order.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                            <h2 className="text-xl font-semibold mb-2">Order  {order.id}</h2>
                            <p className="text-gray-600 mb-2">Status: {order.status}</p>
                            <p className="text-gray-600 mb-2">Date: {new Date(order.date).toLocaleDateString()}</p>
                            <p className="text-gray-800 font-medium mb-4">Total: ${calculateTotal(order.products)}</p>
                            <div className="border-t border-gray-200 pt-4">
                                <h3 className="text-lg font-medium mb-2">Products:</h3>
                                <ul className="space-y-2">
                                    {order.products.map((product: any) => (
                                        <li key={product.id} className="flex justify-between">
                                            <span className="font-medium">{product.name}</span>
                                            <span className="text-gray-500">${product.price.toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrdersPage;






