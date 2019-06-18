import React, { useState, useEffect } from 'react';
import { NavBar } from 'antd-mobile';
import GoBack from '../../components/GoBack';
import { Container, UseLess, CouponList, CouponItem } from './style';

const Coupon = props => {
  const [couponList, setCouponList] = useState([]);

  useEffect(() => {
    const list = [
      {
        price: 30,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 2,
      },
      {
        price: 10,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 1,
      },
      {
        price: 20,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 3,
      },
      {
        price: 300,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 4,
      },
      {
        price: 50,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 5,
      },
      {
        price: 30,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 12,
      },
      {
        price: 10,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 11,
      },
      {
        price: 20,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 13,
      },
      {
        price: 300,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 14,
      },
      {
        price: 50,
        title: '加油套餐15元优惠券',
        time: '加油套餐≥6月',
        limit: '0.00',
        exp: '2019.05.08',
        id: 15,
      },
    ];
    setCouponList(list);
  }, []);

  return (
    <Container>
      <NavBar mode="light" icon={<GoBack color="#333" />} rightContent={<UseLess>不使用</UseLess>}>
        优惠券
      </NavBar>
      <CouponList>
        {couponList.map(item => (
          <CouponItem key={item.id}>
            <div className="head">
              <div>¥{item.price}</div>
              <p>
                满{item.limit}
                元使用
              </p>
            </div>
            <div className="desc">
              <div className="name">{item.title}</div>
              <div className="time">{item.time}</div>
              <div className="exp">有效期至: {item.exp}</div>
            </div>
            <div className="btn">立即使用</div>
          </CouponItem>
        ))}
      </CouponList>
    </Container>
  );
};

export default Coupon;
