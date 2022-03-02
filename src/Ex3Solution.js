import { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import './styles.css';
import { ThemeProvider, useTheme, ThemeConsumer } from './themeSolution';

const Box = ({ as: Root = 'div', theme, style, ...rest }) => (
	<ThemeConsumer>
		{([theme]) => (
			<Root
				style={{
					background: '#fff',
					padding: '16px',
					borderRadius: theme.borderRadius,
					border: `solid ${theme.primaryColor} 1px`,
					...style,
				}}
				{...rest}
			/>
		)}
	</ThemeConsumer>
);

const Button = ({ style, ...rest }) => {
	const [theme] = useTheme();
	return (
		<Box
			as="button"
			style={{
				display: 'block',
				outline: 0,
				textTransform: 'uppercase',
				cursor: 'pointer',
				width: '100%',
				background: theme.primaryColor,
				color: theme.white,
				...style,
			}}
			{...rest}
		/>
	);
};

const ThemeDesigner = () => {
	const [theme, onChangeTheme] = useTheme();
	const controls = {
		color: theme.primaryColor,
		onChange: (value) => onChangeTheme({ ...theme, primaryColor: value }),
	};

	return (
		<Box>
			<h1>Theme designer</h1>
			<p>
				<input
					value={theme.borderRadius}
					type="range"
					min={0}
					step={1}
					onChange={(event) =>
						onChangeTheme({
							...theme,
							borderRadius: Number(event.target.value),
						})
					}
				/>
			</p>

			<p>Primary color:</p>
			<div>
				<HexColorPicker {...controls} />
				<HexColorInput {...controls} />
			</div>
		</Box>
	);
};

const App2 = () => {
	const [counter, setCounter] = useState(0);

	return (
		<ThemeProvider>
			<div className="w-50 m-auto txt-center">
				<Box style={{ marginBottom: 8 }}>
					<h1>{counter}</h1>

					<Button
						style={{ marginBottom: 8 }}
						onClick={() => setCounter((x) => x + 1)}
					>
						Increment
					</Button>

					<Button onClick={() => setCounter((x) => x - 1)}>Decrement</Button>
				</Box>
				<ThemeDesigner />
			</div>
		</ThemeProvider>
	);
};

export default App2;
