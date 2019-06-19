import React, { useState, useCallback, useEffect } from 'react';
import { NavBar, Slider, Tabs, InputItem, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { createForm } from 'rc-form';
import PngIcon from '../../components/PngIcon';
import GoBack from '../../components/GoBack';
import BuyView from '../../components/BuyView';
import { Container, HeadBanner, TabWrapper, ComboWrap, SelectTicket, TicketItem } from './style';

const ListItem = List.Item;
const timeMap = { 0: '3个月', 1: '6个月', 2: '12个月', 3: '18个月', 4: '24个月' };
const timeMaps = [
  { title: '3个月', value: 3 },
  { title: '6个月', value: 6 },
  { title: '12个月', value: 12 },
  { title: '18个月', value: 18 },
  { title: '24个月', value: 24 },
];
const Telphone = props => {
  const [data, setData] = useState({});
  const [curTab, setCurTab] = useState(0);
  const [preCharge, setPreCharge] = useState(500);
  // const [prePay, setPrePay] = useState(500);

  const { getFieldProps, getFieldsValue } = props.form;

  const tabs = [{ title: '话费套餐' }, { title: '话费直充' }];

  const changeTab = useCallback(index => {
    setData({});
    setCurTab(index);
  }, []);

  const changeTime = useCallback(
    index => {
      let time = [3, 6, 12, 18, 24];
      setData({
        face: preCharge * time[index],
        pay: preCharge * time[index] * 0.94,
        id: 10,
        index,
      });
    },
    [preCharge]
  );

  useEffect(
    () => {
      changeTime(data.index);
    },
    [preCharge]
  );

  return (
    <Container>
      <NavBar
        mode="light"
        icon={<GoBack color="#333" />}
        rightContent={
          <Link to="/home">
            <PngIcon icon="question" width="20px" height="20px" />
          </Link>
        }
      >
        即时充值
      </NavBar>
      <HeadBanner>
        <div className="content">
          <InputItem {...getFieldProps('mobile')} placeholder="请输入手机号" type="phone">
            <PngIcon icon="mobile" width="32px" height="36px" />
          </InputItem>
          <Tabs.DefaultTabBar
            tabs={tabs}
            animated={true}
            activeTab={curTab}
            onTabClick={(tab, index) => changeTab(index)}
          />
        </div>
      </HeadBanner>
      <TabWrapper>
        <Tabs
          tabs={tabs}
          initialPage={curTab}
          page={curTab}
          onChange={(tab, index) => changeTab(index)}
        >
          <Combo
            history={props.history}
            preCharge={preCharge}
            setPreCharge={setPreCharge}
            changeTime={changeTime}
          />
          <TicketList setTicket={setData} ticket={data} />
        </Tabs>
      </TabWrapper>
      <BuyView data={data} />
    </Container>
  );
};

const Combo = props => {
  const { preCharge, setPreCharge, changeTime } = props;

  const changeVal = useCallback(
    val => {
      if (preCharge <= 0 && val < 0) return;
      setPreCharge(preCharge + val);
    },
    [preCharge]
  );

  const goSelectCoupon = useCallback(() => {
    props.history.push('/recharge/tel-coupon');
  }, []);

  return (
    <ComboWrap>
      <div className="header">选择充值套餐</div>
      <div className="pre-recharge">
        <div className="label">每月充值金额(元)</div>
        <div className="set-val">
          <PngIcon width="46px" height="46px" icon="minus" handleClick={() => changeVal(-100)} />
          <div className="val">{preCharge}</div>
          <PngIcon width="46px" height="46px" icon="plus" handleClick={() => changeVal(100)} />
        </div>
      </div>
      <div
        className="ratina-bd bd-t bd-b"
        onTouchMove={e => {
          e.stopPropagation();
        }}
      >
        <Slider
          defaultValue={0}
          min={0}
          max={4}
          step={1}
          marks={timeMap}
          onChange={index => changeTime(index)}
        />
      </div>
      <div className="result">
        优惠折扣
        <span>9.4</span>折 实际为您节约资金
        <span>180.00</span>元
      </div>
      <div className="reminder">* 1个月套餐将在下月当天充值</div>
      <ListItem extra="6个月" arrow="horizontal" onClick={goSelectCoupon}>
        充值计划
      </ListItem>
      <ListItem extra="0 张" arrow="horizontal" onClick={goSelectCoupon}>
        优惠券
      </ListItem>
    </ComboWrap>
  );
};

const TicketList = props => {
  const list = [
    {
      face: 100,
      pay: 99.5,
      id: 0,
    },
    {
      face: 200,
      pay: 199,
      id: 1,
    },
    {
      face: 500,
      pay: 497.5,
      id: 2,
    },
    {
      face: 800,
      pay: 796,
      id: 3,
    },
    {
      face: 1000,
      pay: 995,
      id: 4,
    },
    {
      face: '+自定义',
      id: -1,
    },
  ];
  return (
    <SelectTicket>
      <div className="title">选择充值金额</div>
      <div className="content">
        {list.map(item => (
          <TicketItem
            key={item.id}
            onClick={() => props.setTicket(item)}
            className={props.ticket.id === item.id ? 'selected' : ''}
          >
            <div className="face">{item.face}</div>
            {item.pay ? (
              <div className="pay">
                支付
                {item.pay}元
              </div>
            ) : null}
          </TicketItem>
        ))}
      </div>
    </SelectTicket>
  );
};

export default createForm()(Telphone);
