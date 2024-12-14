import { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
function Form() {
  const [endereco, setEndereco] = useState({
    logradouro: "Rua Bento Gonçalves",
    localidade: "Bagé",
    uf: "RS",
  });

  const getEndereco = () => {
    const cep = document.getElementById("cep").value;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      console.log(response.data);
      setEndereco(response.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formulario = {
      nome: document.getElementById("nome").value,
      cep: document.getElementById("cep").value,
      endereco: document.getElementById("endereco").value,
      numero: document.getElementById("numero").value,
      cidade: document.getElementById("cidade").value,
      uf: document.getElementById("uf").value,
    };

    console.log(formulario);
  };

  useEffect(() => {}, []);

  return (
    <div className="principal">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" />
        <br />
        <label htmlFor="cep">CEP: </label>
        <input type="text" id="cep" />
        <button type="button" onClick={getEndereco}>
          Buscar
        </button>
        <br />
        <label htmlFor="endereco">Endereço: </label>
        <input type="text" id="endereco" value={endereco.logradouro} />
        <label htmlFor="numero">Número: </label>
        <input type="text" id="numero" />
        <br />
        <label htmlFor="cidade">Cidade: </label>
        <input type="text" id="cidade" value={endereco.localidade} />
        <label htmlFor="uf">UF: </label>
        <input type="text" id="uf" value={endereco.uf} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
export default Form;
