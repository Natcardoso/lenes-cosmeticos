/* External */
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Sidebar } from '../../components/Sidebar';
import { InputSearch } from '../../components/InputSearch';
import { useState } from 'react';
import { Input } from '../../components/Input';

export const Storage = () => {
	const [openRegister, setOpenRegister] = useState(false);

	const openModal = () => {
		setOpenRegister(true);
	};

	const registerProduct = () => {
		console.log('aaa');
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
							<form className="flex flex-col justify-between h-full">
								<div className="flex flex-col gap-6">
									<Input
										type="text"
										label="Produto"
										// value={dataProduct.name}
										placeholder="Ex: Hidratante Tododia"
										onChange={registerProduct}
									/>

									<p>Select Categoria</p>
									<p>Select Marca</p>
									<p>Select Gênero</p>

									<div className="border-2 border-red-600 flex">
										<Input
											type="number"
											label="Valor"
											// value={dataProduct.name}
											placeholder="0,00"
											onChange={registerProduct}
										/>
										<Input
											type="number"
											label="Quantidade"
											// value={dataProduct.name}
											placeholder="0"
											onChange={registerProduct}
										/>
									</div>
								</div>

								<div className="flex gap-4">
									<Button
										text="Cancelar"
										color="bg-[#CC4444]"
									/>
									<Button text="Cadastrar" />
								</div>
							</form>
						</Sidebar>
					)}
				</div>
			</section>
		</main>
	);
};
