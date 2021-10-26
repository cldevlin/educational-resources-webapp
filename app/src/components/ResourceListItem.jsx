export default function ResourceListItem(props) {
  const { image, name, description, slug } = props;

  return (
    <div className="d-flex m-1 p-1" style={{ height: '300px' }}>
      <img className='img-thumbnail p-0' src={image} width='300px' />
      <div className="pl-2" style={{ paddingLeft: '1.5em' }}>
        <a href={`/resources/${slug}`}>
          <h3>{name}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  )
}