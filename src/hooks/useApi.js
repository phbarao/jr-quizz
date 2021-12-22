import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://opentdb.com';

export function useApi({ url }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadData() {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }

    loadData();
  }, [url]);

  return { response, error, loading };
}
