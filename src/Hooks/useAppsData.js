import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true)
    axios
      .get("../AppData.json")
      .then((res) => setAppsData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { appsData, loading, error };
};

export default useAppsData;
