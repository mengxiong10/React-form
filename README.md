# easy-formx

[中文版](https://github.com/mengxiong10/easy-formx/blob/master/README.zh-CN.md)

> a very easy react form component.

<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
</a>

## Demo

<https://mengxiong10.github.io/easy-formx/index.html>

## Install

```bash
$ npm install easy-formx --save
```

## Useage

```tsx
import { useFormx, Formx, FormxItem } from '../src';

const rules = {
  name: { required: true, message: 'required', trigger: 'blur' },
  description: { required: true, message: 'required', trigger: 'blur' }
};

const initialData = { name: 'name', description: 'description', number: 22 };

export default function Basic() {
  const { bindFormx, data, validate } = useFormx(initialData);

  const submit = () => {
    validate(rules).then((res) => {
      console.log(res);
    });
  };

  return (
    <Formx labelWidth="100px" labelPosition={position} rules={rules}>
      <FormxItem label="Name" {...bindFormx('name')}>
        <Input />
      </FormxItem>
      <FormxItem label="Description" {...bindFormx('description')}>
        <Input />
      </FormxItem>
      <FormxItem label="Number" {...bindFormx('number')}>
        <InputNumber min={0} max={100} />
        <span style={{ marginLeft: 10 }}>(min: 0, max: 100)</span>
      </FormxItem>
      <FormxItem>
        <Button type="primary" onClick={submit}>
          submit
        </Button>
      </FormxItem>
    </Formx>
  );
}
```

## API

### useFormx

```js
const { bindFormx, value, validate, setFieldsValue, setFieldsError } = useFormx(initialValue);
```

#### bindFormx

A function that returns the appropriate props that can be spread on the `FormxItem`.

After bind `FormxItem` by bindFormx, value(or other property defined by valuePropName) onChange(or other property defined by trigger) props will be added to first child comoponent.

#### setFieldsValue

```js
setFieldsValue({ name: 'name', age: 'age' });
```

Set the value of fields

#### validate

```js
validate().then();
```

validate all fields

### Formx

<!-- prettier-ignore-start -->

| Prop          | Description       | Type                       | Default  |
| ------------- | ----------------- | -------------------------- | -------- |
| labelPosition | position of label | 'right' \| 'left' \| 'top' | 'right' |
| labelWidth    | all Form items width will inherit from this | string\|number | - |
| labelSuffix   | suffix of the label | `string` | ':' |
| rules         | validation rules of form | `object`| - |

<!-- prettier-ignore-end -->

### FormxItem

| Prop          | Description                               | Type     | Default    |
| ------------- | ----------------------------------------- | -------- | ---------- |
| label         | The label text                            | `string` | -          |
| labelStyle    | The label style                           | `object` | -          |
| trigger       | prop of listen children node value change | `string` | 'onChange' |
| valuePropName | prop of children node value               | `string` | 'value'    |

## License

[MIT](https://github.com/mengxiong10/easy-formx/blob/master/LICENSE)

Copyright (c) 2018-present xiemengxiong