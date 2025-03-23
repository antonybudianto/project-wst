import SkipCard from "../components/SkipCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useFetchSkips from "../hooks/useFetchSkips";
import { Skip } from "../@types/data";

function SelectSkipPage() {
  const { skips, loading } = useFetchSkips();

  const handleSelect = (data: Skip) => {
    // @TODO Implement this function
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Choose your skip size
          </h1>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
            {skips.length} items found
          </span>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map((item: Skip) => (
              <SkipCard key={item.id} data={item} onSelect={handleSelect} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectSkipPage;
