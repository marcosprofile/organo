import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {
  const cores = {
    fundo: { "--cor-fundo": props.corSecundaria },
    borda: { "--cor-after": props.corPrimaria }
  }

  return (
    (props.colaboradores.length > 0) ?
    <section className="team" style={cores.fundo}>
      <h3 style={cores.borda}>{props.nome}</h3>

      <div className="team__container">
        {props.colaboradores.map(colaborador => <Collaborator
          corDeFundo={props.corPrimaria}
          key={colaborador.nome}
          imagem={colaborador.imagem}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
        />)}
      </div>
      </section>
      : ""
  )
}

export default Team