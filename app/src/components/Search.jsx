export default function Search(props) {

  return (
    <div className="d-flex flex-row justify-content-around mt-5 mb-2">
      <form className="d-flex flex-row form-inline" action="submit">
        <input className="form-control mr-sm-2" type="search" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success m-2 my-sm-0 p-1" type="submit">Search</button>
      </form>
    </div>
  )
}