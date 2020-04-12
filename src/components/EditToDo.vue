<template>
        <div class="note">
            <h3>{{this.titleTodo}}</h3>
            <input type="text" class="note-input" 
                placeholder="Введите наименование новой задачи"
                v-model="newNote"
                @keyup.enter="addNote"
                >
            <ul>       
                <li v-for="(todo,i) in getNote(idTodo)" :key="i" class="note-item">
                    <div>{{todo.title}}</div>
                    <div class="note_buttons">
                        <!-- <button @click="editNote(i)" >Изменить</button> -->
                        <div class="remove-item" @click="showPopupInfo(i)">x</div>
                    </div>
                </li>  
            </ul>  
            <Popup v-if="isInfoPopupVisible" 
                    @closePopup="closeInfoPopup" 
                    @deleteToDo="removeTodo"
            >
            <p>Вы точно хотите удалить задачу?</p>
            </Popup>   
        </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

    var vm = new Vue ({
        data:{
            indexToDo: 0,
            // title:''
        }
    })

    export default {
       name: 'EditToDo',
       data(){
            return{
                newNote: '',
                isInfoPopupVisible: false,
                idNote: 0,
                idTodo: 0,
                titleTodo: '123'
            }
        },
        created(){
            this.$bus.$on('editToDo', index => {
                console.log('куку');
                console.log(index);
                Vue.set(vm, 'indexToDo', index)
                // Vue.set(vm, 'title', index.title)
                console.log(index);     
            })
            console.log(vm.indexToDo);
            console.log(vm.title);
            this.idTodo = vm.indexToDo
            console.log(this.idTodo);
        },
        computed:{
            ...mapGetters([
                'getNote',
                'getLastNote'
            ])
        },
        methods:{
            addNote(){
                let lastId = this.getLastNote    

                let newNote = {
                    id: ++lastId,
                    title: this.newNote,
                    completed: false,
                    todoId: vm.indexToDo
                }
                
                this.$store.dispatch('ADD_NOTE', newNote)
                this.newNote = ''
            },
            showPopupInfo(i){
                this.isInfoPopupVisible = true
                this.idTodo = i
            }
        }
    }
</script>

<style scoped>

.note{
    max-width: 600px;
    margin: 0 auto;
}

.todo{
    font-size: 18px;
}

.note-input{
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

.note_buttons{
    display: flex;
}

button{
    cursor: pointer;
    background-color: #7957d5;
    border: 0px;
}
</style>