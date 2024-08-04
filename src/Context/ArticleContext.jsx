import React, { createContext, useState, useContext, useEffect } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    // const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(() => {
        const savedArticle = localStorage.getItem('selectedArticle');
        return savedArticle ? JSON.parse(savedArticle) : null;
    });

    useEffect(() => {
        if (selectedArticle) {
            localStorage.setItem('selectedArticle', JSON.stringify(selectedArticle));
        } else {
            localStorage.removeItem('selectedArticle');
        }
    }, [selectedArticle]);
    return (
        <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
            {children}
        </ArticleContext.Provider>
    );
};

export const useArticleContext = () => useContext(ArticleContext);
