import React, { useState, useEffect } from 'react';
import { NavBar } from 'antd-mobile';
import GoBack from '../../components/GoBack';
import { Container, UseLess, CouponList, CouponTelItem } from './style';

const Coupon = props => {
  const [couponList, setCouponList] = useState([]);

  useEffect(() => {
    const list = [
      {
        price: 30,
        title: '魅力值大礼包',
        tag: '新人专属',
        id: 2,
        more: '魅力值增长8分',
        isHot: true,
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
          <CouponTelItem key={item.id}>
            <div className="head">充{item.price}元</div>
            <div className="desc">
              <div className="name">{item.title}</div>
              <div className="more">{item.more}</div>
            </div>
            <div className="btn">去充值</div>
          </CouponTelItem>
        ))}
      </CouponList>
    </Container>
  );
};

export default Coupon;
