import { useState, createContext, useContext } from 'react';
const themeContext = createContext();

const initialTheme = {
	borderRadius: 8,
	blue: 'rgb(0, 127, 255)',
	white: '#fff',
	lightBlue: 'rgba(0, 127, 255, 0.5)',
};

export const ThemeProvider = (props) => {
	const api = useState(initialTheme);
	return <themeContext.Provider {...props} value={api} />;
};

export const ThemeConsumer = themeContext.Consumer;

export const useTheme = () => {
	return useContext(themeContext);
};
