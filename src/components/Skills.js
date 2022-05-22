import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Skills = ({ formData, setFormData, page, setPage }) => {
	const [data, setData] = useState([]);

	const handleSelect = (e) => {
		data.push(e.target.value);
		setData([...data]);
		setFormData({ ...formData, skills: data });
	};

	const adult = formData.age === 'Adult';

	const handleSelectTeamName = (e) => {
		console.log(e.target.value);
		setFormData({ ...formData, teamName: e.target.value });
	};

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
						value="AA"
						label="AA"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="AAA"
						label="AAA"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="Novoice"
						label="Novoice"
					/>
					<Form.Check
						onChange={handleSelect}
						type="checkbox"
						value="Masters"
						label="Masters"
					/>
				</>
			)}

			{!adult && (
				<>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Team Name</Form.Label>
							<Form.Control
								onChange={handleSelectTeamName}
								type="text"
								placeholder="Team Name"
							/>
						</Form.Group>
					</Form>
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

export default Skills;
