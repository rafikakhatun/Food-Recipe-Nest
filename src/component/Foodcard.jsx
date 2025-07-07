function Foodcard({PropsData}) {
    console.log(PropsData)
    return (
        <>

            <div className="px-6 py-4 w-72 shadow border border-gray-300 rounded-md space-y-4">
                <h1 className="text-2xl text-center font-semibold text-gray-700 italic line-clamp-1 w-full ">{PropsData?.title}</h1>
                <img className="w-64 h-64 rounded-md transform transition duration-300 ease-in-out hover:scale-105 " src={PropsData?.image} alt="food" />
                <button className="px-5 py-1 w-full rounded-xl bg-orange-400 hover:bg-orange-500 text-white cursor-pointer hover:underline">{PropsData?.buttonText} ➜ </button>
            </div>


        </>
    )
}
export default Foodcard;