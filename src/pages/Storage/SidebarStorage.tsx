/* Dependencies */
import Select from 'react-select';

/* External */
import { Button } from '../../components/Button';
import { InputLabel } from '../../components/InputLabel';

export const SidebarStorage = () => {
	const registerProduct = () => {
		console.log('aaa');
	};

	const optionsCategory = [
		{ value: 'teste1', label: 'teste1' },
		{ value: 'teste2', label: 'teste2' },
	];

	const optionsMark = [
		{ value: 'teste1', label: 'teste1' },
		{ value: 'teste2', label: 'teste2' },
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
					// value={dataProduct.name}
					placeholder="Ex: Hidratante Tododia"
					onChange={registerProduct}
				/>

				<div className="flex flex-col gap-1">
					<span>Categoria</span>
					<Select options={optionsCategory} />
				</div>

				<div className="flex flex-col gap-1">
					<span>Select Marca</span>
					<Select options={optionsMark} />
				</div>

				<div className="flex flex-col gap-1">
					<span>Select Gênero</span>
					<Select options={optionsGender} />
				</div>

				<div className="border-2 border-red-600 flex gap-4">
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
