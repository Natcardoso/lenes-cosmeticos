import { Menu } from '../../components/Menu';

export const Sales = () => {
	return (
		<main className="flex h-screen w-screen gap-2 border-solid border-2">
			<Menu />
			<section className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[2rem] text-5xl uppercase">vendas</h1>

				<div className="border-red-600 border-2 mt-14 flex ">
					<input type="text" />
					<input type="date" />
					<button onClick={() => console.log('clicou')}>nova venda</button>
				</div>
			</section>
		</main>
	);
};
