type SearchFormProps = {
  searchInput: string;
  setSearchInput: (value: string) => void;
};

export default function SearchForm({
  searchInput,
  setSearchInput,
}: SearchFormProps) {
  return (
    <form
      onSubmit={e => {
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
        onChange={e => {
          setSearchInput(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
