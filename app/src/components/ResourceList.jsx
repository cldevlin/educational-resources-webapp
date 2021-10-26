import ResourceListItem from './ResourceListItem.jsx'

export default function ResourceList(props) {
  const { resources } = props;
  const resourceList = resources.map((resourceData) => {
    return <ResourceListItem
      key={resourceData.id}
      image={resourceData.image_src}
      name={resourceData.name}
      description={resourceData.description}
      slug={resourceData.slug}
    />
  });

  return (
    <ul className="border p-2 mx-5 bd-highlight">
      {resourceList}
    </ul>
  );
}