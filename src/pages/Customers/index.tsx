/* Dependencies */
import { useState } from 'react';
import { Eye, SquarePen, Trash2 } from 'lucide-react';
import {
	useReactTable,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table';

/* External */
import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Sidebar } from '../../components/Sidebar';
import { InputSearch } from '../../components/InputSearch';

const data: ClientData[] = [
	{
		name: 'Natália Almeida',
		phone: '(14) 98838-9710',
		birthday: '24 de setembro, 2001',
	},
	{
		name: 'Matheus Santos',
		phone: '(14) 99179-9488',
		birthday: '15 de junho, 2001',
	},
	{
		name: 'Ana Júlia',
		phone: '(14) 98838-9710',
		birthday: '12 de Março, 2006',
	},
	{
		name: 'Natália Almeida',
		phone: '(14) 98838-9710',
		birthday: '24 de setembro, 2001',
	},
];
const INITIAL_DATA_CLIENT = {
	name: '',
	phone: '',
	birthday: '',
};

type ClientData = typeof INITIAL_DATA_CLIENT;

export const Customers = () => {
	const [openEdit, setOpenEdit] = useState(false);
	const [dataClient, setDataClient] = useState<ClientData>(INITIAL_DATA_CLIENT);

	const handleView = (person: ClientData) => {
		console.log('Remover:', person);
	};

	const handleEdit = (person: ClientData) => {
		setOpenEdit(true);
		setDataClient(person);
	};

	const handleRemove = (person: ClientData) => {
		console.log('Remover:', person);
	};

	const columns: ColumnDef<ClientData>[] = [
		{
			accessorKey: 'name',
			header: 'Nome',
		},
		{
			accessorKey: 'birthday',
			header: 'Data de Nascimento',
		},
		{
			accessorKey: 'phone',
			header: 'Telefone',
		},
		{
			id: 'actions',
			header: 'Ações',
			cell: ({ row }) => (
				<div className="flex justify-center gap-4">
					<button onClick={() => handleView(row.original)}>
						<Eye className="text-[#999999] cursor-pointer" />
					</button>
					<button onClick={() => handleEdit(row.original)}>
						<SquarePen className="text-[#36A267] cursor-pointer" />
					</button>
					<button onClick={() => handleRemove(row.original)}>
						<Trash2 className="text-[#BD3838] cursor-pointer" />
					</button>
				</div>
			),
		},
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const registerClient = () => {
		console.log('aa');
	};

	return (
		<main className="flex h-screen gap-2 w-screen border-solid border-2 p-2">
			<Menu />
			<section className="bg-white rounded-lg flex-1 p-5 gap-8">
				<h1 className="font-light tracking-[1.5rem] text-5xl mb-8 uppercase">clientes</h1>
				<div className="flex flex-col gap-8">
					<div className="flex gap-4">
						<InputSearch />
						<div className="w-max">
							<Button
								text="Novo Cliente"
								icon
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-4">
						<table className="flex-1 rounded-xl shadow-[4px_4px_20px_#DADADA] overflow-hidden">
							<thead className="border-b border-[#DFDFDF]">
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map((header, index) => (
											<th
												className={`text-[#989898] px-4 py-2 ${
													index === 3
														? 'text-center w-[10%]'
														: index != 0
														? 'w-[15%] text-start'
														: 'text-start'
												} `}
												key={header.id}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map((row) => (
									<tr
										className="border-b border-[#DFDFDF]"
										key={row.id}
									>
										{row.getVisibleCells().map((cell, index) => (
											<td
												key={cell.id}
												className={`text-xl p-4 ${
													index === 3 ? 'text-center' : ''
												} `}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
			{openEdit && (
				<Sidebar
					title="Editar Cliente"
					isClose={() => setOpenEdit(false)}
				>
					<form
						onSubmit={registerClient}
						className="flex flex-col justify-between h-full"
					>
						<div className="flex flex-col gap-6">
							<Input
								label="Nome"
								type="text"
								placeholder="Ex: Natália Almeida"
								value={dataClient.name}
								onChange={registerClient}
							/>
							<Input
								label="Telefone"
								type="text"
								placeholder="(00) 00000-0000"
								value={dataClient.phone}
								onChange={registerClient}
							/>
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
		</main>
	);
};
