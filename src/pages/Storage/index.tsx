/* Dependencies */
import { useState } from 'react';

/* Internal */
import { SidebarStorage } from './SidebarStorage';

/* External */
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Sidebar } from '../../components/Sidebar';
import { InputSearch } from '../../components/InputSearch';

export const Storage = () => {
	const [openRegister, setOpenRegister] = useState(false);

	const openModal = () => {
		setOpenRegister(true);
	};

	return (
		<main className="flex h-screen w-screen gap-2 border-solid border-2 p-2">
			<Menu />
			<section className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[2rem] text-5xl uppercase">estoque</h1>
				<div className="mt-14 flex gap-6">
					<InputSearch />
					<div className="w-max">
						<Button
							icon
							text="Nova produto"
							onClick={openModal}
						/>
					</div>

					{openRegister && (
						<Sidebar
							title="Cadastrar Produto"
							isClose={() => setOpenRegister(false)}
						>
							<SidebarStorage />
						</Sidebar>
					)}
				</div>
			</section>
		</main>
	);
};
