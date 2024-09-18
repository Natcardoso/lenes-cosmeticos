/* Dependencies */
import Select from 'react-select';

/* External */
import { Button } from '../../components/Button';
import { InputLabel } from '../../components/InputLabel';
import { useState } from 'react';

export const SidebarStorage = () => {
	const [nameProduct, setnameProduct] = useState('');

	const registerProduct = (e) => {
		setnameProduct(e.target.value);
	};

	const optionsCategory = [
		{ value: 'teste1', label: 'teste1' },
		{ value: 'teste2', label: 'teste2' },
	];

	const optionsMark = [
		{ value: 'Avon', label: 'Avon' },
		{ value: 'Eudora', label: 'Eudora' },
		{ value: 'Jequiti', label: 'Jequiti' },
		{ value: 'Mahogany', label: 'Mahogany' },
		{ value: 'Natura', label: 'Natura' },
		{ value: 'oBoticário', label: 'oBoticário' },
	];

	const optionsGender = [
		{ value: 'Masculino', label: 'Masculino' },
		{ value: 'Feminino', label: 'Feminino' },
		{ value: 'Unissex', label: 'Unissex' },
	];

	return (
		<form className="flex flex-col justify-between h-full">
			<div className="flex flex-col gap-6">
				<InputLabel
					type="text"
					label="Produto"
					value={nameProduct}
					placeholder="Ex: Hidratante Tododia"
					onChange={registerProduct}
					required
				/>

				<div className="flex flex-col gap-1">
					<span>Categoria</span>
					<Select options={optionsCategory} />
				</div>

				<div className="flex flex-col gap-1">
					<span>Select Marca</span>
					<Select
						options={optionsMark}
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<span>Select Gênero</span>
					<Select options={optionsGender} />
				</div>

				<div className="border-2 border-red-600">
					<InputLabel
						type="number"
						label="Valor"
						// value={dataProduct.name}
						placeholder="0,00"
						onChange={registerProduct}
					/>

					<InputLabel
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
	);
};
