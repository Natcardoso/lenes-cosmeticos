import { LayoutDashboard, Package, ShoppingBag, UserRound } from 'lucide-react';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
	const listMenu = [
		{ to: '/', svg: <LayoutDashboard /> },
		{ to: '/clientes', svg: <UserRound /> },
		{ to: '/vendas', svg: <ShoppingBag /> },
		{ to: '/estoque', svg: <Package /> },
	];

	return (
		<div className="flex flex-col items-center gap-14 h-full w-20 bg-white rounded-lg p-2">
			<img
				src={Logo}
				alt="Logo da Lene`s Cosméticos"
				className=""
			/>
			<div className="flex items-center flex-col gap-8 ">
				{listMenu.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							`cursor-pointer p-4 rounded-lg  ${
								isActive ? 'bg-neutral-900 text-white' : 'text-black'
							} hover:text-white hover:bg-neutral-900  transition ease-in opacity-95`
						}
					>
						{item.svg}
					</NavLink>
				))}
			</div>
		</div>
	);
};
