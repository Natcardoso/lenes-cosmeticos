/* Dependencies */
import { Plus } from 'lucide-react';

type Props = { icone?: boolean; text: string; onClick?: () => void };

export const Button = ({ icone, text, onClick }: Props) => {
	return (
		<>
			<button
				className="flex rounded-lg bg-[#303030] px-4 py-2 text-white gap-2 text-2xl font-bold"
				onClick={onClick}
			>
				{icone && <Plus size={32} />}
				<span>{text}</span>
			</button>
		</>
	);
};
