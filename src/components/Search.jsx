import { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import Contact from './Contact';

function Search() {
  const [usersSearch, setUsersSearch] = useState("");
  const [contactData, setContactData] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getContactData();
  }, []);
  
  async function getContactData() {
    const response = await fetch("http://contactlist.us-east-1.elasticbeanstalk.com/contacts");
    const data = await response.json();
    setContactData(data);
  }

  function filterContactData(searchTerm) {
    setUserHasSearched(true);
    setUsersSearch(searchTerm);

    let filteredResults;

    if (searchTerm == "") {
      filteredResults = [];
      setUserHasSearched(false);
    } else {
      filteredResults = contactData.filter((contact) => {
        return (
          contact.firstName.includes(searchTerm) ||
          contact.lastName.includes(searchTerm)
        )
      })
    }

    setSearchResults(filteredResults);
  }

  return (
    <div>
      <SearchBar
        searchValue={usersSearch}
        searchValueFunction={filterContactData}
      />
      <section className="flex justify-center my-4">
        {userHasSearched
          ? (
              <>
                <div 
                  className={searchResults.length > 0
                    ? "hidden"
                    : "bg-red-100 border border-red-400 text-red-700 d:w-2/5 lg:max-w-md px-4 py-3 rounded-md"}
                  role="alert"
                >
                  <p className="text-center">
                    <strong>Sorry!</strong> There are no contacts with the name of{" "}
                    <strong>{usersSearch}</strong>.
                  </p>
                </div>
                <div
                  className={
                    searchResults.length > 0
                      ? "grid grid-cols-3 gap-2 place-items-center"
                      : "hidden" 
                  }
                >
                  {searchResults.map((contact) => {
                    return (
                      <Contact 
                        key={contact.contactId}
                        name={`${contact.firstName} ${contact.lastName}`}
                        telNumber={contact.phone}
                        email={contact.email}
                      />
                    );
                  })}
                </div>
              </>
            )
          : (
              <div className="grid md:grid-cols-3 gap-2 place-items-center">
                {contactData.map((contact) => {
                  return (
                    <Contact 
                      key={contact.contactId}
                      name={`${contact.firstName} ${contact.lastName}`}
                      telNumber={contact.phone}
                      email={contact.email}
                    />
                  );
                })}
              </div>
            )
        }
      </section>
    </div>
  );
}

export default Search;
