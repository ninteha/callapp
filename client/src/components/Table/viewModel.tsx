import { ColumnsType } from "antd/es/table";
import { User } from "./index.types";
import { Button, Popconfirm, Tooltip, message } from "antd";
import { DeleteFilled, QuestionCircleOutlined } from "@ant-design/icons";
import useUsersStore from "../../hooks/useUsersStore";
import { useCallback, useMemo, useState } from "react";

const TableComponentViewModel = () => {
  const deleteUser = useUsersStore((state) => state.deleteUser);

  const [modalVisible, setModalVisible] = useState(false);
  const [addUserModalVisible, setAddUserModalVisible] = useState(false);

  const [user, setUser] = useState<User | undefined>();

  const [messageApi, contextHolder] = message.useMessage();

  const successEdit = () => {
    messageApi.open({
      type: "success",
      content: "Successfully edited user!",
    });
  };

  const successAdd = () => {
    messageApi.open({
      type: "success",
      content: "Successfully added user!",
    });
  };

  const successDelete = () => {
    messageApi.open({
      type: "success",
      content: "Successfully deleted user!",
    });
  };

  const handleRowClick = useCallback((user: User) => {
    setUser(user);
    setModalVisible(true);
  }, []);

  const handleAddUser = useCallback(() => {
    setAddUserModalVisible(true);
  }, []);

  const handleCloseAddModal = useCallback(() => {
    setAddUserModalVisible(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const columns: ColumnsType<User> = useMemo(() => {
    return [
      {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend"],
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Gender",
        dataIndex: "gender",
      },
      {
        title: "Address",
        dataIndex: "address",
        render: (address) => (
          <>
            <div>{address.city}</div>
            <div>{address.street}</div>
          </>
        ),
      },
      {
        title: "Phone",
        dataIndex: "phone",
      },
      {
        title: "Actions",
        render: (record) => (
          <>
            <Tooltip title="Remove User">
              <Popconfirm
                title="Delete the user"
                description="Are you sure to delete this user?"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                onConfirm={() => {
                  deleteUser(record.id);
                  successDelete();
                }}
              >
                <Button
                  type="primary"
                  shape="circle"
                  danger
                  icon={<DeleteFilled />}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                />
              </Popconfirm>
            </Tooltip>
          </>
        ),
      },
    ];
  }, []);

  return {
    columns,
    handleRowClick,
    modalVisible,
    handleCloseModal,
    user,
    handleAddUser,
    addUserModalVisible,
    handleCloseAddModal,
    contextHolder,
    successEdit,
    successAdd,
  };
};

export default TableComponentViewModel;
