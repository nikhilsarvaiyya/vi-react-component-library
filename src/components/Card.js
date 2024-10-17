

const ComponentCard = (props) => {
  console.log(props)
  let t = props.title ? <div className="title"><h1>{props.title}</h1></div> : ""
  let c = props.children ? <div className="child">{props.children}</div> : ""
  let d = props.display ? <div className="display"><div className="displayCode" > {props.display} </div></div> : "";

  return (
    <div className="componentCard">
      {t}
      {c}
      {d}
    </div>
  )
};

export default ComponentCard;