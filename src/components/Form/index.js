import "./Form.css"
import { FieldText } from './../FieldText';
import { FieldSelect } from './../FieldSelect';
import { Button } from "../Button"
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={onSave}>
        <h1>Preencha os dados para criar o card do colaborador.</h1>

        <div className="form__container">
          <FieldText
            label="Nome"
            placeholder="Digite o seu nome"
            id="Nome"
            required
            valor={nome}
            alterarValor={valor => setNome(valor)}
          />
          <FieldText
            label="Cargo"
            placeholder="Digite o seu cargo"
            id="Cargo"
            required
            valor={cargo}
            alterarValor={valor => setCargo(valor)}
          />
          <FieldText
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            id="Imagem"
            valor={imagem}
            alterarValor={valor => setImagem(valor)}
          />
          <FieldSelect
            label="Time"
            id="Time"
            itens={props.times}
            required
            valor={time}
            alterarValor={valor => setTime(valor)}
          />
        </div>

        <Button>Criar card</Button>
      </form>
    </div>
  )
}

export default Form