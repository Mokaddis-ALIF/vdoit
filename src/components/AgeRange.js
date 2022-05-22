import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AgeRange = ({ formData, setFormData, page, setPage }) => {
	const [data, setData] = useState([]);

	const handleSelect = (e) => {
		setFormData({ ...formData, ageRange: e.target.value });
	};
	const handleSelectJunior = (e) => {
		data.push(e.target.value);
		setData([...data]);
		setFormData({ ...formData, juniorSkill: data });
	};

	const adult = formData.age === 'Adult';

	return (
		<div
			style={{ height: '60vh' }}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			{adult && (
				<>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="26-U"
						label="26-U"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="40"
						label="40"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="40"
						label="40"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="50"
						label="50"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="60"
						label="60"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="70"
						label="70"
					/>
				</>
			)}

			{!adult && (
				<>
					<Form.Check
						onChange={handleSelectJunior}
						type="checkbox"
						value="Bronze"
						label="Bronze"
					/>
					<Form.Check
						onChange={handleSelectJunior}
						type="checkbox"
						value="Silver"
						label="Silver"
					/>
					<Form.Check
						onChange={handleSelectJunior}
						type="checkbox"
						value="Gold"
						label="Gold"
					/>
					<Form.Check
						onChange={handleSelectJunior}
						type="checkbox"
						value="High School"
						label="High School"
					/>
					<Form.Check
						onChange={handleSelectJunior}
						type="checkbox"
						value="Club"
						label="Club"
					/>
				</>
			)}

			<div className="footer d-flex gap-5 justify-content-center align-items-center mt-5 pt-5">
				<Button
					onClick={() => {
						setPage((currPage) => currPage - 1);
					}}
				>
					Back
				</Button>
				<Button
					disabled={page === 5}
					onClick={() => {
						setPage((currPage) => currPage + 1);
					}}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default AgeRange;
