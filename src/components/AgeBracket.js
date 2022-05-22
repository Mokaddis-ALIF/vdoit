import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

const AgeBracket = ({ formData, setFormData, page, setPage }) => {
	const handleSelect = (e) => {
		setFormData({ ...formData, age: e });
	};

	return (
		<div
			style={{ height: '70vh' }}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<Dropdown onSelect={handleSelect}>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Age Bracket
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item eventKey="Adult" href="#/action-1">
						Adult
					</Dropdown.Item>
					<Dropdown.Item eventKey="Junior" href="#/action-2">
						Junior
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
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

export default AgeBracket;
