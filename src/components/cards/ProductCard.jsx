import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card  hoverable">
      <div className="card-body">
        <h5>{product.name}</h5>
        <h4 className="fw-bold">{product.price}</h4>

        <p className="card-text">{product.description}</p>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          onClick={() => navigate(`product/${product.id}`)}
        >
          Detalhes
        </button>
        <button className="btn btn-outline-primary col card-button">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
