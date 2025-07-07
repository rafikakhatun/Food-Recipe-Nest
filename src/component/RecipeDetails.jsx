import { useLoaderData, useParams } from "react-router-dom";

function RecipeDetails(){

const {UserId} = useParams();
console.log(typeof(UserId));

const loader = useLoaderData();


    return(

       

         <>

         <h1 className="text-5xl">hello</h1>

         


        
        
        
        </>
    )
}

export default RecipeDetails;