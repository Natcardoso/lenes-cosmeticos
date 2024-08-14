import { Eye, SquarePen, Trash2 } from 'lucide-react';
import { Menu } from '../../components/Menu';
import {
	useReactTable,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';

type Person = {
	name: string;
	phone: string;
	birthday: string;
};

const data: Person[] = [
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

export const Customers = () => {
	const [openEdit, setOpenEdit] = useState(false);

	const handleView = (person: Person) => {
		console.log('Remover:', person);
	};

	const handleEdit = (person: Person) => {
		setOpenEdit(true);
		console.log('Remover:', person);
	};

	const handleRemove = (person: Person) => {
		console.log('Remover:', person);
	};

	const columns: ColumnDef<Person>[] = [
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

	return (
		<div className="flex h-screen gap-2 w-screen border-solid border-2 p-2">
			{openEdit && <Sidebar isClose={() => setOpenEdit(false)} />}

			<Menu />
			<div className="bg-white rounded-lg flex-1 p-5">
				<h1 className="font-light tracking-[1.5rem] text-5xl mb-8 uppercase">clientes</h1>
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
		</div>
	);
};
