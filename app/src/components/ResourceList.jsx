import ResourceListItem from './ResourceListItem.jsx'

export default function ResourceList(props) {
  const { resources } = props;
  console.log('resources (ResourceList.jsx', resources);
  const dayList = resources.map((resourceData) => {
    return <ResourceListItem
      key={resourceData.id}
      image={resourceData.image}
      name={resourceData.name}
      description={resourceData.description}
    />
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
}