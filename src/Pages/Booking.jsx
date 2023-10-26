const Booking = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, img, price, date, service, status } = booking;


  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="">
          <div className="avatar h-24 w-24 rounded">
            <div className="">
              {img && (
                <img
                  className=""
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>
        {service}
        <br />
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {
         status === 'confirm' ? <span className="text-purple-400 font-semibold">Confirmed</span> : 
        <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default Booking;
