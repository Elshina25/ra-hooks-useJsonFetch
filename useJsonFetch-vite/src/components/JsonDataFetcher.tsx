import React from "react";
import { useJsonFetch } from "../hooks/useJsonFetch";

interface IProps {
    url: string
}

export const JsonDataFetcher: React.FC<IProps> = ({ url }) => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    const [ data, loading, error ] = useJsonFetch(`${serverUrl}/${url}`, { method: 'GET' });

    // console.log(data)
    return (
        <div className="fetch-result">
          <h2>Получение данных по маршруту: {url}</h2>
          <div>Статус данных: {data.status}</div>
          {loading && <div>Loading...</div>}
          <div>Ошибка: {error ? error.message : "нет"}</div>
        </div>
      );
}