export type PeopleContextType = {
	isLoading: boolean;
	currentPage: number;
	setCurrentPage: Function;
	allPeoples: User[];
	GetPeoples: Function;
	searchPerson: Function;
	totalCount: number;
	fetchPerson: Function;
};

export type User = {
	name: string;
	gender?: string | null;
	height?: string | null;
	mass?: string | null;
	homeworld?: string | null;
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;
