import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Foodcard from "./foodcard";
import { useEffect, useState } from "react";

function Recipe() {

    // food json data usestate
    const [foodData, setFoodData] = useState([]);


    // food json data api call

    const fetchJsonData = async () => {

        const response = await fetch("/fooddata.json");

        const result = await response.json();

        setFoodData(result)





    }





    useEffect(() => {
        fetchJsonData();
    }, [])




    return (
        <>
            <section className="w-full py-14 px-12">
                <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8">
                    <h1 className="text-2xl font-semibold text-gray-700 italic">
                        Explore <span className="text-orange-500">100+</span> Delicious Recipes, All in One Place
                    </h1>
                    <FontAwesomeIcon
                        icon={faUtensils}
                        className="mt-4 md:mt-0 md:ml-4 text-orange-500 text-2xl"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mt-16">
                    {foodData.map((foodDatas, index) => (


                        <Foodcard key={index} PropsData={foodDatas}></Foodcard>


                    ))}


                </div>
            </section>

        </>
    )
}

export default Recipe;
