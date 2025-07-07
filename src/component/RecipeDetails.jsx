import { useLoaderData, useParams } from "react-router-dom";

function RecipeDetails() {
  const { UserId } = useParams();
  console.log(typeof UserId);

  const loadData = useLoaderData();

  const detailsRecipe = loadData.find(item => item.id === Number(UserId));
  console.log(detailsRecipe);

  return (
    <>
      <section className="py-12 px-14 w-full">
        <div>
          {/* title */}
          <h1
            className="text-3xl font-semibold text-orange-500 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {detailsRecipe?.title}
          </h1>

          <div
            className="text-center space-x-5 mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-lg text-gray-600">
              {detailsRecipe?.servings} servings
            </span>
            <span className="text-lg text-gray-600">
              Prep Time : {detailsRecipe?.prepTime}
            </span>
            <span className="text-lg text-gray-600">
              Cook Time : {detailsRecipe?.cookTime}
            </span>
            <span className="text-lg text-gray-600">
              Total time: {detailsRecipe?.totalTime}
            </span>
          </div>

          <div>
            <img
              className="w-96 h-96 rounded-lg shadow object-center mt-10"
              src={detailsRecipe?.image}
              alt="foodimg"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            />
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeDetails;
