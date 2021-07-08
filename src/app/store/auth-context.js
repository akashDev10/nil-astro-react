import React, {useState} from 'react';

const AuthContext = React.createContext({
    accessToken:'',
    isLoggedin:false,
    roles: '',
    username:'',
    userId:'',
    login : (token) => {},
    logout: () => {}
});


export const AuthContextProvider = (props) => {

     const initialToken = localStorage.getItem('accessToken');
     const initialRole =  localStorage.getItem('roles');
     const initialUsername = localStorage.getItem('username');
    const initialUserId = localStorage.getItem('userId');

    const [accessToken, setToken] = useState(initialToken);

    const [username, setUsername] = useState(initialRole);

    const [roles, setRoles] = useState(initialUsername);

    const [userId, setUserId] = useState(initialUserId);

    const userIsLoggedIn = !!accessToken;


    const loginHandler = (data) => {
        setToken(data.accessToken);
        setRoles(data.roles);
        setUsername(data.username);
        setUserId(data.id);

        localStorage.setItem('accessToken',data.accessToken);
        localStorage.setItem('roles',data.roles);
        localStorage.setItem('username',data.username);
        localStorage.setItem('userId',data.userId);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('roles');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
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