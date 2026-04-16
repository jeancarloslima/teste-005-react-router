import { BrowserRouter, Link, Route, Routes } from "react-router";

function PaginaInicial() {
  return (
    <div>
      <h2>Página Inicial</h2>
      <p>Bem vindo ao site</p>
    </div>
  );
}

function PaginaSobre() {
  return (
    <div>
      <h2>Página Sobre</h2>
      <p>Esse site fala sobre React Router</p>
    </div>
  );
}

function PaginaNaoEncontrada() {
  return (
    <div style={{ color: "red" }}>
      <h2>Erro 404</h2>
      <p>Página não encontrada</p>
    </div>
  );
}

export default function Tela01() {
  return (
    <>
      <nav
        style={{
          padding: "10px",
          background: "#eee",
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre Mim</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/sobre" element={<PaginaSobre />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </>
  );
}
