<template>
  <div class="todo-list">
    <AddTodoForm @add-new-todo="onAddNewTodo" />
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :values="todo"
      @item-toggle="onToggleTodo"
      @item-delete="onDeleteTodo"
    />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import TodoItem from './TodoItem.vue'
  import AddTodoForm from './AddTodoForm.vue'
  export default {
    name: 'TodoList',
    components: { TodoItem, AddTodoForm },
    setup() {
      const todos = ref([
        {
          id: uuidv4(),
          title: 'This is task 01',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          isCompleted: false,
          deadline: '31/06/2022'
        },
        {
          id: uuidv4(),
          title: 'This is task 02',
          content:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          isCompleted: false,
          deadline: '21/06/2022'
        },
        {
          id: uuidv4(),
          title: 'This is task 03',
          content:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
          isCompleted: true,
          deadline: '19/06/2022'
        }
      ])

      const onToggleTodo = id => {
        todos.value = todos.value.map(todo => {
          if (todo.id === id) todo.isCompleted = !todo.isCompleted
          return todo
        })
      }

      const onDeleteTodo = id => {
        todos.value = todos.value.filter(todo => todo.id !== id)
      }

      const onAddNewTodo = todo => {
        todos.value.push(todo)
      }

      return {
        todos,
        onToggleTodo,
        onDeleteTodo,
        onAddNewTodo
      }
    }
  }
</script>

<style>
  .todo-list {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
</style>
