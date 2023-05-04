import { Button, Table } from "antd";
import EditUserModal from "../EditUserModal";
import { TableComponentProps, User } from "./index.types";
import TableComponentViewModel from "./viewModel";
import styles from "./index.module.scss";
import AddUserModal from "../AddUserModal";

const TableComponent = ({ data }: TableComponentProps) => {
  const {
    columns,
    handleRowClick,
    modalVisible,
    handleCloseModal,
    user,
    handleAddUser,
    addUserModalVisible,
    handleCloseAddModal,
    contextHolder,
    successAdd,
    successEdit,
  } = TableComponentViewModel();

  return (
    <>
      {contextHolder}
      <div className={styles.actions}>
        <p>Users</p>
        <Button onClick={() => handleAddUser()}>Add User</Button>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        onRow={(user: User) => ({
          onDoubleClick: () => handleRowClick(user),
        })}
        rowKey={(user) => user.id}
      />
      <EditUserModal
        open={modalVisible}
        onCancel={handleCloseModal}
        user={user}
        success={successEdit}
      />
      <AddUserModal
        open={addUserModalVisible}
        onCancel={handleCloseAddModal}
        success={successAdd}
      />
    </>
  );
};

export default TableComponent;
