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
      // {
      //   'id': 3,
      //   'title': 'target111',
      //   'completed': false,
      //   'todoId': 2
      // },
    ]
  },
  mutations: {
    SET_TODO(state, payload){
      state.todos.push(payload)
    },
    REMOVE_TODO(state, index){ 
      // let id = --index
      // if (index >= 0){
      //     state.todos.splice(id, 1)
      // }
      state.todos = state.todos.filter(todo => todo.id !== index)
    },
    SET_NOTE(state, payload){
      state.note.push(payload)
    },
    REMOVE_NOTE(state, payload){
      state.note = state.note.filter(note => note.todoId !== payload)
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
    },
    DELETE_NOTE({commit}, index){
      commit('REMOVE_NOTE', index)
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
      return state.note.filter(note => note.todoId == id)
    },
    getLastNote(state){
      return state.note.length
    },
  }
})
