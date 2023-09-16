function SearchBar() {
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
        />

        <label htmlFor="searchSubmit" className="sr-only">
          Submit
        </label>
        <button
          id="searchSubmit"
          aria-label="Click to submit search"
          type="submit"
        ></button>
      </form>
    </div>
  );
}

export default SearchBar;
