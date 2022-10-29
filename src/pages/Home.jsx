import { useEffect } from "react";
import ProductCard from "../components/cards/ProductCard";
import WelcomeCard from "../components/cards/WelcomeCard";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_APP_API;

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const { data } = await axios.get("/product");
      setProducts(data);
    } catch (err) {
      console.log("Erro no carregamento de produtos: " + err);
    }
  }

  return (
    <div>
      <WelcomeCard title="Seja bem vindo!" />
      <div className="container-fluid">
        <div className="row">
          <div className="">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
              {products?.map((product) => (
                <div className="col-md-6" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
