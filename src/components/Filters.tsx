import ReactSelect from "react-select";

interface FilterProps {
  options: { value: string; label: string }[];
  selectedOption: { value: string; label: string } | null;
  setSelectedOption: (option: { value: string; label: string } | null) => void;
  label: string;
}

export default function Filters({
  options,
  selectedOption,
  setSelectedOption,
  label,
}: FilterProps) {
  return (
    <div className="flex items-center">
      <h2 className="w-20 text-sm leading-4">{label}:</h2>
      <ReactSelect
        options={options}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
      />
    </div>
  );
}
