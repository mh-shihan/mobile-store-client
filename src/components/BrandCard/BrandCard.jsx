import "./BrandCard.css";
const BrandCard = (props = {}) => {
  const { brand } = props || {};
  const { brandName, brandImage } = brand;
  return (
    <div>
      <div className="cursor-pointer  ">
        <div className="max-w-md mx-auto  ">
          <div className="card-container">
            <img
              src={brandImage}
              alt="Your Image"
              className="w-full rounded-lg h-[270px] "
            />
            <div className="overlay flex flex-col  ">
              <div className="mt-4  text-center ">
                <h2 className="text-4xl font-bold text-base-200 ">
                  {brandName}
                </h2>
              </div>
            </div>
          </div>
          <h2 className="text-center p-2 text-2xl font-bold">{brandName}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
