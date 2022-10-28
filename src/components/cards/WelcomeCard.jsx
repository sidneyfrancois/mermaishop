export default function WelcomeCard({ title, subTitle = "Loja Mermaid" }) {
  return (
    <div
      className="container-fluid jumbotron"
      style={{ marginTop: "-8px", height: "200px" }}
    >
      <div className="row">
        <div className="col text-center p-5">
          <h1 className="fw-bold">{title}</h1>
          <p className="lead">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
