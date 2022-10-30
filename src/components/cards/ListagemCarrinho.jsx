import { useCart } from "../../contexts/cart";

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
    <div
      className="card mb-3"
      // style={{ maxWidth: 540 }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src=""
            alt={product.name}
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              marginLeft: "-12px",
              borderRopRightRadius: "0px",
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
            <p
              className="text-danger mb-2 pointer"
              onClick={() => removeFromCart(product.id)}
            >
              Remover do carrinho
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
