import "./FieldSelect.css"

export const FieldSelect = (props) => {
  return (
    <div className="field-select">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        onChange={e => props.alterarValor(e.target.value)}
        id={props.id}
        required={props.required}
        value={props.valor}
      >
        <option>Selecione ...</option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}
