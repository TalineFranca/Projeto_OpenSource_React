import "./style.css"

export default function Cards(props: {
  id: number;
  icone: string;
  cor: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string
}) {
  return (
    <div className="card">
      <div className="icone" style={{ backgroundColor: props.cor }}>
        <img src={props.icone} alt={props.titulo} />
      </div>
      <div className="titulo">
        <h2>{props.titulo}</h2>
      </div>
      <div className="texto">
        <p>{props.descricao}</p>
      </div>
      <div className="tags">
        {props.tecnologias.map((tec, i) => (
          <div key={i} className="tag">{tec}</div>
        ))}
      </div>
      <div className="link">
        <a href="#">{props.link}</a>
      </div>
    </div>
  )
}
