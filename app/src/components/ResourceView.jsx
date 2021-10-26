import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ResourceView(props) {
  const { getResource, state } = props;
  const { slug } = useParams()

  const [resource, setResource] = useState({})

  useEffect(() => {
    setResource(prev => ({ ...prev, ...getResource(state, slug) }))
  }, [])

  return (
    <section className="d-flex flex-row m-5 p-5" style={{ maxHeight: '300px' }}>
      <img src={resource.image_src} width='300px' />
      <div className="pl-2" style={{ paddingLeft: '1.5em' }}>
        <h3>{resource.name}</h3>
        <p>{resource.long_description}</p>
        <a href={resource.website}>Visit the Website!</a>
      </div>
    </section>
  )
}
