import { Model } from 'dva';
import { getExcelInfo } from './service';

// import { ConnectState } from "../../typings";
export const NAMESPACE = 'file';

export interface FileModelType extends Model {
  state: FileModelState;
}

export interface FileModelState { }

const FileModel: FileModelType = {
  namespace: NAMESPACE,

  state: {
    message: '',
    isLoading: false,
    recordList: [],
  },

  reducers: {
    // change model data
    updateFileStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  effects: {
    // *uploadImport(action, { call, put, select }) {
    //   const { payload } = action;
    //   console.log('uploadImport ', payload);
    //   const res = yield call(uploadImport, { ...payload });
    //   console.log('uploadImport ', res);
    // },

    // get record
    *getExcelInfo(action, { call, put, select }) {
      yield put({ type: 'updateFileStore', payload: { message: '', isLoading: true } });
      const { payload } = action;
      const params = {
        ...payload,
      }
      console.log('getExcelInfo :: ', { ...payload });
      try {
        const res = yield call(getExcelInfo, params);
        const { status } = res;
        if (status === 200) {
          const { data } = res.data;
          const { list } = data;
          yield put({
            type: 'updateFileStore',
            payload: { message: '获取数据成功', recordList: list, isLoading: false },
          });
        }
      } catch (error) {
        console.error('getExcelInfo :: ', error);
        yield put({
          type: 'updateFileStore',
          payload: { message: error.message, isLoading: false },
        });
      }
    },
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => { });
    },
  },
};

export default FileModel;
