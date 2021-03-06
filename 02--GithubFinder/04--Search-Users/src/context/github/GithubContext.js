import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({
    users: [],
    loading: Boolean,
    fetchUsers: () => {},
    setLoading: Boolean,
});

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    const fetchUsers = async () => {
        setLoading();
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        const data = await res.json();
        dispatch({
            type: "GET_USERS",
            payload: data,
        });
    };

    //  Set Loading

    const setLoading = () => dispatch({ type: "SET_LOADING" });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                fetchUsers,
                setLoading,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;
