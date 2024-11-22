import React, { useState, useRef, useEffect } from "react";

interface Option {
  id: number;
  label: string;
}

interface DropdownProps {
  options?: Option[];
  defaultValue?: Option;
  onChange?: (option: Option) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [
    { id: 1, label: "Function: 1" },
    { id: 2, label: "Function: 2" },
    { id: 3, label: "Function: 3" },
  ],
  defaultValue,
  onChange,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultValue || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };
  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        className={`custom-dropdown--trigger ${disabled ? "disabled" : ""}`}
        onClick={handleToggle}
        type="button"
      >
        <span
          className={`custom-dropdown${disabled ? "--disabled" : "--selected"}`}
        >
          {selectedOption ? selectedOption.label : ""}
        </span>
        <svg
          className={`custom-dropdown--arrow ${
            isOpen ? "custom-dropdown--arrow--open" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10 l 5 5 5 -5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="custom-dropdown--menu">
          <ul className="custom-dropdown--list">
            {options.map((option) => (
              <li
                key={option.id}
                className="custom-dropdown--option"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
