import React, { createContext, useState, useContext } from "react";
import apiClient from "../API/axiosConfig";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  const getCart = async (userId) => {
    try {
      const response = await apiClient.get(
        `https://ecommerce-jwpe.onrender.com/api/cart/${userId}`
      );
      setCart(response.data);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
    }
  };

  const addToCart = async (userId, productId) => {
    try {
      if (!cart) {
        await getCart(userId);
      }

      const existingProduct = cart?.products.find(
        (item) => item.product._id === productId
      );

      let updatedProducts;

      if (existingProduct) {
        updatedProducts = cart.products.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedProducts = [
          ...cart.products,
          { product: productId, quantity: 1 },
        ];
      }

      await toast.promise(
        apiClient.put("https://ecommerce-jwpe.onrender.com/api/cart/update", {
          userId,
          products: updatedProducts,
        }),
        {
          loading: "Agregando producto a la bolsa...",
          success: "¡Producto agregado con éxito!",
          error: "No se pudo agregar el producto a la bolsa.",
        }
      );

      setCart((prevCart) => ({
        ...prevCart,
        products: updatedProducts,
      }));
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    }
  };

  const removeFromCart = async (userId, productId) => {
    try {
      await apiClient.delete(
        `https://ecommerce-jwpe.onrender.com/api/cart/remove/${userId}/${productId}`
      );
      getCart(userId);
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, products, getCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
