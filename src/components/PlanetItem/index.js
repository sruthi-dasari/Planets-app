import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <div className="planet-item-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <img src={imageUrl} alt={name} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
