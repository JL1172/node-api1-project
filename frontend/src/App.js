import './App.css';
import { GlobalContext, FormContext, UserContext } from "./components/contexts/contextHandlers";
import User from "./components/users/User";
import AddUserForm from "./components/forms/AddUserForm";
import { StyledApp } from './styles/StyledApp';
import { useData } from './components/custom-hooks/useData';
import { initialData } from './components/initialDataSchema/initialData';
import { Hidden } from './components/Hidden';
import SearchForm from './components/forms/SearchForm';
import {AiOutlineUserAdd} from "react-icons/ai"

function App() {
  const [data, initialGet, searchById, changeSearchValue, closeAlerts, getUserData,
    pushModification, toggleEditMode, changeEditHandler,
    initializeDeletion,
    deleteUser, toggleUserAdd
  ] = useData(initialData);
  return (
    <StyledApp>
      <AiOutlineUserAdd id = "addButton" />
      <GlobalContext.Provider value={{
        data, initialGet, searchById, changeSearchValue, closeAlerts,
        initializeDeletion,deleteUser,
        getUserData, pushModification, toggleEditMode, changeEditHandler
      }}>
        <SearchForm />
        <UserContext.Provider value={[]}>
          {data.userManager.usersAreVisible && <User />}
        </UserContext.Provider>
        <FormContext.Provider value={[]}>
          {data.userManager.userAddMode && <AddUserForm />}
        </FormContext.Provider>
        <Hidden />
      </GlobalContext.Provider>
    </StyledApp>
  );
}

export default App;
