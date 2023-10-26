import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, price, img, title} = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="h-72" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;