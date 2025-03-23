import { useEffect, useState } from "react";
import { Skip } from "../@types/data";
import { API_BASE_URL } from "../constants/endpoint";

function useFetchSkips() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/skips/by-location?postcode=NR32&area=Lowestoft`
        );
        const data = await res.json();
        setSkips(data);
        setLoading(false);
      } catch (e: unknown) {
        console.error(e);
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, loading };
}

export default useFetchSkips;
