import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	isClose: () => void;
	title: string;
};

export const Sidebar = ({ children, isClose, title }: Props) => {
	return (
		<div className="flex justify-end fixed top-0 left-0 h-screen w-screen bg-[#00000070] p-4">
			<div className="flex flex-col bg-white w-[500px] h-full rounded-lg p-4">
				<div className="flex items-center gap-4 font-bold text-2xl mb-8">
					<ArrowLeft
						className="text-[#9B9B9B] cursor-pointer transition  hover:scale-110"
						onClick={isClose}
					/>
					<h1>{title}</h1>
				</div>
				{children}
			</div>
		</div>
	);
};
