<template>
    <div >
        <input type="text" class="todo-input" 
               placeholder="Введите наименование новой заметки"
               v-model="newTodo"
               @keyup.enter="addTodo"
               >
        <ul>       
            <li v-for="(todo,i) in getTodos" :key="i" class="todo-item">
                <div>{{todo.title}}</div>
                <div class="todo_buttons">
                    <button @click="editTodo(i)" >Изменить</button>
                    <div class="remove-item" @click="showPopupInfo(i)">x</div>
                </div>
            </li>  
        </ul>  
        <Popup v-if="isInfoPopupVisible" 
                @closePopup="closeInfoPopup" 
                @deleteToDo="removeTodo"
        >
        <p>Вы точно хотите удалить заметку?</p>
        </Popup>   
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { bus } from '../bus'
import Popup from '../popup/PopUp'

    export default {
        name: 'ToDoList',
        components:{
           Popup 
        },
        props:{
            todo_data:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        data(){
            return{
                newTodo: '',
                isInfoPopupVisible: false,
                idTodo: 0
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
            editTodo(i){
                // let todo = i;
                // console.log(todo);
                bus.notyfy('editToDo', ++i)
                bus.$off('editToDo')
                this.$router.push("/editTodo");
            },
            removeTodo(){
                console.log(this.idTodo);
                this.$store.dispatch('DELETE_TODO', this.idTodo)
            },
            showPopupInfo(i){
                this.isInfoPopupVisible = true
                this.idTodo = i
            },
            closeInfoPopup(){
                this.isInfoPopupVisible = false
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
    border-radius: 5px;
    box-shadow: inset 0 0 3px;
    border-width: 0px;
}

li{
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

.todo_buttons{
    display: flex;
}

button{
    cursor: pointer;
    background-color: #7957d5;
    border: 0px;
}
</style>