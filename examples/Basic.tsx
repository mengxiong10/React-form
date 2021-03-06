import React from 'react';
import { Input, Radio, Button, InputNumber } from 'antd';
import { DisplayState } from './helper';
import { useFormx, Formx, FormxItem } from '../src/index';
import '../src/index.scss';

type LabelPosition = 'right' | 'left' | 'top';

const rules = {
  name: { required: true, message: 'required', trigger: 'blur' },
  description: { required: true, message: 'required', trigger: 'blur' }
};

const initialValue = {
  name: 'easy-formx',
  description: 'a very easy react hooks form component',
  labelPosition: 'right',
  labelWidth: 100
};

export default function Basic() {
  const { bindFormx, value, validate, resetFields } = useFormx<typeof initialValue>(
    initialValue,
    rules
  );

  const submit = () => {
    validate().then((data) => {
      console.log(data);
    });
  };

  const positionOptions = ['left', 'right', 'top'];

  return (
    <div>
      <Formx labelWidth={value.labelWidth} labelPosition={value.labelPosition as LabelPosition}>
        <FormxItem label="Name" {...bindFormx('name')}>
          <Input />
        </FormxItem>
        <FormxItem label="Description" {...bindFormx('description')}>
          <Input />
        </FormxItem>
        <FormxItem label="LabelPosition" {...bindFormx('labelPosition')}>
          <Radio.Group buttonStyle="solid">
            {positionOptions.map((v) => (
              <Radio.Button key={v} value={v}>
                {v}
              </Radio.Button>
            ))}
          </Radio.Group>
        </FormxItem>
        <FormxItem label="LabelWidth" {...bindFormx('labelWidth')}>
          <InputNumber min={100} max={200} />
          <span style={{ marginLeft: 10 }}>(min: 100, max: 200)</span>
        </FormxItem>
        <FormxItem>
          <Button onClick={resetFields}>reset</Button>
          <Button type="primary" onClick={submit} style={{ marginLeft: 10 }}>
            submit
          </Button>
        </FormxItem>
      </Formx>
      <DisplayState {...value} />
    </div>
  );
}
