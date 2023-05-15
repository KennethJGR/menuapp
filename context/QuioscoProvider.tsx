import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const res = await axios.get("http://localhost:3000/api/categories");
        setCategories(res.data);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <QuioscoContext.Provider
            value={{
                categories,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
};

export { QuioscoProvider, QuioscoContext };
