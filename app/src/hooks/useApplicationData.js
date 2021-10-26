import { useEffect, useState } from 'react';
import axios from 'axios'

export default function useApplicationData() {
  const [state, setState] = useState({
    resources: []
  })

  useEffect(() => {
    axios.get('/api/resources')
      .then((res) => {
        setState(prev => ({ ...prev, resources: res.data }));
      })
  }, [])

  return {
    state
  }
}
