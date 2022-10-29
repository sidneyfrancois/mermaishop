import ProductCard from "../components/cards/ProductCard";
import WelcomeCard from "../components/cards/WelcomeCard";

export default function Home() {
  return (
    <div>
      <WelcomeCard title="Seja bem vindo!" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
              <ProductCard />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
