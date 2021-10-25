
export default function ResourceListItem(props) {
  const { image, name, description } = props;

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}