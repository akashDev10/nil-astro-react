import React, {useState} from 'react';

const AuthContext = React.createContext({
    token:'',
    isLoggedin:false,
    username:'',
    userId:'',
    login : (token) => {},
    logout: () => {}
});


export const AuthContextProvider = (props) => {

    const [accessToken, setToken] = useState(null);

    const [username, setUsername] = useState(null);

    const [roles, setRoles] = useState([]);

    const [userId, setUserId] = useState(null);

    const userIsLoggedIn = !!accessToken;


    const loginHandler = (data) => {
        setToken(data.accessToken);
        setRoles(data.roles);
        setUsername(data.username);
        setUserId(data.id);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {

        accessToken: accessToken,
        username: username,
        userId: userId,
        roles:roles,
        isLoggedin: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,

    }

    return  <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>

}


export default AuthContext;