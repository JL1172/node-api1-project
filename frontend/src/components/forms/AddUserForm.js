import { useContext } from "react";
import { StyledForm } from "../../styles/StyledForm";
import { GlobalContext } from "../contexts/contextHandlers";

export default function AddUserForm() {
    const { changeHandlerAdd, data,
        addUser} = useContext(GlobalContext); 
    return (
        <StyledForm>
            <div id = "main">
                <h2>Add User</h2>
                <div>
                    <form onSubmit={(e)=> addUser(e,data.userManager.userObjectToAdd)} id = "form">
                        <div className="row">
                            <span>Name</span>
                        <input onChange={(e)=> changeHandlerAdd(e)} value = {data.userManager.userObjectToAdd.name} type = "text" name = "name" id = "name" />
                        </div>
                        <div className="row">
                            <span>Bio</span>
                        <input onChange={(e)=> changeHandlerAdd(e)} value = {data.userManager.userObjectToAdd.bio} type = "text" name = "bio" id = "bio" />
                        </div>
                        <input type = "submit" id = "submit"/>
                    </form>
                </div>
            </div>
            <span className="movingGeo3"></span>
        </StyledForm>
    )
}