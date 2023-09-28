

const userSchema = {
    users : [],
    usersAreVisible : true,

    home : true,
    userById : false,
    
    userDeleteMode : false,
    userIdToDelete : "",
    
    userAddMode : false,
    userObjectToAdd : {},
    
    userEditMode : false,
    userBody : "",
    userEditedOutput : "",
    userEditedId : "",
    updatedUserBody : null,

    userIdToSearch : "",
    

    spinnerOn : false,
}

const formSchema = {
    name : "",
    bio : "",
}

export const initialData = {
    userManager : userSchema,
    formManager : formSchema,
    initialVisibility : false,
    message : "",
}
