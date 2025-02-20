# 📦 React-smatov-form

react-smatov-form — это динамический конструктор форм для React с использованием Ant Design. Позволяет создавать формы на основе JSON-конфигурации, а также поддерживает кастомные компоненты.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

## 🚀 Установка

Установите библиотеку с помощью `npm` или `pnpm`:

```bash
npm install react-smatov-form
# или
pnpm add react-smatov-form
```

### 🔧 Использование

Импорт и базовый пример

```js
import React from "react";
import { DynamicForm } from "react-smatov-form";

const formConfig = {
  fields: [
    { name: "count", label: "Количество", type: "number", required: true },
    { name: "price", label: "Цена", type: "number", required: true },
    { name: "total", label: "Итоговая сумма", type: "number", readOnly: true },
  ],
  autoCalculate: {
    total: ({ count, price }) => (count && price ? count * price : 0),
  },
};

const App = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return <DynamicForm config={formConfig} onSubmit={handleSubmit} />;
};

export default App;
```

#### 🛠 Конфигурация `config`

**🔹 fields (обязательное поле)**

Список полей формы.
```js
fields: [
  { name: "username", label: "Имя", type: "text", required: true },
  { name: "age", label: "Возраст", type: "number" },
  { name: "agree", label: "Согласие", type: "checkbox" }
]
```
| Свойство         | Тип                                    | Описание                          |
|------------------|--------------------------------------|----------------------------------|
| `name`          | `string`                             | Уникальное имя поля              |
| `label`         | `string`                             | Заголовок поля                   |
| `type`          | `"text" \| "number" \| "checkbox"`   | Тип ввода                        |
| `required`      | `boolean`                            | Обязательное ли поле             |
| `componentProps`| `object`                             | Пропсы, передаваемые в компонент |


**🔹 autoCalculate**

Позволяет задать формулы для автоматического расчета значений.
```js
autoCalculate: {
  total: ({ count, price }) => count * price
}
```

**🔹 customComponents**

Позволяет использовать собственные компоненты.
```js
import { InputNumber } from "antd";

const MyCustomInput = (props) => <InputNumber {...props} />;

const config = {
  fields: [
    { name: "custom", label: "Моё поле", type: "custom", component: "MyCustomInput" }
  ],
  customComponents: { MyCustomInput }
};

```

##### 📤 Обратная связь

Если у вас есть вопросы или предложения пишит, создавайте issues или pull requests! 🚀

