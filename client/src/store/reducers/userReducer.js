import jwt_decode from "jwt-decode";

// Set Initail values
const initail = {
    loading: false,
    token: "",
    user: "",
};

const verifyToken = (token) => {
    const decodedToken = jwt_decode(token);
    const expireIn = new Date(decodedToken.exp * 1000);
    if (new Date() > expireIn) {
        localStorage.removeItem("CipherSchool");
        return null;
    } else return decodedToken;
};


const token = localStorage.getItem("CipherSchool");
if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
        initail.token = token;
        const { user } = decoded;
        initail.user = user;
    }
}


const userReducer = (state = initail, action) => {
    if (action.type === "SET_LOADER") 
        return { ...state, loading: true };
    else if (action.type === "CLOSE_LOADER") 
        return { ...state, loading: false };
    else if (action.type === "SET_TOKEN") {
            localStorage.setItem("CipherSchool",action.payload)
            const decoded = verifyToken(action.payload);
            const { user } = decoded;
            return { ...state, token: action.payload, user: user };
    }
    else if (action.type === "LOGOUT") 
        return { ...state, token: "", user: "" };
    else return state;
};

export default userReducer;