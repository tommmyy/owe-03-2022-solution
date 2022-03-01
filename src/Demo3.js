import { useState } from 'react';
import './styles.css';

const Box = ({ as: Root = 'div', theme, style, ...rest }) => (
	<Root
		style={{
			background: '#fff',
			padding: '16px',
			borderRadius: theme.borderRadius,
			...style,
		}}
		{...rest}
	/>
);

const Button = ({ theme, style, ...rest }) => (
	<Box
		theme={theme}
		as="button"
		style={{
			display: 'block',
			cursor: 'pointer',
			outline: 0,
			textTransform: 'uppercase',
			width: '100%',
			...style,
		}}
		{...rest}
	/>
);

const ThemeDesigner = ({ theme, onChangeTheme }) => {
	return (
		<Box theme={theme}>
			<h1>Theme designer</h1>
			<input
				value={theme.borderRadius}
				type="range"
				min={0}
				step={1}
				onChange={(event) =>
					onChangeTheme({ ...theme, borderRadius: Number(event.target.value) })
				}
			/>
		</Box>
	);
};

const initialTheme = {
	borderRadius: 8,
};

export default function App() {
	const [theme, setTheme] = useState(initialTheme);
	const [counter, setCounter] = useState(0);

	return (
		<div className="w-50 m-auto txt-center">
			<Box theme={theme} style={{ marginBottom: 8 }}>
				<h1>{counter}</h1>

				<Button
					theme={theme}
					style={{ marginBottom: 8 }}
					onClick={() => setCounter((x) => x + 1)}
				>
					Increment
				</Button>

				<Button theme={theme} onClick={() => setCounter((x) => x - 1)}>
					Decrement
				</Button>
			</Box>
			<ThemeDesigner
				onChangeTheme={(newTheme) => setTheme(newTheme)}
				theme={theme}
			/>
		</div>
	);
}
