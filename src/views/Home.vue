<template>
  <div>
    <h3>Новые заметки</h3>
    <div class="home">
        <TodoList></TodoList>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList'

export default {
  name: 'Home',
  components: {
      TodoList
  }
}
</script>

<style scoped>
  
*{
  box-sizing: border-box;
}

.home{
  width: 600px;
  margin: 0 auto;
}

</style>
