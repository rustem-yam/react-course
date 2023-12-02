import "./App.css";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

function App() {
  interface IUser {
    key: number;
    id: number;
    name: string;
    email: string;
  }

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

  const data: IUser[] = [
    {
      key: 0,
      id: 0,
      name: "Jack",
      email: "example@ex.com",
    },
    {
      key: 1,
      id: 1,
      name: "Ann",
      email: "test@ex.com",
    },
    {
      key: 2,
      id: 2,
      name: "George",
      email: "hello@ex.com",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default App;
