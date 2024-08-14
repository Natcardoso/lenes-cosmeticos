import { ArrowLeft } from 'lucide-react';

type Props = {
	isClose: () => void;
};

export const Sidebar = ({ isClose }: Props) => {
	return (
		<div className="flex justify-end fixed top-0 left-0 h-screen w-screen bg-[#00000070] border-4 border-red-600 p-4">
			<div className="bg-white w-1/4 h-full rounded-lg">
				<ArrowLeft
					className="text-[#9B9B9B]"
					onClick={() => isClose}
				/>
				<h1>Novo cliente</h1>
			</div>
		</div>
	);
};
