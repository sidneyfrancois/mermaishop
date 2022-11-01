import { useEffect } from "react";
import ProductCard from "../components/cards/ProductCard";
import WelcomeCard from "../components/cards/WelcomeCard";
import axios from "axios";
import { useState } from "react";

// axios.defaults.baseURL = import.meta.env.VITE_APP_API;

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const { data } = await axios.get(
        "https://apimermaid.herokuapp.com/product"
      );
      setProducts(data);
    } catch (err) {
      console.log("Erro no carregamento de produtos: " + err);
    }
  }

  return (
    <div>
      <WelcomeCard title="Seja bem vindo!" />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
          {products?.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
