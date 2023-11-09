import { useLoaderData } from "react-router-dom";
import Navbar from "../header/Navbar";
import Swal from "sweetalert2";

const UpdateForm = () => {
  const loadedData = useLoaderData();
  const { _id, name, brandName, type, price, details, rating, photo } =
    loadedData;
  console.log(loadedData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const addedProduct = {
      name,
      brandName,
      type,
      price,
      details,
      rating,
      photo,
    };
    console.log(addedProduct);
    fetch(`http://localhost:5000/mobiles/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Phone added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto border shadow-sm mb-10 mt-20  ">
        <h1 className="text-3xl md:text-5xl font-extrabold my-10 text-center ">
          Update Product
        </h1>
        <form onSubmit={handleUpdate} className="flex justify-center  ">
          <div className="bg-[#F4F3F0] w-full md:w-3/4 rounded-xl p-4 md:p-10 mx-4 md:mx-0">
            {/* Form Row of Name and Available Quantity  */}
            <div className="md:flex mb-0 md:mb-8">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Mobile Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={name}
                    placeholder="Mobile Name"
                    name="name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-0 md:ml-8">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Brand Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={brandName}
                    placeholder="Brand Name"
                    name="brandName"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Form Row of Supplier and Taste  */}
            <div className="md:flex mb-0 md:mb-8 ">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">Type</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={type}
                    placeholder="type"
                    name="type"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-0 md:ml-8">
                <label className="label">
                  <span className="label-text text-xl font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={price}
                    placeholder="price"
                    name="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Form Row of Categories and Details  */}
            <div className="md:flex bg-[#F4F3F0] mb-0 md:mb-8  ">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={rating}
                    placeholder="rating"
                    name="rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-0 md:ml-8">
                <label className="label">
                  <span className="label-text text-xl font-bold">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={details}
                    placeholder="details"
                    name="details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Photo Url and Rating */}
            <div className="md:flex bg-[#F4F3F0] mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-xl font-bold">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={photo}
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Submit Button  */}
            <div>
              <input
                type="submit"
                value="Update Product"
                className="btn btn-block bg-blue-600 text-white hover:text-black font-bold "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
