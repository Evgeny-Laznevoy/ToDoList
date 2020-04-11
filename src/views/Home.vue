<template>
  <div class="home">
      <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from '../components/TodoLost'

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
  max-width: 600px;
  margin: 0 auto;
}

</style>
