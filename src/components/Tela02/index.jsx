import { Link, Route, Routes, useNavigate } from "react-router";

function Home() {
  return (
    <div>
      <h2>Página Home</h2>
      <p>Bem vindo ao site</p>
    </div>
  );
}

function Catalogo() {
  const navegar = useNavigate();

  return (
    <div>
      <h2>Tênis XYZ</h2>
      <button onClick={() => navegar("/sucesso")}>Comprar</button>
    </div>
  );
}

function Sucesso() {
  return (
    <div>
      <h2>Sucesso na compra do produto</h2>
      <Link to="/">Voltar para o início</Link>
    </div>
  );
}

function Error404() {
  return (
    <div>
      <h2>Página não encontrada</h2>
    </div>
  );
}

function Cabecalho() {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#eee",
        display: "flex",
        gap: "15px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/produtos">Catálogo</Link>
      <Link to="/perfil">Perfil</Link>
    </nav>
  );
}

export default function Tela02() {
  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Catalogo />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
