import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload){
      payload.checked = true;
      state.cartList.push(payload);
    },
    addCount(state, payload){
      payload.count += 1;
    },
    changeChecked(state, payload){
      const product = state.cartList.find(item => payload === item.iid);
      product.checked = !product.checked;
    },
    changeAllChecked(state, payload){
      state.cartList.forEach((item, index) => {
        item.checked = payload;
      })
    }
  },
  getters: {
    cartAll(state, getters){
      return state.cartList;
    },
    checkedGoods(state, getters){
      return getters.cartAll.filter(item => item.checked).length;
    },
    totalPrice(state, getters){
      return getters.cartAll.filter(item => item.checked).reduce((a, b, index) => {
        return a + b.count * b.nowPrice
      }, 0).toFixed(2);
    },
    isAllChecked(state, getters){
      if(getters.cartAll.length === 0) return false;
      const res = getters.cartAll.find(item => !item.checked);
      return res ? false : true;
    }

  },
  actions: {
    addGoods(context, payload){
      let product = context.state.cartList.find(item => payload.iid === item.iid);
      if(product){
        context.commit("addCount", product);
      }else {
        payload.count = 1;
        context.commit("addCart", payload);
      }
    }
  },
  modules: {

  }
});

export default store;
