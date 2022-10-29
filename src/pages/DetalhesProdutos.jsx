import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function DetalhesProdutos() {
  axios.defaults.baseURL = import.meta.env.VITE_APP_API;

  const [product, setProduct] = useState({});

  const params = useParams();
  console.log("Pram: " + params.id);

  useEffect(() => {
    if (params?.id) loadProduct();
  }, [params?.id]);

  async function loadProduct() {
    const idparam = params.id.toString();
    console.log(idparam);
    try {
      const { data } = await axios.get(`/product/detail/?id=${params.id}`);
      setProduct(data);
    } catch (err) {
      console.log("Erro no carregamento do produto: " + err);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="card mb-3">
            <div className="card-body">
              <h1 className="fw-bold">{product?.name}</h1>
              <p className="card-text lead">{product?.description}</p>
            </div>

            <div className="d-flex justify-content-between lead p-5 bg-light fw-bold">
              <div>
                <p>Preço: {product?.price}</p>
                <p>Categoria: Cadeira</p>
                <p>Quantidade: 20</p>
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
        </div>
      </div>
    </div>
  );
}
