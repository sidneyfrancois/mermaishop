import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_APP_API;

export default function DetalhesProdutos() {
  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (params?.id) loadProduct();
  }, [params?.id]);

  async function loadProduct() {
    try {
      const { data } = await axios.get(`/product/id`, {
        id,
      });
      setProduct(data);
      console.log(data);
    } catch (err) {
      console.log("Erro no carregamento do produto: " + err);
    }
  }

  return <h1>Detalhes produto</h1>;
}
