import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CarrinhoSidebar() {
  // axios.defaults.baseURL = import.meta.env.VITE_APP_API;

  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState(0);
  const [cep, setCep] = useState("");

  const [opcoesFrete, setOpcoesFrete] = useState([]);
  const [frete, setFrete] = useState("");

  const [addressState, setAdressState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.token) {
      getClientToken();
      getFreteOptions();
    }
  }, [auth?.token]);

  async function getFreteOptions() {
    try {
      const { data } = await axios.get(
        "https://apimermaid.herokuapp.com/frete"
      );
      setOpcoesFrete(data);
    } catch (err) {
      console.log("Erro ao coletar opções de frete: " + err);
      console.log();
    }
  }

  async function getClientToken() {
    try {
      // api para pegar token
      // const {data} = await axios.get("/")
    } catch (err) {
      console.log("Erro ao pegar token: " + err);
      console.log(err.response.data.message);
    }
  }

  async function submitOrder(e) {
    e.preventDefault();
    console.log(frete);
  }

  function cartTotal() {
    let total = 0;
    cart.map((item) => {
      total += parseFloat(item.price);
    });

    return total.toFixed(2);
  }

  async function submitAdress(e) {
    e.preventDefault();
    console.log(auth.token);

    try {
      const { data } = await axios.post(
        "https://apimermaid.herokuapp.com/address",
        {
          estado,
          cidade,
          bairro,
          rua,
          numero,
          cep,
          user_id: auth.user.id,
        },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );

      if (data) {
        setAdressState(true);
        console.log("sucesso");
      }
    } catch (err) {
      console.log("Erro ao cadastrar endereço" + err);
      console.log(err.response.data.message);
    }
  }

  return (
    <div className="col-md-5 mb-5">
      <h4>Dados do carrinho</h4>
      Total / Endereço
      <hr />
      <h6>Total: {cartTotal()} R$</h6>
      {addressState ? (
        <>
          <div className="mb-3">
            <hr />
            <h4>Endereço de entrega:</h4>

            <form className="row g-3 mt-4">
              <fieldset disabled>
                <div className="col-md-6">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setEstado(e.target.value)}
                    value={estado}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Cidade</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setCidade(e.target.value)}
                    value={cidade}
                  />
                </div>
                <div className="col-6">
                  <label className="forn-label">Bairro</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setBairro(e.target.value)}
                    value={bairro}
                  />
                </div>
                <div className="col-6">
                  <label className="forn-label">Rua</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setRua(e.target.value)}
                    value={rua}
                  />
                </div>
                <div className="col-md-2">
                  <label className="forn-label">Número</label>
                  <input
                    type="number"
                    className="form-control "
                    value={numero}
                    onChange={(e) => setNumero(e.target.valueAsNumber)}
                  />
                </div>
                <div className="col-6">
                  <label className="forn-label">CEP</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setCep(e.target.value)}
                    value={cep}
                  />
                </div>
              </fieldset>

              <div className="mb-3">
                <label className="form-label">
                  Selecione o tipo de entrega
                </label>
                <select
                  value={frete}
                  className="form-select"
                  onChange={(e) => setFrete(e.target.value)}
                >
                  {opcoesFrete?.map((frete) => (
                    <option key={frete.id}>{frete.formaEnvio}</option>
                  ))}
                </select>
              </div>

              <button
                className="btn btn-outline-warning mt-4"
                onClick={submitOrder}
              >
                Finalizar Pedido
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="mb-3">
          {auth?.token ? (
            <>
              <form className="row g-3 mt-4">
                <div className="col-md-6">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Cidade</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="forn-label">Bairro</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="forn-label">Rua</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setRua(e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  <label className="forn-label">Número</label>
                  <input
                    type="number"
                    className="form-control "
                    value={numero}
                    onChange={(e) => setNumero(e.target.valueAsNumber)}
                  />
                </div>
                <div className="col-6">
                  <label className="forn-label">CEP</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-outline-warning mt-4"
                  onClick={submitAdress}
                >
                  Adicionar endereço de entrega
                </button>

                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">
                    Selecione o tipo de entrega
                  </label>
                  <select id="disabledSelect" class="form-select">
                    {opcoesFrete?.map((frete) => (
                      <option key={frete.id}>{frete.formaEnvio}</option>
                    ))}
                  </select>
                </div>
              </form>
            </>
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
