import { Modal, Input, Select, Form } from "antd";
import AddUserViewModel from "./viewModel";
import { AddUserModalProps } from "./index.types";

const { Option } = Select;

const AddUserModal = ({ open, onCancel, success }: AddUserModalProps) => {
  const {
    form,
    formData,
    setFormData,
    handleSave,
    handleCancelModal,
    loading,
  } = AddUserViewModel({ onCancel, success });

  return (
    <Modal
      open={open}
      title="Add User"
      okText="Save"
      confirmLoading={loading}
      onCancel={handleCancelModal}
      onOk={() => handleSave()}
      destroyOnClose={true}
      forceRender
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter an email" }]}
        >
          <Input
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select a gender" }]}
        >
          <Select
            placeholder="Gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e })}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Address">
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Please enter a city" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
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
            <Input
              placeholder="Street"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please enter a phone number" }]}
        >
          <Input
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
