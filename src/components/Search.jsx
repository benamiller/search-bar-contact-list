import { useState } from "react";

function Search() {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <div>
      <p>You searched for {usersSearch}</p>
    </div>
  );
}

export default Search;
