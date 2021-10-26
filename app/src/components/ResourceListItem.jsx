export default function ResourceListItem(props) {
  const { image, name, description, slug } = props;

  return (
    <div className="resource-list-item d-flex m-1 p-1">
      <img className='img-thumbnail p-0' src={image} width='300px' />
      <div className="pl-2" style={{ paddingLeft: '1.5em' }}>
        <a href={`/resources/${slug}`}>
          <h3 className="list-item-title">{name}</h3>
        </a>
        <p className='py-2'>{description}</p>
      </div>
    </div>
  )
}