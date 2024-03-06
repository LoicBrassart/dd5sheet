type Props = {
  type: string;
  label: string;
  value: string | number;
};
export default function Input({ type, label, value }: Props) {
  return (
    <div className="relative m-4">
      <input
        type={type}
        name={label}
        placeholder={label}
        value={value}
        className="peer bg-transparent h-8 w-16 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
      />
      <label
        htmlFor={label}
        className="absolute left-0.5 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}
