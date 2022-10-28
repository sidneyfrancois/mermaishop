import WelcomeCard from "../components/cards/WelcomeCard";

export default function Home() {
  return (
    <div>
      <WelcomeCard title="Seja bem vindo!" />
      <div className="container-fluid">
        <div className="row">
          <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">Produtos</h2>
        </div>
      </div>
    </div>
  );
}
