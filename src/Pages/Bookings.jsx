import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Booking from "./Booking";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const axiosSecure = useAxiosSecure();

  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url)
    .then(res => {
      setBookings(res.data);
    })
    // fetch(url, {credentials: 'include'})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");
    if (proceed) {
      // fetch(`http://localhost:5000/bookings/${id}`, {
      //   method: 'DELETE'
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.deletedCount > 0) {
      //         const remaining = bookings.filter(book => book._id !== id);
      //         setBookings(remaining);
      //         alert("deleted success");
      //         console.log(data);
      //     }
      //   });
      axiosSecure.delete(`/bookings/${id}`)
      .then(res => {
        if(res.data.deletedCount > 0) {
                  const remaining = bookings.filter(book => book._id !== id);
                  setBookings(remaining);
                  alert("deleted success");
                  console.log(res.data);
              }
      })
    }
  };
  
    // patch
  const handleConfirm = id => {
    
    axiosSecure.patch(`/bookings/${id}`, {status: 'confirm'})
    .then(res =>{
      if(res.data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
                console.log(res.data);
            }
    })
    // fetch(`http://localhost:5000/bookings/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({status: 'confirm'})
    // })
    // .then(res => res.json())
    // .then(data => {
    //     if(data.modifiedCount > 0){
    //         const remaining = bookings.filter(booking => booking._id !== id);
    //         const updated = bookings.find(booking => booking._id === id);
    //         updated.status = 'confirm'
    //         const newBookings = [updated, ...remaining];
    //         setBookings(newBookings);
    //         console.log(data);
    //     }
    // })
  }

  return (
    <div>
      <h2 className="text-xl">My bookings: {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr  className="font-bold text-lg">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

           {
            bookings.map(booking => <Booking 
                handleDelete={handleDelete}
                booking={booking} 
                key={booking._id}
                handleConfirm={handleConfirm}
                >
                </Booking>)
           }
          </tbody>
       
        </table>
      </div>
    </div>
  );
};

export default Bookings;
