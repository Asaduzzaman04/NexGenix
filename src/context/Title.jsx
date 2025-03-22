// import { createContext, useContext, useState, useEffect } from 'react';
// import { useLocation } from 'react-router';

// export const titleContext = createContext();

// export const TitleProvider = ({ children }) => {
//   const [title, setTitle] = useState('Nexgenix');
//   const location = useLocation();

//   useEffect(() => {
//     const pathTitle =
//       location.pathname
//         .split('/')
//         .filter(Boolean)
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ') || 'Home';

//     setTitle(`Nexgenix${pathTitle !== 'Home' ? ` - ${pathTitle}` : ''}`);
//   }, [location]);

//   return (
//     <titleContext.Provider value={{ title, setTitle }}>
//       {children}
//     </titleContext.Provider>
//   );
// };

// // Custom hook for using the title context
// export const useTitle = () => {
//   const context = useContext(titleContext);
//   if (!context) {
//     throw new Error('useTitle must be used within a TitleProvider');
//   }
//   return context;
// };
