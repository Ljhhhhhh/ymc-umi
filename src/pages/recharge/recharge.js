import React, { useState, useCallback } from 'react';
import { NavBar, List, Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import GoBack from '../../components/GoBack';
import PngIcon from '../../components/PngIcon';
import BuyView from '../../components/BuyView';
import {
  Container,
  AddCard,
  SelectTicket,
  TicketItem,
  CouponWrap,
  Balance,
  CarouselWrap,
} from './style';

const ListItem = List.Item;

const Recharge = props => {
  const [ticket, setTicket] = useState({});
  const [card, setCard] = useState({});
  const cardListJs = props.cardList; // props.cardList.toJS()
  const dispatch = props.dispatch;
  const goSelectCoupon = () => {
    props.history.push('/recharge/coupon');
  };

  return (
    <Container>
      <NavBar
        mode="light"
        icon={<GoBack color="#333" />}
        rightContent={
          <Link to="/home">
            <PngIcon icon="question" width="40px" height="40px" />
          </Link>
        }
      >
        即时充值
      </NavBar>
      {cardListJs.length ? (
        <CardList card={card} setCard={setCard} cardList={cardListJs} />
      ) : (
        <CreateCard dispatch={dispatch} />
      )}
      <TicketList showShadow={!cardListJs.length} setTicket={setTicket} ticket={ticket} />
      <CouponWrap>
        <ListItem extra="0 张" arrow="horizontal" onClick={goSelectCoupon}>
          优惠券
        </ListItem>
      </CouponWrap>
      <BuyView data={ticket} />
    </Container>
  );
};

const CreateCard = ({ dispatch }) => {
  const HandleCreate = () => {
    console.log(123);
    dispatch({
      type: 'recharge/GetCategorysList',
    });
  };

  return (
    <AddCard className="ratina-bd bd-t">
      <div className="title">充值油卡</div>
      <div className="add-btn" onClick={() => HandleCreate()}>
        <div>
          <span>+请添加加油卡</span>
          <PngIcon icon="recharge/oil_station" width="28px" height="28px" />
        </div>
      </div>
    </AddCard>
  );
};

const CardList = props => {
  const [imgH, setImgH] = useState('auto');
  const { cardList: list, card, setCard } = props;
  return (
    <CarouselWrap>
      <Carousel
        slideWidth={0.8}
        dots={false}
        frameOverflow="visible"
        afterChange={index => setCard(list[index])}
      >
        {list.map(item => (
          <img
            key={item.id}
            src={item.thumb}
            style={{ zIndex: card.id === item.id ? 2 : 1, top: card.id === item.id ? -10 : 0 }}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
              setImgH('auto');
            }}
          />
        ))}
      </Carousel>
    </CarouselWrap>
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
  const shadow = props.showShadow ? '0px -4px 5px 0px rgba(64,72,248,0.3)' : '';
  return (
    <SelectTicket shadow={shadow}>
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

const mapState = ({ recharge }) => {
  return {
    cardList: recharge.card_list,
  };
};

export default connect(mapState)(Recharge);
