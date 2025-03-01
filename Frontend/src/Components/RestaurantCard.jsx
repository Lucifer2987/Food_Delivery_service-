import "../styles/restaurantCard.css";
const RestaurantCard = ({ name, image, rating, cuisine, location }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <p>{location}</p>
        <span className="restaurant-rating">⭐ {rating}</span>
      </div>
    </div>
  );
};
export default RestaurantCard;