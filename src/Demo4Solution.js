import { useCallback, useMemo, useState, useEffect } from 'react';
import './styles.css';

const Helmet = ({ getTitle }) => {
	useEffect(() => {
		document.getTitle = getTitle();
		console.log('set getTitle to: ' + getTitle());
	}, [getTitle]);

	return null;
};

export default function App() {
	const [text, setText] = useState('');
	const inline = () => 'OWE';
	const memo = useMemo(() => () => 'OWE', []);
	const cb = useCallback(() => 'OWE', []);

	return (
		<div className="w-50 m-auto txt-center">
			<Helmet getTitle={cb} />
			<p>
				<input
					className="w-100"
					placeholder="I am here just to show rerenders."
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
			</p>
		</div>
	);
}
