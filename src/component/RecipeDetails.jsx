import { useLoaderData, useParams } from "react-router-dom";

function RecipeDetails(){

const {UserId} = useParams();
console.log(typeof(UserId));

const loader = useLoaderData();


    return(

       

        





        <>


        
        
        
        </>
    )
}

export default RecipeDetails;