import './Seccion.css';

export default function Seccion({ title, content }) {
  return (
    <div className="seccion">
      <span className="titulo__seccion">{title}</span>
      {content}
    </div>
  );
}