import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookService = () => {
  const checkout = useLoaderData();
  const {_id, title, price, img } = checkout;
  const {user} = useContext(AuthContext);

  const handleOrder = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    // const amount = form.amount.value;
    const booking = {
        customerName: name,
        email,
        price: price,
        date,
        service_id: _id,
        service: title,
        img
    }
    // console.log(booking);
    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert('booking success');
            console.log(data);
        }
    })


  }

  return (
    <div>
      <h2 className="text-xl">Booked Service: {title} </h2>

      <div className="">
            <form onSubmit={handleOrder} className="card-body">
             <div className="grid md:grid-cols-2 gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  placeholder="amount"
                  defaultValue={'$ ' + price}
                  className="input input-bordered"
                  required
                />
               
              </div>
             </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-block">Confirm order</button>
              </div>
            </form>
          </div>
    </div>
  );
};

export default BookService;
