import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart";
import ImagemPadrao from "../../assets/clothe.jpg";

export default function ProductCard({ product }) {
  const [cart, setCart] = useCart();

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <img
          src={ImagemPadrao}
          alt="imagem do produto"
          style={{
            height: "150px",
            width: "150px",
            objectFit: "cover",
            marginLeft: "-12px",
            borderRopRightRadius: "0px",
          }}
        />
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
        <button
          className="btn btn-outline-primary col card-button"
          style={{
            width: "20%",
          }}
          onClick={() => {
            setCart([...cart, product]);
            localStorage.setItem("cart", JSON.stringify([...cart, product]));
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
