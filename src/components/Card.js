

const ComponentCard = (props) => {

  let icon = props.display ? <>
        <input type="checkbox" id={props.title}/>
        <label className="material-symbols-outlined" htmlFor={props.title}>
          code
        </label>
      </> : ""
  let title = props.title ? <h1 className="title">{props.title}</h1> : ""
  let children = props.children ? <div className="child">{props.children}</div> : "";
  let code = props.display ? <div className="display accordian-content"><div className="displayCode poppins-light-italic" > {props.display} </div></div> : "";

  return (
    <div className="componentCard accordian">
        {icon}
        {title}
        {children}
        {code}
    </div>
  )
};

export default ComponentCard;