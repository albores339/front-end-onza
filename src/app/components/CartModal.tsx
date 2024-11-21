import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cart, clearCart, removeFromCart, getTotalPrice } = useCart();

  // Crear un mensaje con los productos del carrito
  const cartMessage = cart.map((item) => `${item.name} (x${item.quantity})`).join(', ');

  // Calcular el precio total del carrito sumando el precio de cada artículo
  const totalPrice = getTotalPrice();

  // Función para cerrar el modal cuando se hace clic fuera del recuadro
  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    // Aseguramos que el clic fuera del contenido del modal cierre el modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={handleModalClose} // Añadimos la función para cerrar al hacer clic fuera del modal
    >
      <div className="relative bg-white p-6 rounded-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold mb-4">Tu carrito</h2>
        <ul className="mb-4">
          {cart.length === 0 ? (
            <li className="text-gray-500">No hay nada en el carrito, pide tu favorito :D.</li>
          ) : (
            cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} - ${item.price} x {item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))
          )}
        </ul>

        {cart.length > 0 && (
          <div className="text-lg font-semibold mb-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
        )}

        {cart.length > 0 && (
          <a
            href={`https://wa.me/5219632304352?text=Hola!%20quiero%20hacer%20este%20pedido:%20${encodeURIComponent(cartMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center p-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Ordenar en WhatsApp
          </a>
        )}

        <button
          onClick={() => {
            clearCart();
            onClose();
          }}
          className="block w-full mt-2 bg-pink-500 text-white text-center p-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
};

export default CartModal;
