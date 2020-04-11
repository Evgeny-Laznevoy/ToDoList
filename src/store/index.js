import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {
        'id': 1,
        'title': 'First',
        'completed': false
      }
    ]
  },
  mutations: {
    SET_TODO(state, payload){
      state.todos.push(payload)
    },
    REMOVE_TODO(state, index){
      state.todos.splice(index, 1)
    }
  },
  actions: {
    ADD_TODO({commit}, todo){
      commit('SET_TODO', todo)
    },
    DELETE_TODO({commit}, index){
      commit('REMOVE_TODO', index)
    }
  },
  modules: {
  },
  getters:{
    getTodos(state){
      return state.todos;
    },
    getLastTodo(state){
      return state.todos.length
    }
  }
})
