// import axios from "axios";
import apiClient from "../API/axiosConfig";
import React, { useEffect, useState } from "react";
import { IconShoppingBagPlus } from "@tabler/icons-react";
import { useCart } from "../contexts/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      setUser(userObj);
    }
    const getProducts = async () => {
      try {
        const response = await apiClient.get(
          "https://ecommerce-jwpe.onrender.com/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="bg-lightGray">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id}>
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="mt-1 text-lg font-medium text-gray-900">
                  $ {product.price}
                </p>
                <IconShoppingBagPlus
                  className="text-blue-500 cursor-pointer"
                  onClick={() => addToCart(user.id, product._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
