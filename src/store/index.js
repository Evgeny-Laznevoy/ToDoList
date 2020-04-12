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
    ],
    note:[
      {
        'id': 1,
        'title': 'target',
        'completed': false,
        'todoId': 1
      },
      {
        'id': 2,
        'title': 'target',
        'completed': false,
        'todoId': 1
      },
      {
        'id': 3,
        'title': 'target111',
        'completed': false,
        'todoId': 2
      },
    ]
  },
  mutations: {
    SET_TODO(state, payload){
      state.todos.push(payload)
    },
    REMOVE_TODO(state, index){ 
      if (index >= 0){
          state.todos.splice(index, 1)
      }
    },
    SET_NOTE(state, payload){
      state.note.push(payload)
    }
  },
  actions: {
    ADD_TODO({commit}, todo){
      commit('SET_TODO', todo)
    },
    DELETE_TODO({commit}, index){
      console.log(index);   
      commit('REMOVE_TODO', index)
    },
    ADD_NOTE({commit}, note){
      commit('SET_NOTE', note)
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
    },
    getNote: state => id => {
      // console.log(todoId);
      // return state.note
      return state.note.filter(note => note.todoId === id)
    },
    getLastNote(state){
      return state.note.length
    },
  }
})
