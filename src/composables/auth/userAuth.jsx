import {
    useContext
} from 'react';
import {AuthContext} from "@/context/auth-context.jsx";

export default useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    
    return context;
};
