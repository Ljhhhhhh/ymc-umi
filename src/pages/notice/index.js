import React from 'react';
import { NavBar } from 'antd-mobile';
import { Container } from './style';
import GoBack from '../../components/GoBack';

const Notice = props => {
  return (
    <Container>
      <NavBar className="ratina-bd bd-b" mode="light" icon={<GoBack color="#333" />}>
        公告
      </NavBar>
      <div className="title">油价再回十年前</div>
      <div className="time">2019/03/01 09:28:18</div>
      <div className="content ratina-bd bd-t">
        三月初春,本应是花红柳绿、万物复苏的季节,未曾想冬日的寒流却依依不舍.值此之际,油莫愁提前送上暖春福利活动:油价再回十年前!
        在3月1日—3月31日活动期间,用户可多次选择加油套餐进行充值,最高享受71折充值折扣优惠!
        更多详情请进入活动页面查看,油莫愁在法律范围内拥有最终解释权.
      </div>
      <div className="footer">
        <p>运营中心</p>
        <p>2019年3月1号</p>
      </div>
    </Container>
  );
};

export default Notice;
