export default function ProductCard({ p }) {
  return (
    <div className="card mb-3 hoverable">
      <div className="card-body">
        <h5>Produto 1</h5>
        <h4 className="fw-bold">preço</h4>

        <p className="card-text">descrição</p>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary col card-button">Detalhes</button>
        <button className="btn btn-outline-primary col card-button">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
