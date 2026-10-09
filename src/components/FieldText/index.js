import "./FieldText.css"

export const FieldText = (props) => {
  const valor = (e) => {
    props.alterarValor(e.target.value)
  }
  
  return (
    <div className="field-text">
      <label htmlFor={props.id} >{props.label}</label>
      <input
        value={props.valor}
        onChange={valor}
        placeholder={props.placeholder}
        id={props.id}
        required={props.required}
      />
    </div>
  )
}
