/* Dependencies */
import { Search } from 'lucide-react';

export const InputSearch = () => {
	return (
		<div className="flex items-center gap-4 px-4 py-2 rounded-full flex-1 text-[#9E9E9E] bg-[#F3F3F3]">
			<Search />
			<input
				className="bg-transparent flex-1 outline-none"
				placeholder="Pesquisar"
				type="text"
			/>
		</div>
	);
};
