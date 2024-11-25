import './CoreConcepts.css';
export default function CoreConcepts({ image, title, description }) {
  return (
    //todo change react.createElement
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </li>
  );
}