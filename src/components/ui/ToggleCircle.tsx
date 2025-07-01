// ToggleCircle.tsx
type Props = {
  checked: boolean;
  onChange: (newState: boolean) => void;
};

export default function ToggleCircle(props: Props) {
  const { checked, onChange } = props;

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex cursor-pointer items-center gap-2 focus:outline-none"
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${checked ? "border-green-500" : "border-gray-400"} `}
      >
        {checked && <span className="h-3 w-3 rounded-full bg-green-500" />}
      </span>
    </button>
  );
}
