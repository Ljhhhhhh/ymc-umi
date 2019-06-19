import { Toast } from 'antd-mobile';
import bankImage from '../../assets/tmp/bank.jpg';
import { rtsGetCategorysList } from '@/services';

export default {
  namespace: 'recharge',
  state: {
    card_list: [
      // {
      //   thumb: bankImage,
      //   id: 1,
      // },
      // {
      //   thumb: bankImage,
      //   id: 2,
      // },
      // {
      //   thumb: bankImage,
      //   id: 3,
      // }
    ],
    cateList: [],
  },
  effects: {
    *GetCategorysList({ payload }, { call, put }) {
      const response = yield call(rtsGetCategorysList, payload);
      const { code, message, data } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: 'getGetagoryData',
          payload: {
            card_list: [
              {
                thumb: bankImage,
                id: 1,
              },
            ],
          },
        });
      }
    },
    *createCard({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },
  },
  reducers: {
    getGetagoryData(state, { payload }) {
      console.log(payload, 'payload');
      return {
        ...state,
        ...payload,
      };
    },
    addCard(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
