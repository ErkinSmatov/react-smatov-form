import React from "react";
import { Form, Input, InputNumber, Select, DatePicker, Button } from "antd";

type FieldType = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  componentProps?: Record<string, any>;
  calculate?: (values: any) => number;
};

type FormConfig = {
  fields: FieldType[];
  onSubmit: (values: any) => void;
  components?: Record<string, React.ElementType>;
};

const defaultComponents: Record<string, React.ElementType> = {
  input: Input,
  number: InputNumber,
  select: Select,
  date: DatePicker
};

const DynamicForm: React.FC<FormConfig> = ({ fields, onSubmit, components = {} }) => {
  const [form] = Form.useForm();
  const mergedComponents = { ...defaultComponents, ...components };

  return (
    <Form form={form} onFinish={onSubmit} layout="vertical">
      {fields.map(({ name, label, type, required, options, componentProps }) => {
        const Component = mergedComponents[type] || Input;
        return (
          <Form.Item
            key={name}
            name={name}
            label={label}
            rules={required ? [{ required: true, message: "Обязательно!" }] : []}
          >
            {type === "select" ? (
              <Component {...componentProps}>
                {options?.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Component>
            ) : (
              <Component {...componentProps} />
            )}
          </Form.Item>
        );
      })}
      <Button type="primary" htmlType="submit">Отправить</Button>
    </Form>
  );
};

export default DynamicForm;
