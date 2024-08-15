/* Dependencies */
import { ReactNode } from 'react';

type Props = { isCLosed: () => void; children?: ReactNode };

export const Modal = ({ isCLosed, children }: Props) => {
	return (
		<main className="fixed bg-[#0000008a] top-0 bottom-0 right-0 left-0 z-10">
			<section className="bg-white w-1/2 rounded-lg fixed top-1/2 left-1/2 p-[300px] translate-x-[-50%] translate-y-[-50%]">
				<button onClick={isCLosed}>Fechar</button>
				{children}
			</section>
		</main>
	);
};
