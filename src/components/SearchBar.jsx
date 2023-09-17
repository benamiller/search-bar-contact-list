function SearchBar({ searchValue, searchValueFunction }) {
  return (
    <div className="w-full mt-6 md:w-1/2 lg:max-w-md m-auto">
      <form
        className="flex px-4 border-2 border-gray-300 rounded-md justify-between  hover:shadow-lg focus:shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchBar" className="sr-only">
          Search Bar
        </label>
        <input
          id="searchBar"
          type="text"
          name="searchBar"
          placeholder="Search Contacts"
          className="py-2 flex-auto focus:outline-none"
          value={searchValue}
          onChange={(e) => searchValueFunction(e.target.value)}
        />

        <label htmlFor="searchSubmit" className="sr-only">
          Submit
        </label>
        <button
          id="searchSubmit"
          aria-label="Click to submit search"
          type="submit"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            className="w-8 h-8 text-gray-500 h-4 w-4 fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
