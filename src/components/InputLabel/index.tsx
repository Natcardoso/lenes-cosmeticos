type Props = {
	label: string;
	placeholder: string;
	type: 'text' | 'number' | 'date';
	value: string | number;
	onChange: () => void;
};

export const InputLabel = ({ type, placeholder, label, value, onChange }: Props) => {
	return (
		<div className="flex flex-col gap-1">
			<span>{label}</span>
			<input
				className="px-4 py-2 rounded-lg text-[#9E9E9E] bg-[#F3F3F3]"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
