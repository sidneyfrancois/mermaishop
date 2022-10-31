import { useState, useEffect } from "react";
import { useAuth } from "../contexts/auth";
import WelcomeCard from "../components/cards/WelcomeCard";
import axios from "axios";

export default function Profile() {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (auth?.user) {
      const { name, email, address } = auth.user;
      setName(name);
      setEmail(email);
      setAddress(address);
    }
  }, [auth?.user]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // chamada api para atualizar usuário
    } catch (err) {
      console.log("Erro ao atualizar usuário: " + err);
    }
  }

  return (
    <>
      <WelcomeCard
        title={`Hello ${auth?.user?.name}`}
        subTitle="Página do usuário"
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Perfil</div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control m-2 p-2"
                placeholder="Digite o seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus={true}
              />

              <input
                type="email"
                className="form-control m-2 p-2"
                placeholder="Digite o seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={true}
              />

              <input
                type="password"
                className="form-control m-2 p-2"
                placeholder="Digite a sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <textarea
                className="form-control m-2 p-2"
                placeholder="Digite o seu endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <button className="btn btn-primary m-2 p-2">Atualizar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
