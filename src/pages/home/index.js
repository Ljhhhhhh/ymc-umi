import React, { useState } from 'react';
import { Carousel, NoticeBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import {
  Container,
  NotiveWrap,
  MenuWrap,
  CardWrap,
  CardList,
  DisItem,
  ItemTitle,
  Featured,
  ProductList,
  Product,
} from './style';
// import Bar from "../../components/TabBar";
import PngIcon from '../../components/PngIcon';
import banner from '../../assets/home_banner.png';
import home1 from '../../assets/home_1.png';
import home2 from '../../assets/home_2.png';
import home4 from '../../assets/home_4.png';

const Home = props => {
  const [hig, setHig] = useState('auto');
  return (
    <Container>
      <Carousel autoplay={true} infinite>
        <a href="http://www.alipay.com" style={{ display: 'inline-block' }}>
          <img
            src={banner}
            alt=""
            style={{ width: '100%', verticalAlign: 'top', height: hig }}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
              setHig('auto');
            }}
          />
        </a>
        <a href="http://www.alipay.com" style={{ display: 'inline-block' }}>
          <img
            src={banner}
            alt=""
            style={{ width: '100%', verticalAlign: 'top', height: hig }}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
              setHig('auto');
            }}
          />
        </a>
        <a href="http://www.alipay.com" style={{ display: 'inline-block' }}>
          <img
            src={banner}
            alt=""
            style={{ width: '100%', verticalAlign: 'top', height: hig }}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
              setHig('auto');
            }}
          />
        </a>
      </Carousel>
      <NotiveContent />
      <Menu />
      <CardWrap>
        <Link className="card_big" to="/">
          <div className="title">油卡充值套餐</div>
          <div className="sub_title">按月充值,优惠折扣</div>
          <div className="btn">立即充值</div>
        </Link>
        <Card />
      </CardWrap>
      <ItemTitle color="#FD6245">
        <div className="bold">商城精选</div>
        <Link to="/">更多</Link>
      </ItemTitle>
      <Featured>
        <Link to="/">
          <img src={home1} alt="1" />
        </Link>
        <Link to="/">
          <img src={home2} alt="1" />
        </Link>
        <Link to="/">
          <img src={home2} alt="1" />
        </Link>
      </Featured>
      <ItemTitle color="#7486FC">
        <div className="bold">热销好物</div>
      </ItemTitle>
      <ProductContent />
    </Container>
  );
};

const NotiveContent = () => {
  const list = [
    {
      icon: 'oil_station',
      content: '中石油系统维护,油卡充值缺货通知',
      time: '2019.03.06',
      path: '/notice',
    },
    {
      icon: 'oil_station',
      content: '中石油系统维护,油卡充值缺货通知',
      time: '2019.03.06',
      path: '/2',
    },
  ];
  return (
    <NotiveWrap>
      <Carousel
        className="my-carousel"
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay
        infinite
      >
        {list.map(item => (
          <Link to={item.path} key={item.path}>
            <NoticeBar icon={<PngIcon width="16px" height="16px" icon={item.icon} />}>
              {item.content} [{item.time}]
            </NoticeBar>
          </Link>
        ))}
      </Carousel>
    </NotiveWrap>
  );
};

const Menu = () => {
  const menuList = [
    {
      name: '油卡充值',
      icon: 'home_menu_1',
      path: '/recharge',
    },
    {
      name: '话费充值',
      icon: 'home_menu_2',
      path: '/recharge/telphone',
    },
    {
      name: '领取油卡',
      icon: 'home_menu_3',
      path: '/3',
    },
    {
      name: '小莫商城',
      icon: 'home_menu_4',
      path: '/4',
    },
  ];
  return (
    <MenuWrap>
      {menuList.map(menu => (
        <Link to={menu.path} key={menu.path}>
          <PngIcon icon={menu.icon} width="45px" height="45px" />
          <div>{menu.name}</div>
        </Link>
      ))}
    </MenuWrap>
  );
};

const Card = () => {
  const list = [
    {
      price: '500',
      unit: '月',
      discountPrice: '7200',
      discount: '8.0',
      time: '18',
      theme: 'orange',
      bg: require('../../assets/discount_bg_orange.png'),
      path: '/1',
      colors: {
        theme: '#D87530',
        assist: '#E6A277',
      },
    },
    {
      price: '1000',
      unit: '月',
      discountPrice: '14400',
      discount: '8.0',
      time: '18',
      theme: 'red',
      bg: require('../../assets/discount_bg_red.png'),
      path: '/2',
      colors: {
        theme: '#F95563',
        assist: '#F85562',
      },
    },
    {
      price: '500',
      unit: '月',
      discountPrice: '9600',
      discount: '7.5',
      time: '24',
      theme: 'green',
      bg: require('../../assets/discount_bg_green.png'),
      path: '/3',
      colors: {
        theme: '#4EBEB3',
        assist: '#4EBFB4',
      },
    },
    {
      price: '1000',
      unit: '月',
      discountPrice: '18000',
      discount: '7.5',
      time: '24',
      theme: 'blue',
      bg: require('../../assets/discount_bg_blue.png'),
      path: '/4',
      colors: {
        theme: '#5E75CF',
        assist: '#5E75CF',
      },
    },
  ];
  return (
    <CardList>
      {list.map(item => (
        <DisItem
          key={item.path}
          className="item"
          to={item.path}
          theme={item.colors}
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <PngIcon icon={`discount/discount_icon_${item.theme}`} width="56px" height="51px" />
          <div className="desc">
            <p className="price">
              ￥{item.price}
              元/
              {item.unit}
            </p>
            <p className="sub">
              折扣价:
              {item.discountPrice}
            </p>
            <p className="badge">{item.discount}折</p>
          </div>
          <div className="corner">
            {item.time}个{item.unit}
          </div>
        </DisItem>
      ))}
    </CardList>
  );
};

const ProductContent = () => {
  const list = [
    {
      thumb: home4,
      title: '【sup联名】荷兰apiyoo电动红色网红限量版限量版限量版',
      price: 368,
      sold: 668,
      path: '/1',
    },
    {
      thumb: home4,
      title: '【sup联名】荷兰apiyoo电动红色网红限量版限量版限量版',
      price: 368,
      sold: 668,
      path: '/2',
    },
    {
      thumb: home4,
      title: '【sup联名】荷兰apiyoo电动红色网红限量版限量版限量版',
      price: 368,
      sold: 668,
      path: '/3',
    },
  ];

  return (
    <ProductList>
      {list.map(item => (
        <Product key={item.path} to={item.path}>
          <img src={item.thumb} alt="1" />
          <div className="p_title">{item.title}</div>
          <div className="sub">
            <div className="price">￥{item.price}</div>
            <div className="sold">
              已售
              {item.sold}
            </div>
          </div>
        </Product>
      ))}
    </ProductList>
  );
};

export default Home;
