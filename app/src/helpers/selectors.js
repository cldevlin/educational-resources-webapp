export function getResource(state, slug) {
  const resourceObj = state.resources.filter(current => current.slug === slug)[0]
  if (!resourceObj) {
    return null;
  }
  return resourceObj;
}