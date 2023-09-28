import { useState } from "react"
import { deleteData, editData, getData, getDataById } from "../axios/actions";
import { StyledSearch } from "../../styles/StyledSearch";


export const useData = (initialData) => {
    const [data,setData] = useState(initialData); 
    
    //!flat get 
    const initialGet = (data1) => {
        setData({...data, userManager : {...data.userManager, users : data1}})
    }
    
    const getUserData = () => {
        getData().then(res=> {
            setData({...data, userManager : {...data.userManager, users : res.data,userEditMode : false,userIdToDelete : "", userDeleteMode : false,
            userById : false,
        }})
        })
    }
    //!flat get 
    //!get by id
    const changeSearchValue = (e) => {
        e.stopPropagation(); 
        setData({...data, userManager : {...data.userManager, userIdToSearch : (e.target.value)}})
    } 
    const searchById = (e,id) => {
        if (!id) {
            setData({...data, message : "The user with the specified ID does not exist"})
        } else {
        e.preventDefault();
        setData({...data, userManager : {...data.userManager, spinnerOn : true}})
                getDataById(id).then(res=> {
                    const fetchedUser = res.data;
                    setTimeout(()=>{
                    setData({...data, userManager : {...data.userManager, 
                        users : [fetchedUser], spinnerOn : false, userIdToSearch : "",
                        userById : true, home : false,
                    }})
                },100)
                }).catch(err => {
                    const newMessage = (err.response.data.message);
                    setTimeout(()=>{
                        setData({...data, message : newMessage, userManager : {...data.userManager, spinnerOn : false,}})
                    },100)
                }
                )}
    }
    //!get by id
    //!put
    const toggleEditMode = (id) => {
        const setUser = data.userManager.users.find(n => n.id == id);
        setData({...data, userManager : {...data.userManager, userById : !data.userManager.userById,
             updatedUserBody : null, userEditMode : !data.userManager.userEditMode,
             users : [setUser], userBody : setUser, userEditedId : id}});
    }
    const changeEditHandler = e => {
        setData({...data, userManager : {...data.userManager, userBody : {...data.userManager.userBody, 
            [e.target.name] : e.target.value},updatedUserBody : true}})
    }
    const pushModification = (id,modification) => {
        if (!data.userManager.updatedUserBody) {
            setData({...data, userManager : {...data.userManager,updatedUserBody : null }, message : "Please provide name and bio for the user"})
        } else {
        setData({...data, userManager : {...data.userManager, spinnerOn : true}})
        editData(id,modification).then(res=> {
            setData({...data,message : "", userManager : {...data.userManager, spinnerOn : false, userBody : "",userEditedId : "",updatedUserBody : null}})
            getUserData();
        }).catch(err => {
            const newMessage = (err.response.data.message);
            setTimeout(()=>{
                setData({...data, message : newMessage, spinnerOn : false})
            },100)
        })}}
        //!put
        //!delete
        const initializeDeletion = (e,id) => {
            e.stopPropagation();
            setData({...data, userManager : {...data.userManager, userDeleteMode : !data.userManager.userDeleteMode,
            userIdToDelete : id,
            }})
        }
        const deleteUser = (e,id) => {
            e.stopPropagation();
            setData({...data, userManager : {...data.userManager, spinnerOn : true}})
            deleteData(id).then(res=> {
                getUserData();
                setData({...data, userManager : {...data.userManager, spinnerOn : false}})
            }).catch(err=> {
                const newMessage = (err.response.data.message);
                setTimeout(()=>{
                    setData({...data, message : newMessage, spinnerOn : false})
                },100)
            })
        }
        //!delete
        //!post
        const toggleUserAdd = (e) => {
            e.stopPropagation();
            setData({...data, userManager : {...data.userManager, userAddMode : !data.userManager.userAddMode}})
        }
        //!post
    

    const closeAlerts = () => {
        setData({...data, message : ""})
    }
    return [
        data,
        initialGet,
        searchById,
        changeSearchValue,
        closeAlerts,
        getUserData,
        pushModification,
        toggleEditMode,
        changeEditHandler,
        initializeDeletion,
        deleteUser,
        toggleUserAdd,
    ]
}