import './App.css';
import { GlobalContext, FormContext, UserContext } from "./components/contexts/contextHandlers";
import User from "./components/users/User";
import AddUserForm from "./components/forms/AddUserForm";
import { StyledApp } from './styles/StyledApp';
import { useData } from './components/custom-hooks/useData';
import { initialData } from './components/initialDataSchema/initialData';
import { Hidden } from './components/Hidden';
import SearchForm from './components/forms/SearchForm';
import { AiOutlineUserAdd } from "react-icons/ai"
import { Alert } from 'reactstrap';

function App() {
  const [data, initialGet, searchById, changeSearchValue, closeAlerts, getUserData,
    pushModification, toggleEditMode, changeEditHandler,
    initializeDeletion,
    deleteUser, toggleUserAdd, changeHandlerAdd,
    addUser,
  ] = useData(initialData);
  return (
    <StyledApp>
      <AiOutlineUserAdd id="addButton" onClick={(e) => toggleUserAdd(e)} />
      <GlobalContext.Provider value={{
        data, initialGet, searchById, changeSearchValue, closeAlerts,
        initializeDeletion, deleteUser,
        getUserData, pushModification, toggleEditMode, changeEditHandler, changeHandlerAdd,
        addUser,
      }}>
        {data.userManager.userAddMode && data.message && <Alert id="alert" color={"danger"}>{data.message}
          <span onClick={closeAlerts} id="closed" className="material-symbols-outlined">
            close
          </span>
        </Alert>}
        {!data.userManager.userAddMode && <SearchForm />}
        <UserContext.Provider value={[]}>
          {!data.userManager.userAddMode && data.userManager.usersAreVisible && <User />}
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
