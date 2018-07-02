import * as React from 'react';

interface IProfileProp {
	designation: 'JAVA DEV' | 'FRONTEND DEV',
	yearsOfExperience: number,
	companyNames: string[],
}

const Profile = (props: IProfileProp) => {
	return (
		<div>
			<h1>{props.designation}</h1>
			<h1>{props.yearsOfExperience}</h1>
			<div>{props.companyNames.join()}</div>
		</div>
	);
};
export default Profile;