function WhatCook() {

    return (
        <>

            <div className="flex flex-col justify-center items-center px-10 py-16">

                <h1 className="text-3xl font-semibold">What to <span className="text-orange-500">Cook</span> </h1>

                <ul className="flex flex-wrap space-y-2 space-x-4 mt-14">
                    <li className="bg-orange-400 text-white px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">All Types</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Appetizers</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Main Courses</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Salad & Sides</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Vegetarian Delights</a>
                    </li>
                </ul>

                <ul className="flex flex-wrap space-y-2 space-x-4 mt-4">
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">International Flavors</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Desserts & Sweets</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Healthy Eats</a>
                    </li>
                    <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-center hover:bg-gray-200 transition cursor-pointer">
                        <a href="#">Quick & Easy Supper</a>
                    </li>
                </ul>


            </div>



        </>
    )

}

export default WhatCook;