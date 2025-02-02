import { useSearchTextContext } from "../lib/hooks";

export default function SearchForm() {
  const { searchInput, handleChangeSearchText } = useSearchTextContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchInput}
        onChange={(e) => {
          handleChangeSearchText(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
