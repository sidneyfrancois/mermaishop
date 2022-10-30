import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CarrinhoSidebar() {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  const [userToken, setUserToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.token) {
      getClientToken();
    }
  }, [auth?.token]);

  async function getClientToken() {
    try {
      // api para pegar token
      // const {data} = await axios.get("/")
    } catch (err) {
      console.log("Erro ao pegar token: " + err);
    }
  }

  function cartTotal() {
    let total = 0;
    cart.map((item) => {
      total += item.price;
    });

    return total.toString();
  }

  return (
    <div className="col-md-4 mb-5">
      <h4>Dados do carrinho</h4>
      Total / Endereço
      <hr />
      <h6>Total: {cartTotal()}</h6>
      {auth?.user?.address ? (
        <>
          <div className="mb-3">
            <hr />
            <h4>Endereço de entrega:</h4>
            <h5>{auth?.user?.address}</h5>
          </div>
          <button
            className="btn btn-outline-warning"
            // onClick={() => navigate("/dashboard/user/profile")}
          >
            Atualizar endereço
          </button>
        </>
      ) : (
        <div className="mb-3">
          {auth?.token ? (
            <button
              className="btn btn-outline-warning"
              // onClick={() => navigate("/dashboard/user/profile")}
            >
              Adicionar endereço de entrega
            </button>
          ) : (
            <button
              className="btn btn-outline-danger mt-3"
              onClick={() =>
                navigate("/login", {
                  // state: "/cart",
                })
              }
            >
              Login para checkout
            </button>
          )}
        </div>
      )}
    </div>
  );
}
