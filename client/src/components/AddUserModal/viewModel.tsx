import { Form } from "antd";
import { useCallback, useState } from "react";
import useUsersStore from "../../hooks/useUsersStore";
import { AddUserViewModelProps, User } from "./index.types";

const AddUserViewModel = ({ onCancel, success }: AddUserViewModelProps) => {
  const [loading, setLoading] = useState(false);
  const createUser = useUsersStore((state) => state.createUser);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    city: "",
    street: "",
    phone: "",
  });

  const handleSave = useCallback(
    async (onCancelCallback: () => void) => {
      try {
        setLoading(true);

        const values = await form.validateFields();
        const userData: User = {
          id: -1,
          name: values.name,
          email: values.email,
          gender: values.gender,
          address: {
            city: values.city,
            street: values.street,
          },
          phone: values.phone,
        };

        await createUser(userData);
        form.resetFields();
        success();
        onCancelCallback();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [form, formData]
  );

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      gender: "",
      city: "",
      street: "",
      phone: "",
    });
    form.resetFields();
  }, [form]);

  const handleCancelModal = useCallback(() => {
    resetForm();
    onCancel();
  }, []);

  return {
    form,
    loading,
    formData,
    setFormData,
    setLoading,
    createUser,
    handleSave: () => handleSave(onCancel),
    handleCancelModal,
  };
};

export default AddUserViewModel;
