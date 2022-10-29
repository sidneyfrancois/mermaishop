import WelcomeCard from "../../components/cards/WelcomeCard";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth", {
        email,
        password,
      });

      localStorage.setItem("auth", JSON.stringify(data));
      setAuth({ ...auth, token: data.token, user: data.user });

      console.log(auth);
      console.log(data);
    } catch (err) {
      console.log("Erro ao efetuar o login" + err);
      console.log(err.response.data.message);
    }
  }

  return (
    <div>
      <WelcomeCard title="Página de Login" />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
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
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
