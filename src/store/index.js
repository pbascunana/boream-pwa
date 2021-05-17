import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    resetUsers(state) {
      state.users = []
    }
  },
  actions: {
  },
  getters: {
    getFavouriteUsers(state) {
      return state.users.filter(user => user.isFavourite).map(user => {
        let userData = {}
        userData.gender = user.gender
        userData.fullName = `${user.name.first} ${user.name.last}`
        userData.email = user.email
        userData.nationality = user.nat
        userData.bornDate = user.dob.date
        userData.registerDate = user.registered.date
        return userData
      })
    }
  },
  modules: {
  },
})
