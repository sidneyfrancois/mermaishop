import { useState } from "react";
import WelcomeCard from "../../components/cards/WelcomeCard";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://apimermaid.herokuapp.com/users",
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem("auth", JSON.stringify(data));
      setAuth({ ...auth, token: data.token, user: data.user });
      navigate("/");
    } catch (err) {
      console.log("Erro ao efetuar o login" + err);
      console.log(err.response.data.message);
    }
  }

  return (
    <div>
      <WelcomeCard title="Register" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4 p-2"
                placeholder="Digite o seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />

              <input
                type="email"
                className="form-control mb-4 p-2"
                placeholder="Digite o seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2"
                placeholder="Digite a sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-primary" type="submit">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
