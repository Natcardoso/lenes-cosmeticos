/* Dependencies */
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, UserRound } from 'lucide-react';

/* External */
import Logo from '../../assets/logo.svg';

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
				alt="Logo da Lene's Cosméticos"
				className=""
			/>
			<div className="flex items-center flex-col gap-8">
				{listMenu.map((item) => (
					<NavLink
						to={item.to}
						className={({ isActive }) =>
							isActive
								? 'bg-neutral-900 p-4 rounded-lg text-white cursor-pointer'
								: 'cursor-pointer'
						}
					>
						{item.svg}
					</NavLink>
				))}
			</div>
		</div>
	);
};
