import { CalendarDays } from 'lucide-react';

export const InputDate = () => {
	return (
		<div className="flex items-center gap-4 px-4 py-2 rounded-lg text-[#9E9E9E] bg-[#F3F3F3]">
			<CalendarDays />
			<input
				className="border-none text-[#9E9E9E] bg-[#F3F3F3] outline-none"
				type="date"
			/>
		</div>
	);
};
