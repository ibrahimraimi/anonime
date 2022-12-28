import { FC, useState } from "react";

const Search: FC = () => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setInputValue(e.preventDefault());
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					className="font-medium py-2 px-6 rounded-full bg-gray-700 text-white outline-none border-none w-full lg:w-auto"
					type="text"
					placeholder="Search anime or movie"
				/>
			</form>
		</>
	);
};

export default Search;