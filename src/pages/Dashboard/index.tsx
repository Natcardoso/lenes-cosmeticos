import { HandCoins, Package, ShoppingBag, UserRound, Wallet } from 'lucide-react';
import { Menu } from '../../components/Menu';

export const Dashboard = () => {
	const cards = [
		{
			name: 'Estoque',
			value: '300',
			svg: <Package />,
			background: 'rgba(208, 148, 58, 0.35)',
			color: '#A3935B',
		},
		{
			name: 'Clientes Cadastrados',
			value: '100',
			svg: <UserRound />,
			background: 'rgba(178, 59, 59, 0.35)',
			color: '#9F3838',
		},
		{
			name: 'Total de Vendas',
			value: '200',
			svg: <ShoppingBag />,
			background: 'rgba(152, 48, 148, 0.25)',
			color: '#A073B5',
		},
		{
			name: 'Faturamento',
			value: 'R$ 480,00',
			svg: <Wallet />,
			background: 'rgba(85, 217, 52, 0.35)',
			color: '#3D7A38',
		},
		{
			name: 'Pagamentos a receber',
			value: 'R$ 250,00',
			svg: <HandCoins />,
			background: 'rgba(63, 48, 152, 0.25)',
			color: '#3D327D',
		},
	];

	return (
		<div className="flex h-screen gap-2 w-screen border-solid border-2 p-2">
			<Menu />
			<div className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[1.5rem] text-5xl mb-8">DASHBOARD</h1>
				<div className="flex flex-wrap gap-4">
					{cards.map((card, index) => (
						<div
							key={index}
							className="flex flex-col items-center flex-1 p-4 shadow-[4px_4px_20px_#e3e3e3] rounded-md"
						>
							<div
								style={{ background: card.background, color: card.color }}
								className={`p-4 rounded-full mb-4`}
							>
								{card.svg}
							</div>
							<h3 className="text-secondary font-medium">{card.name}</h3>
							<p className="font-bold text-2xl">{card.value}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
