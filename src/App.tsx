import "./App.css";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getUsers(page, 2);
  }, [page]);

  interface IUser {
    id: number;
    name: string;
    email: string;
  }

  const [dataSource, setDataSource] = useState<IUser[]>();

  const getUsers = async (page: number, limit: number) => {
    const response = await axios.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`
    );
    setDataSource(response.data);
  };

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

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
      <div className="table__buttons">
        <Button onClick={() => setPage(page - 1)} disabled={!(page - 1)}>
          Previous
        </Button>
        <p>{page}</p>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </>
  );
}

export default App;
