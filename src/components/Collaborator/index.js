import "./Collaborator.css"

const Collaborator = ({ imagem, nome, cargo, corDeFundo }) => {
  return (
    <div className="collaborator">
      <div className="collaborator__header" style={{ backgroundColor: corDeFundo }}>
        {imagem !== "" ? (<img src={imagem} alt={nome} />) :
          (<div className="collaborator__empty-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill={corDeFundo} viewBox="0 0 256 256"><path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"></path></svg>
          </div>)
        }
        </div>
      <div className="collaborator__content">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Collaborator