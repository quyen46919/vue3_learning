<template>
  <div :class="['todo-item', values.isCompleted && 'is-completed']">
    <div class="todo-item__left">
      <input
        type="checkbox"
        :checked="values.isCompleted"
        @change="onToggleTodo"
      />
      <div class="todo-item__content">
        <span class="todo-item__title">{{ values.title }}</span>
        <span class="todo-item__sub-content">
          {{ values.content }}
        </span>
        <span class="todo-item__time">
          Deadline: {{ values.deadline }}
        </span>
      </div>
    </div>
    <button class="todo-item__del" @click="onDeleteTodo">
      Delete
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['values'],
    setup(props, context) {
      const onToggleTodo = () => {
        context.emit('item-toggle', props.values.id)
      }
      const onDeleteTodo = () => {
        context.emit('item-delete', props.values.id)
      }

      return {
        onToggleTodo,
        onDeleteTodo
      }
    }
  }
</script>

<style scoped>
  .todo-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2rem;
    box-sizing: border-box;
    border-top: 1px solid #f2f2f2;
  }
  .todo-item.is-completed span {
    color: silver;
    text-decoration: line-through;
    font-style: italic;
  }
  .todo-item__left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  .todo-item__left input[type='checkbox'] {
    width: 20px;
    height: 20px;
  }
  .todo-item__content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 0.2rem;
  }
  .todo-item__title {
    font-size: 17px;
    color: black;
  }
  .todo-item__sub-content {
    font-size: 14px;
    color: gray;
  }
  .todo-item__time {
    font-size: 14px;
    color: orangered;
  }
  .todo-item__del {
    padding: 0.5rem 1rem;
    background-color: orangered;
    color: white;
    border-radius: 6px;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
