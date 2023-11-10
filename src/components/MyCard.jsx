import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = (params = {}) => {
  const { cart, cartData, setCartData } = params || {};
  const { _id, name, brandName, price, details, rating, photo } = cart;

  const handleRemove = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cartData.filter((cart) => cart._id !== id);
              setCartData(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border max-h-fit">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border opacity-80">
          <img src={photo} className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-between mt-2 px-6">
          <div className="badge badge-secondary bg-blue-600 border-blue-600 text-white">
            {brandName}
          </div>
          <p className="text-bold">{rating}⭐</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {details}
          </p>
        </div>
        <div className="p-6 pt-0 space-y-2">
          <Link>
            <button
              onClick={() => handleRemove(_id)}
              className="block w-full select-none rounded-lg bg-blue-600   py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-base-200 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Remove From Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
