import type { FormEvent } from "react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  const handleChange = (evt: FormEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value.toLowerCase().trim();
    onChange(value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
