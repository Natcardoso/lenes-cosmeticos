/* Dependencies */
import { useState } from 'react';

/* External */
import { Menu } from '../../components/Menu';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { InputDate } from '../../components/InputDate';
import { InputSearch } from '../../components/InputSearch';

export const Sales = () => {
	const [openModal, setOpenModal] = useState(false);

	const clickOpenModal = () => {
		setOpenModal(true);
	};

	return (
		<main className="flex h-screen w-screen gap-2 border-solid border-2 p-2">
			<Menu />
			<section className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[2rem] text-5xl uppercase">vendas</h1>
				<div className="mt-14 flex gap-6">
					<InputSearch />
					<InputDate />

					<div className="w-max">
						<Button
							icon
							text="Nova venda"
							onClick={clickOpenModal}
						/>
						{openModal && <Modal isCLosed={() => setOpenModal(false)} />}
					</div>
				</div>
			</section>
		</main>
	);
};
