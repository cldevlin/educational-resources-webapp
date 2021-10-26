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
    <section>

      <img src={resource.image} width='300px' />
      <div>
        <h3>{resource.name}</h3>
        <p>{resource.long_description}</p>
      </div>

    </section>
  )
}