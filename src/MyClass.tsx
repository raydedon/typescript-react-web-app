import * as React from 'react';

export interface IMyProps {
	isMarried?: boolean,
	name?: string,
};

export interface IMyState {
	age: number,
};

export default class MyClass extends React.Component<IMyProps, IMyState> {
	public static defaultProps: IMyProps = {
		isMarried: true,
		name: 'Animesh ray',
	};
	
	constructor(props: IMyProps) {
		super(props);
		this.state = {
			age: 21
		};
	}

	public render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h1>{this.props.isMarried ? 'is Married' : 'is Single'}</h1>
			</div>
		);
	}
}

