'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { RegisterData } from '@/interfaces/IRegister'; 

const UserPage: React.FC = () => {
    const { user } = useAuth();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user) {
            setError('No se encontró la sesión de usuario.');
        }
    }, [user]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">User Information</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {user ? (
                <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">User Details</h2>
                    <p className="text-gray-600 mb-2"><strong>Name:</strong> {user.name}</p>
                    <p className="text-gray-600 mb-2"><strong>Email:</strong> {user.email}</p>
                    <p className="text-gray-600 mb-2"><strong>Address:</strong> {user.address}</p>
                    <p className="text-gray-600 mb-2"><strong>Phone:</strong> {user.phone}</p>
                </div>
            ) : (
                <p className="text-lg text-center">No user details found.</p>
            )}
        </div>
    );
};

export default UserPage;


/* import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';

const UserPage: React.FC = () => {
    const {dataUser} = useAuth();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!dataUser) {
            setError('No se encontró la sesión de usuario.');
        }
    }, [dataUser]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Información del Usuario</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {dataUser ? (
                <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Detalles del Usuario</h2>
                    <p className="text-gray-600 mb-2"><strong>Nombre:</strong> {dataUser.name}</p>
                    <p className="text-gray-600 mb-2"><strong>Correo Electrónico:</strong> {dataUser.email}</p>
                    <p className="text-gray-600 mb-2"><strong>Dirección:</strong> {dataUser.address}</p>
                    <p className="text-gray-600 mb-2"><strong>Teléfono:</strong> {dataUser.phone}</p>
                </div>
            ) : (
                <p className="text-lg text-center">No se encontraron detalles del usuario.</p>
            )}
        </div>
    );
};

export default UserPage; */
