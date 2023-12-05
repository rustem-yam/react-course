import "./App.css";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "./app.interface";

const URL: string = "https://jsonplaceholder.typicode.com/users";
const LIMIT_TOPIC: number = 2;

const columns: ColumnsType<IUser> = [
  {
    key: "id",
    title: "id",
    dataIndex: "id",
  },
  {
    key: "name",
    title: "name",
    dataIndex: "name",
  },
  {
    key: "email",
    title: "email",
    dataIndex: "email",
  },
];

function App() {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getUsers(page, LIMIT_TOPIC);
  }, [page]);

  const [dataSource, setDataSource] = useState<IUser[]>();

  const getUsers = async (page: number, limit: number) => {
    const response = await axios.get<IUser[]>(
      `${URL}?_limit=${limit}&_page=${page}`
    );
    setDataSource(response.data);
  };

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
      <div className="table__buttons">
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={!(page - 1)}
        >
          Previous
        </Button>
        <p>{page}</p>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </div>
    </>
  );
}

export default App;
