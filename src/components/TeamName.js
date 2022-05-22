import React from 'react';
import { Button, Form } from 'react-bootstrap';

const TeamName = ({ formData, setFormData, page, setPage }) => {
	const adult = formData.age === 'Adult';

	const handleSelectTeamName = (e) => {
		setFormData({ ...formData, teamName: e.target.value });
	};

	return (
		<div
			style={{ height: '60vh' }}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			{adult && (
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
			)}

			{!adult && (
				<>
					<h1>Team Name: {formData?.teamName}</h1>
					<h2>Age Bracket: {formData?.age}</h2>
					<h2>Age Bracket: {formData?.juniorAge}</h2>
					<h4 className="d-flex">
						Skills:{' '}
						{formData?.juniorSkill.map((s, index) => (
							<div key={index}>{s},</div>
						))}
					</h4>
				</>
			)}

			{!adult && (
				<div className="footer d-flex gap-5 justify-content-center align-items-center mt-5 pt-5">
					<Button
						onClick={() => {
							setPage((currPage) => currPage - 1);
						}}
					>
						Back
					</Button>
					<Button
						disabled={true}
						onClick={() => {
							setPage((currPage) => currPage + 1);
						}}
					>
						Next
					</Button>
				</div>
			)}

			{adult && (
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
			)}
		</div>
	);
};

export default TeamName;
