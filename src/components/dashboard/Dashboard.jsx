import { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import ShowList from "../showlist/ShowList";
import ShowModal from "../showmodal/ShowModal";
import { searchShows } from "../../services/api";

function Dashboard() {
  const [results, setResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState("");
  const [resetId, setResetId] = useState(0); 

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError("");
      setHasSearched(true);
      setQuery(query);
      const data = await searchShows(query);
      setResults(data);
    } catch (error) {
      console.error("Error fetching shows:", error);
      setError("Failed to fetch shows. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const handleHeaderClick = () => {
    setResults([]);
    setSelectedShow(null);
    setLoading(false);
    setError(null);
    setHasSearched(false);
    setQuery("");
    setResetId((prev) => prev + 1);
  };
  
  return (
    <div>
     <h1 className="header" onClick={handleHeaderClick}>
        TV Shows Search
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <ShowList
        results={results}
        hasSearched={hasSearched}
        onSelectShow={(show) => setSelectedShow(show)}
        searchQuery={query}
      />

      {selectedShow && (
        <ShowModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}

export default Dashboard;
