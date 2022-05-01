import { createStore } from 'vuex'

export default createStore({
  state: {
    target: 60 * 60,
    todayProgress: 0, // 以秒为单位

    nowProgress: Infinity,
    nowTarget: 120
  },
  getters: {
    todayProgressPercent: (state) => {
      if (state.todayProgress >= state.target)
        return 100
      else
        return state.todayProgress / state.target * 100
    },
    nowProgressPercent: (state) => {
      return state.nowProgress / state.nowTarget * 100
    }
  },
  mutations: {
    setTodayProgress: (state, payload) => {
      state.todayProgress = payload
    },
    incrementTodayProgress: (state) => {
      state.todayProgress += 1
    },
    setNowProgress: (state, payload) => {
      state.nowProgress = payload
    },
    downIncrementNowProgress: (state) => {
      state.nowProgress -= 1
    },
    resetNowProgress: (state) => {
      state.nowProgress = state.nowTarget
    },
    setNowTarget: (state, payload) => {
      state.nowTarget = payload
    },
    changeTodayProgress: (state, payload) => {
      state.todayProgress += payload
    },
    setTarget: (state, payload) => {
      state.target = payload
    }
  },
  actions: {
  }
})
