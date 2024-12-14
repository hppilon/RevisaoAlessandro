function Card(props) {
  return (
    <>
      {props.pokemon.name ? (
        <div className="card">
          <img
            src={props.pokemon.sprites.front_default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.pokemon.name}</h5>
            <p className="card-text">
              {props.pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <span>Não há pokemon selecionado</span>
        </div>
      )}
    </>
  );
}
export default Card;
