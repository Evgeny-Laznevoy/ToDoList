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
                    <!-- <button @click.prevent="editTodo(todo.id)" >Изменить</button> -->
                    <button @click="showEditToDo(todo.id)">Изменить</button>
                    <!-- <router-link to="/EditToDo" class="button" @click.prevent="editTodo(todo.id)">Изменить</router-link> -->
                    <div class="remove-item" @click="showPopupInfo(todo.id)">x</div>
                </div>
            </li>  
        </ul>  
        <Popup v-if="isInfoPopupVisible" 
                @closePopup="closeInfoPopup" 
                @deleteToDo="removeTodo"
        >
        <p>Вы точно хотите удалить заметку?</p>
        </Popup>
        <EditToDo v-show="isEditToDoVisible"></EditToDo>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { bus } from '../bus'
import Popup from '../popup/PopUp'
import EditToDo from './EditToDo'

    export default {
        name: 'ToDoList',
        components:{
            Popup,
           EditToDo 
        },
        props:{
            // todo_data:{
            //     type:Object,
            //     default(){
            //         return{}
            //     }
            // }
        },
        data(){
            return{
                newTodo: '',
                isInfoPopupVisible: false,
                idTodo: 0,
                isEditToDoVisible: false
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
                
                bus.notify('EDIT_TODO', i);
                this.$router.push("/EditToDo");
                console.log('передал');
                console.log(i);
                // this.$router.push("/EditToDo");
            },
            removeTodo(){
                console.log('сейчас индекс заметки перед удалением');
                
                console.log(this.idTodo);
                // let index = this.idTodo
                this.$store.dispatch('DELETE_TODO', this.idTodo)
                this.$store.dispatch('DELETE_NOTE', this.idTodo)
            },
            showPopupInfo(index){
                this.isInfoPopupVisible = true
                this.idTodo = index
            },
            closeInfoPopup(){
                this.isInfoPopupVisible = false
            },
            showEditToDo(i){
                console.log('vis');
                // this.isEditToDoVisible = true
                bus.notify('EDIT_TODO', i);
                this.$router.push("/EditToDo");
                console.log('передал');
            }
        }
    }
</script>

<style  scoped>

/* .todo{
    font-size: 18px;
} */

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