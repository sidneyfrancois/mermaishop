import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import ImagemPadrao from "../assets/clothe.jpg";

export default function DetalhesProdutos() {
  // axios.defaults.baseURL = import.meta.env.VITE_APP_API;

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (params?.id) loadProduct();
  }, [params?.id]);

  async function loadProduct() {
    try {
      const { data } = await axios.get(
        `https://apimermaid.herokuapp.com/product/detail/?id=${params.id}`
      );
      setProduct(data);
      loadProductsByCategory(data.category.id, data.id);
      setRelatedProducts(relatedProducts);
    } catch (err) {
      console.log("Erro no carregamento do produto: " + err);
    }
  }

  async function loadProductsByCategory(id, productId) {
    try {
      const { data } = await axios.get(
        `https://apimermaid.herokuapp.com/category/detail/?id=${id}`
      );
      let related = data.products;
      let index = related.findIndex((item) => item.id === productId);
      related.splice(index, 1);
      setRelatedProducts([related]);
    } catch (err) {
      console.log("Erro no carregamento de categorias do produto: " + err);
    }
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <img
                src={ImagemPadrao}
                alt="imagem do produto"
                style={{
                  height: "500px",
                  width: "600px",
                  objectFit: "cover",
                  marginLeft: "-12px",
                  borderRopRightRadius: "0px",
                }}
              />
              <h1 className="fw-bold">{product?.name}</h1>
              <p className="card-text lead">{product?.description}</p>
            </div>

            <div className="d-flex justify-content-between lead p-5 bg-light fw-bold">
              <div>
                <p>Pre??o: R$ {product?.price}</p>
                <p>Categoria: {product?.category?.name}</p>
              </div>
            </div>
            <button
              className="btn btn-outline-primary col card-button"
              style={{
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <h2>Produtos Relacionados</h2>
          <hr />
          {relatedProducts?.map((p) =>
            p.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
