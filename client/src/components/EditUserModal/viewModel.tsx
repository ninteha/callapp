import { useCallback, useEffect, useState } from "react";
import useUsersStore from "../../hooks/useUsersStore";
import { Form } from "antd";
import { EditUserModalViewModelProps } from "./index.types";

const EditUserModalViewModel = ({
  user,
  onCancel,
  success,
}: EditUserModalViewModelProps) => {
  const editUser = useUsersStore((state) => state.editUser);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue(user);
    form.setFieldsValue(user?.address);
  }, [user, open]);

  console.log(success);

  const handleSave = useCallback(async () => {
    try {
      setLoading(true);
      if (!user) return;
      const values = await form.validateFields();
      const updatedUser = {
        ...user,
        ...values,
        address: {
          city: values.city,
          street: values.street,
        },
      };

      await editUser(user.id, updatedUser);
      success();
      onCancel();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [user, form]);

  return { handleSave, loading, form };
};

export default EditUserModalViewModel;
