import { useCallback, useMemo, useState, useEffect } from 'react';
import './styles.css';
const Filter = ({ filter, onChange }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;

		onChange({ ...filter, [name]: value });
	};

	return (
		<div className="flex space-between p-16 mb-16 bg-lightGray">
			<div>
				<label htmlFor="page">Page:</label>
				<input
					className="w-48"
					id="page"
					name="page"
					type="number"
					min={0}
					step={1}
					value={filter.page}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="per_page">Per page:</label>
				<select
					id="per_page"
					name="per_page"
					className="w-48"
					value={filter.per_page}
					onChange={handleChange}
				>
					<option value={20}>20</option>
					<option value={40}>40</option>
				</select>
			</div>
		</div>
	);
};

const List = ({ data }) => {
	return (
		<div>
			{data && (
				<ul className="list">
					{data.map(({ id, author, message }) => {
						return (
							<li key={id} className="list-item">
								<strong>{author}:</strong> {message}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default function App() {
	const [filter, setFilter] = useState({ page: 0, per_page: 20 });
	const [data, setData] = useState([
		{ id: '1', author: 'DarthVader77', message: 'Fixed light saber.' },
	]);

	return (
		<div className="w-50 m-auto txt-center">
			<div className="bg-white p-16 border-radius">
				<Filter onChange={setFilter} filter={filter} />
				<List data={data} />
			</div>
		</div>
	);
}
