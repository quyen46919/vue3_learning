<template>
  <div :class="['add-todo', isShowForm ? '' : 'add-todo__column']">
    <button
      v-if="!isShowForm"
      class="add-todo__button"
      @click="showForm"
    >
      Add new todo
    </button>
    <form
      v-if="isShowForm"
      class="add-todo__form"
      @submit="addNewTodo"
    >
      <div class="add-todo__form--line">
        <span>Todo title:</span>
        <input
          type="text"
          placeholder="Input todo title here..."
          spellcheck="false"
          v-model="title"
        />
      </div>
      <div class="add-todo__form--line">
        <span>Todo content:</span>
        <textarea
          placeholder="Input todo content here..."
          spellcheck="false"
          v-model="content"
          rows="1"
        />
      </div>
      <div class="add-todo__form--line">
        <span>Deadline:</span>
        <input
          type="date"
          placeholder="Input todo content here..."
          v-model="deadline"
        />
      </div>
      <div class="add-todo__form--line">
        <button class="add-todo__button create">Add</button>
        <button class="add-todo__button close" @click="showForm">
          Close
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  export default {
    name: 'AddTodoForm',
    setup(props, context) {
      const isShowForm = ref(false)
      const title = ref('')
      const content = ref('')
      const deadline = ref('')

      const showForm = () => {
        isShowForm.value = !isShowForm.value
      }

      const addNewTodo = e => {
        e.preventDefault()
        if (!title.value || !content.value || !deadline.value) {
          console.log('reject')
          return
        }
        const newTodo = {
          id: uuidv4(),
          title: title.value,
          content: content.value,
          deadline: deadline.value
        }

        context.emit('add-new-todo', newTodo)
        title.value = ''
        content.value = ''
        deadline.value = ''
      }

      return {
        isShowForm,
        showForm,
        title,
        content,
        deadline,
        addNewTodo
      }
    }
  }
</script>

<style>
  .add-todo {
    width: 100%;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .add-todo.add-todo__column {
    justify-content: flex-start;
  }
  .add-todo__button {
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    background-color: #672ee3;
    color: white;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .add-todo__button.create {
    background-color: #2ea44f;
  }
  .add-todo__button.close {
    background-color: #ff4742;
  }
  .add-todo__form {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .add-todo__form--line {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  .add-todo__form--line span {
    width: 100px;
    text-align: left;
    font-size: 16px;
  }
  .add-todo__form--line input,
  .add-todo__form--line textarea {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 0.7rem 0.5rem;
    border: none;
    outline: none;
  }
  .add-todo__form--line input::placeholder,
  .add-todo__form--line textarea::placeholder {
    color: silver;
  }
</style>
