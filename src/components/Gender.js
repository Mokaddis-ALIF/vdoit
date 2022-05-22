import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Gender = ({ formData, setFormData, page, setPage }) => {
	const handleSelect = (e) => {
		setFormData({ ...formData, gender: e.target.value });
	};

	const selectJuniorAge = (e) => {
		setFormData({ ...formData, juniorAge: e.target.value });
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
						value="Mens"
						label="Mens"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="Womens"
						label="Womens"
					/>
				</>
			)}
			{!adult && (
				<>
					<Form.Check
						onChange={selectJuniorAge}
						type="checkbox"
						value="13-U"
						label="13-U"
					/>
					<Form.Check
						onChange={selectJuniorAge}
						type="checkbox"
						value="14-U"
						label="14-U"
					/>
					<Form.Check
						onChange={selectJuniorAge}
						type="checkbox"
						value="15-U"
						label="15-U"
					/>
					<Form.Check
						onChange={selectJuniorAge}
						type="checkbox"
						value="16-U"
						label="16-U"
					/>
					<Form.Check
						onChange={selectJuniorAge}
						type="checkbox"
						value="17-U"
						label="17-U"
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

export default Gender;
