import Tags from "./Tags";

const MyCard = (props) => {
  return (
    <div className="MyCard">
      <h1>{props.nombre}</h1>
      <img src={props.img} />
      <div>
        <span>{props.descripcion}</span>
      </div>
      <button className="btn btn-primary">Adóptame</button>
      <div>
        Tags:<Tags texto={props.tags} bgcolor={props.bgcolor}></Tags>
      </div>
    </div>
  );
};

export default MyCard;
