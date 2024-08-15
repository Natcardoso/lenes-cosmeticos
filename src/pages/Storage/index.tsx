/* External */
import { Menu } from '../../components/Menu';

export const Storage = () => {
	return (
		<main className="flex h-screen w-screen gap-2 border-solid border-2 p-2">
			<Menu />
			<section className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[2rem] text-5xl uppercase">estoque</h1>
			</section>
		</main>
	);
};
