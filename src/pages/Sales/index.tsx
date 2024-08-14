import { Menu } from '../../components/Menu';
import { InputSearch } from '../../components/InputSearch';
import { InputDate } from '../../components/InputDate';
import { Button } from '../../components/Button';

export const Sales = () => {
	return (
		<main className="flex h-screen w-screen gap-2 border-solid border-2 p-2">
			<Menu />
			<section className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[2rem] text-5xl uppercase">vendas</h1>

				<div className="mt-14 flex gap-6">
					<InputSearch />

					<InputDate />

					<Button
						icone
						text="Nova venda"
					/>
				</div>
			</section>
		</main>
	);
};
