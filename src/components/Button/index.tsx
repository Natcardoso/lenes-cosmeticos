import { useState } from 'react';
import { Plus } from 'lucide-react';

import { Modal } from '../Modal';
import { InputSearch } from '../InputSearch';

type Props = { icone?: boolean; text: string };

export const Button = ({ icone, text }: Props) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<button
				className="flex rounded-lg bg-[#303030] px-4 py-2 text-white gap-2 text-2xl font-bold"
				onClick={() => setOpenModal(!openModal)}
			>
				{icone && <Plus size={32} />}
				<span>{text}</span>
			</button>

			<Modal isOpen={openModal}>
				<span>sasass</span>
				<InputSearch />
			</Modal>
		</>
	);
};
