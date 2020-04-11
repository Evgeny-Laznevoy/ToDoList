<template>
    <div >
        <input type="text" class="todo-input" 
               placeholder="Введите наименование новой заметки"
               v-model="newTodo"
               @keyup.enter="addTodo"
               >
        <div v-for="(todo,i) in getTodos" :key="i" class="todo-item">
            <div>{{todo.title}}</div>
            <div class="remove-item" @click="removeTodo(i)">x</div>
        </div>       
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'ToDoList',
        data(){
            return{
                newTodo: '',
            }
        },
        computed:{
            ...mapGetters([
                'getTodos',
                'getLastTodo'
            ])
        },
        methods:{
            addTodo(){
                let lastId = this.getLastTodo    

                let newDoto = {
                    id: ++lastId,
                    title: this.newTodo,
                    completed: false
                }
                
                this.$store.dispatch('ADD_TODO', newDoto)
                this.newTodo = ''
            },
            removeTodo(i){
                this.$store.dispatch('DELETE_TODO', i)
            }
        }
    }
</script>

<style  scoped>

.todo{
    font-size: 18px;
}

.todo-input{
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
}

.todo-item{
   /* width: 100%;  */
   padding: 5px 0px;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.remove-item{
    cursor: pointer;
    margin-left: 14px;
}
</style>