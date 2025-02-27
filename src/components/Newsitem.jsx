

const Newsitem = ({title, description,src,url}) => {
  return (
    <div className="card bg-light text-light mb-3 d-inline-block border border-warning" style={{maxWidth:"350px"}}>
  <img src={src ? src : image} style={{height:"200px", width:"100%" }} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description ? description.slice(0,90) : "Click Read more to Know about this article"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem
