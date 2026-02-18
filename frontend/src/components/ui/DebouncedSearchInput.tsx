import React, { useEffect, useState } from "react";

type Props = {
  value: string;
  onChange: (next: string) => void;
  onDebounce?: (v: string) => void;
  delay?: number;
  placeholder?: string;
  type?: "text" | "search";
  className?: string;
};

const DebouncedSearchInput = ({
  value,
  onChange,
  onDebounce,
  delay,
  placeholder,
  type,
  className,
}: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const v = value.trim();
      setDebouncedValue(v);
      onDebounce?.(v);
    }, delay);
    return () => window.clearTimeout(id);
  }, [value, delay, onDebounce]);

  useEffect(() => {
    setDebouncedValue(value);
  }, [value]);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default DebouncedSearchInput;
