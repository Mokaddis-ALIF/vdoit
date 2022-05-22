import React from 'react';
import { Button } from 'react-bootstrap';

const FinalPage = (formData, page, setPage) => {
	const data = formData?.formData;
	return (
		<div
			style={{ height: '60vh' }}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<h1>Team Name: {data?.teamName}</h1>
			<h2>Age Bracket: {data?.age}</h2>
			<h3>Gender: {data?.gender}</h3>
			<h2>Age Bracket: {data?.ageRange}</h2>
			<h4>
				Skills:{' '}
				{data?.skills.map((s, i) => (
					<div key={i}>{s},</div>
				))}
			</h4>

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
		</div>
	);
};

export default FinalPage;
