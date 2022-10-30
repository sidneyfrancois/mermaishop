import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";
import WelcomeCard from "../../components/cards/WelcomeCard";
import ListagemCarrinhoHorizontal from "../../components/cards/ListagemCarrinho";
import CarrinhoSidebar from "../../components/cards/CarrinhoSidebar";

export default function Cart() {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <WelcomeCard
        title={`Olá ${auth?.token && auth?.user?.name}`}
        subTitle={
          cart?.length
            ? `Você tem  ${cart.length} items no carrinho. ${
                auth?.token ? "" : "Faça o login para fazer o checkout"
              }`
            : "Carrinho vazio"
        }
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mt-2 mb-2 h4 bg-light text-center">
              {cart?.length ? (
                "Meu carrinho"
              ) : (
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    Continue fazendo compras
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {cart?.length && (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {cart?.map((p, index) => (
                  <ListagemCarrinhoHorizontal key={index} product={p} />
                ))}
              </div>
            </div>

            <CarrinhoSidebar />
          </div>
        </div>
      )}
    </>
  );
}
