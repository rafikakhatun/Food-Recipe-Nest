import { Link } from "react-router-dom";

function Foodcard({ PropsData }) {
  console.log(PropsData);
  return (
    <>
      <div className="px-6 py-4 w-72 shadow border border-gray-300 rounded-md space-y-4">
        <h1
          className="text-2xl text-center font-semibold text-gray-700 italic line-clamp-1 w-full"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {PropsData?.title}
        </h1>

        <img
          className="w-64 h-64 rounded-md transform transition duration-300 ease-in-out hover:scale-105"
          src={PropsData?.image}
          alt="food"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />

        <Link to={`/recipe/${PropsData.id}`}>
          <button
            type="button"
            className="px-5 py-1 w-full rounded-xl bg-orange-400 hover:bg-orange-500 text-white cursor-pointer hover:underline"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {PropsData?.buttonText} ➜
          </button>
        </Link>
      </div>
    </>
  );
}

export default Foodcard;
