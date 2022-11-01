import { useCart } from "../../contexts/cart";
import ImagemPadrao from "../../assets/clothe.jpg";

export default function ListagemCarrinhoHorizontal({ product, remove = true }) {
  const [cart, setCart] = useCart();

  function removeFromCart(productId) {
    let carrinho = [...cart];
    let index = carrinho.findIndex((item) => item.id === productId);

    carrinho.splice(index, 1);
    setCart(carrinho);
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={ImagemPadrao}
            alt={product.name}
            style={{
              height: "150px",
              width: "150px",
              padding: "5px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {product.name} {product?.price}
            </h5>
            <p className="card-text">{`${product?.description?.substring(
              0,
              50
            )}..`}</p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          {remove && (
            <button
              className="btn btn-danger pointer"
              onClick={() => removeFromCart(product.id)}
            >
              Remover do carrinho
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
