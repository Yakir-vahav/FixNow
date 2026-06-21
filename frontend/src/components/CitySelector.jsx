import { useEffect, useMemo, useRef, useState } from "react";

function CitySelector({ options = [], value, onChange, placeholder = "בחר עיר" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = useMemo(() => {
    const query = searchText.trim();

    if (!query) {
      return options;
    }

    return options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  }, [options, searchText]);

  return (
    <div className="position-relative" ref={wrapperRef}>
      <button
        type="button"
        className="form-select text-end"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ textAlign: "right", cursor: "pointer" }}
      >
        {value || placeholder}
      </button>

      {isOpen && (
        <div
          className="dropdown-menu show w-100 mt-1 city-selector-menu"
          style={{
            maxHeight: "260px",
            overflowY: "auto",
            display: "block",
            textAlign: "right",
            scrollbarWidth: "thin",
            scrollbarColor: "#d0d7de transparent",
          }}
        >
          <div className="px-2 pt-2">
            <input
              type="text"
              className="form-control"
              placeholder="חפש עיר"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
              style={{ textAlign: "right" }}
            />
          </div>

          <div className="mt-2">
            <button
              type="button"
              className="dropdown-item"
              onMouseDown={() => {
                onChange("");
                setIsOpen(false);
              }}
            >
              {placeholder}
            </button>
            {filteredOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="dropdown-item"
                onMouseDown={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CitySelector;
