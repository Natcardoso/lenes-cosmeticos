import { Plus } from 'lucide-react';

type Props = { icon?: boolean; text: string; color?: string };

export const Button = ({ icon, text, color }: Props) => {
	return (
		<button
			className={`flex w-full justify-center rounded-lg ${
				color ? color : 'bg-[#303030]'
			} px-4 py-2 text-white gap-2 text-2xl font-bold`}
			onClick={() => console.log('clicou')}
		>
			{icon && <Plus size={32} />}
			<span>{text}</span>
		</button>
	);
};
