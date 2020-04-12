<template>
    <div>
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
.popup{
    padding: 16px;
    position: fixed;
    top: 50px;
    margin: 0 auto;
    /* right: 0;
    left: 0; */
    width: 400px;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
}

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