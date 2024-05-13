import Cookies from 'js-cookie';

// Custom hook to check if user is logged in
const useCheckLogin = () => {
    const token = Cookies.get('userToken');

    if (token) {
        return 1; // User is logged in
    } else {
        return 0; // User is not logged in
    }
}

export default useCheckLogin;
