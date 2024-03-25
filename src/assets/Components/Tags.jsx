const Tags = (props) => {
  return (
    <span class="badge bg-primary" style={{ backgroundColor: props.bgcolor }}>
      {props.texto}
    </span>
  );
};

export default Tags;
