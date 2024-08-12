import { Menu } from '../../components/Menu';

export const Dashboard = () => {
	return (
		<div className="flex h-screen gap-2 w-screen border-solid border-2">
			<Menu />
			<div className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[2rem] text-5xl uppercase">dashboard</h1>
			</div>
		</div>
	);
};
