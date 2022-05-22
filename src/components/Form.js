import React, { useState } from 'react';
import AgeBracket from './AgeBracket';
import AgeRange from './AgeRange';
import FinalPage from './FinalPage';
import Gender from './Gender';
import Skills from './Skills';
import TeamName from './TeamName';

const Form = () => {
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		age: '',
		gender: '',
		ageRange: '',
		juniorAge: '',
		teamName: '',
		juniorSkill: [],
		skills: [],
	});

	const PageDisplay = () => {
		if (page === 0) {
			return (
				<AgeBracket
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
				/>
			);
		} else if (page === 1) {
			return (
				<Gender
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
				/>
			);
		} else if (page === 2) {
			return (
				<AgeRange
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
				/>
			);
		} else if (page === 3) {
			return (
				<Skills
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
				/>
			);
		} else if (page === 4) {
			return (
				<TeamName
					formData={formData}
					setFormData={setFormData}
					page={page}
					setPage={setPage}
				/>
			);
		} else if (page === 5) {
			return <FinalPage formData={formData} page={page} setPage={setPage} />;
		}
	};

	console.log(formData);

	return (
		<div className="form">
			<div className="form-container">
				<div className="header"></div>
				<div className="body">{PageDisplay()}</div>
			</div>
		</div>
	);
};

export default Form;
