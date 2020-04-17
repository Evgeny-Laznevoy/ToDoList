<template>
    <div>
        <div id="filter">
            <div class="popup">
                <div class="popup_header">
                    <span>Popup name</span>
                    <span class="close_popup" @click="ClosePopup">x</span>
                </div>
                <div class="popup_content">
                    <slot></slot>
                </div>
                <div class="popup_footer">
                    <button @click="DeleteToDo" >Да</button>
                    <button @click="ClosePopup">Нет</button>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        methods:{
            ClosePopup(){
                this.$emit('closePopup')
            },
            DeleteToDo(){
                this.$emit('deleteToDo')
                this.$emit('closePopup')
            }
        }
    }
</script>

<style scoped>
#filter{
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.popup{
    padding: 16px;
    /* position: fixed; *
    /* position: absolute; */
    justify-content: center;
    /* margin: 50%; */
    margin: auto auto;
    /* top: 50%; */
    /* left: 37%; */
    /* margin-right: 50%; */
    /* right: 50%; */
    /* margin: auto; */
    /* right: 0;
    left: 0; */
    width: 400px;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 1050;
    /* opacity: 0;
    -webkit-transition: opacity 400ms ease-in;
      -moz-transition: opacity 400ms ease-in;
      transition: opacity 400ms ease-in; */
}

    /* при отображении модального окно */
/* .popup:target {
      opacity: 1;
      pointer-events: auto;
      overflow-y: auto;
} */


.popup .popup_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.popup_content{
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup_footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}

.close_popup{
    cursor: pointer;
}
button{
    cursor: pointer;
}
</style>