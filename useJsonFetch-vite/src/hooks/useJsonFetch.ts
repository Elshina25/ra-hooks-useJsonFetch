import React, { useEffect, useState } from "react";

export const useJsonFetch = (url: string, opts?: {}): [data: {status?: string}, loading: boolean, error: {message: string} | null] => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{message: string} | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await fetch(url, opts);

                if (!response.ok) {
                    throw new Error('Response failed!');
                }

                const data = await response.json();
                setData(data);
                setError(null);
            } catch(err) {
                let message;
                if (err instanceof Error) {
                    message = err.message;
                } else {
                    message = String(err);
                }
                setError({message});
            } finally {
                setLoading(false);
            }

            fetchData();
        }
    }, [url, opts]);

    return [data, loading, error];
}