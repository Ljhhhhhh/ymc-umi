import React, { useState } from 'react';
import { NavBar, InputItem, PickerView, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import GoBack from '@/components/GoBack';
import DefBtn from '@/components/DefBtn';
import PngIcon from '../../components/PngIcon';
import { FormContent, RadioWrap, InputLabel, PickerWrap } from './style';

const CarForm = props => {
  const { getFieldProps, validateFields } = props.form;
  const [carType, setCarType] = useState(0);
  const [isShowProvice, showProvice] = useState(false);
  const [Provice, setProvice] = useState(['浙']);

  const submit = () => {
    console.log('submit');
  };

  return (
    <div className="container gray">
      <NavBar className="ratina-bd bd-b" mode="light" icon={<GoBack color="#333" />}>
        添加车辆
      </NavBar>
      <FormContent>
        <RadioGroup carType={carType} setCarType={setCarType} />
        <InputItem
          {...getFieldProps('licence', {
            rules: [{ required: true, message: '车牌号必填' }],
          })}
          placeholder="请输入车牌号"
          type="text"
          labelNumber={1}
        >
          <InputLabel>
            <PngIcon width="44px" height="44px" icon="car/license" />
            <span onClick={() => showProvice(!isShowProvice)}>{Provice}</span>
          </InputLabel>
        </InputItem>
        <InputItem
          {...getFieldProps('vin', {
            rules: [{ required: true, message: '车架号必填' }],
          })}
          placeholder="请输入车辆识别代号（车架号）"
          type="text"
          extra={<PngIcon width="28px" height="28px" icon="car/p" />}
          labelNumber={2}
        >
          <PngIcon width="44px" height="44px" icon="car/vin" />
        </InputItem>
        <InputItem
          {...getFieldProps('engine', {
            rules: [{ required: true, message: '发动机号必填' }],
          })}
          placeholder="请输入发动机号"
          type="text"
          extra={<PngIcon width="28px" height="28px" icon="car/p" />}
          labelNumber={2}
        >
          <PngIcon width="44px" height="44px" icon="car/engine" />
        </InputItem>
      </FormContent>
      <DefBtn content="确认添加" handleClick={submit} />
      {isShowProvice ? (
        <ProvicePicker Provice={Provice} setProvice={setProvice} showProvice={showProvice} />
      ) : null}
    </div>
  );
};

export default createForm()(CarForm);

const RadioGroup = props => {
  const { carType, setCarType } = props;
  const types = ['小型车', '大型车'];

  return (
    <RadioWrap>
      {types.map((item, index) => {
        const className = index === carType ? 'radio checked' : 'radio';
        return (
          <div
            className={className}
            key={item}
            onClick={() => {
              setCarType(index);
            }}
          >
            <i />
            <span>{item}</span>
          </div>
        );
      })}
    </RadioWrap>
  );
};

const ProvicePicker = props => {
  const { setProvice, Provice, showProvice } = props;
  const proviceListArray = [
    '津',
    '冀',
    '晋',
    '蒙',
    '辽',
    '吉',
    '黑',
    '沪',
    '苏',
    '浙',
    '皖',
    '闽',
    '赣',
    '鲁',
    '豫',
    '鄂',
    '湘',
    '粤',
    '桂',
    '琼',
    '渝',
    '川',
    '贵',
    '云',
    '藏',
    '陕',
    '甘',
    '青',
    '宁',
    '新',
    '港',
    '澳',
  ];
  const proviceList = proviceListArray.map(item => ({
    label: item,
    value: item,
  }));

  return (
    <PickerWrap>
      <div className="picker-head ratina-bd bd-b">
        <span
          className="cancel"
          onClick={() => {
            showProvice(false);
          }}
        >
          取消
        </span>
        <span
          className="ok"
          onClick={() => {
            showProvice(false);
          }}
        >
          确认
        </span>
      </div>
      <PickerView
        onChange={val => {
          setProvice(val);
        }}
        value={Provice}
        data={proviceList}
        cascade={false}
      />
    </PickerWrap>
  );
};
