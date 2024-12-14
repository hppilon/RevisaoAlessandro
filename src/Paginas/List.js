import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./List.css";

function List() {
  const [pokemons, setPokemons] = useState([]);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemon, setPokemon] = useState({});

  const getPokemon = (url) => {
    axios.get(url).then((res) => setPokemon(res.data));
  };

  const getPokemons = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          limit * currentPage
        }`
      )
      .then((res) => {
        console.log(res.data);
        setTotal(res.data.count);
        setTotalPages(Math.ceil(res.data.count / limit));
        setPokemons(res.data.results);
      });
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="listContainer">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => (
              <tr>
                <td>{pokemon.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => getPokemon(pokemon.url)}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage == 0}
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage == totalPages}
          >
            Proxima
          </button>
        </div>
      </div>
      <div>
        <Card pokemon={pokemon} nome="helena" />
      </div>
    </div>
  );
}
export default List;
