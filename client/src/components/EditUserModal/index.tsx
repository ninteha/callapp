import { Modal, Form, Input, Select } from "antd";
import { EditUserModalProps } from "./index.types";
import EditUserModalViewModel from "./viewModel";

const EditUserModal = ({
  open,
  onCancel,
  user,
  success,
}: EditUserModalProps) => {
  const { handleSave, loading, form } = EditUserModalViewModel({
    user,
    onCancel,
    success,
  });

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={handleSave}
      confirmLoading={loading}
      title="Edit User"
      okText="Save"
      destroyOnClose={true}
      forceRender
    >
      <Form form={form} initialValues={user} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter an email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select a gender" }]}
        >
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Address">
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Please enter a city" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name="street"
            rules={[{ required: true, message: "Please enter a street" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginLeft: "16px",
            }}
          >
            <Input placeholder="Street" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please enter a phone number" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
