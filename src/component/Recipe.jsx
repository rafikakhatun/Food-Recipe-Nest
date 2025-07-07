import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Recipe() {
    return (
        <>
            <section className="w-full py-14 px-12">
                <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4">
                    <h1 className="text-2xl font-semibold text-gray-700 italic">
                        Explore <span className="text-orange-500">100+</span> Delicious Recipes, All in One Place
                    </h1>
                    <FontAwesomeIcon
                        icon={faUtensils}
                        className="mt-4 md:mt-0 md:ml-4 text-orange-500 text-2xl"
                    />
                </div>
                <div>
                    <div className="px-6 py-4  w-72 shadow border border-gray-300 rounded-md space-y-4">
                        <h1 className="text-2xl text-center font-semibold text-gray-700 italic">Royal Biryani</h1>
                        <img className="w-64 h-64 rounded-md transform transition duration-300 ease-in-out hover:scale-105 " src="src/assets/biriyani.jpeg" alt="food" />
                        <button className="px-5 py-1 w-full rounded-xl bg-orange-400 hover:bg-orange-500 text-white cursor-pointer hover:underline">See Complete Recipe </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Recipe;
