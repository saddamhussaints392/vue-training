<script>
import Notes from '../components/Notes.vue';
export default {
  data() {
    return {
      inputValue: "",
      notes: [],
      editNote: null
    }
  },
  methods: {
    getInputValue() {
      if(this.inputValue){
        if(this.editNote === null){
          this.notes.push(this.inputValue);
        }
        else {
          this.notes[this.editNote] = this.inputValue;
        }
      }
      this.inputValue = "";
    },
    deleteNoteHandler(index) {
      this.notes.splice(index, 1);
    },
    editNoteHandler(index) {
      this.$refs.note.value = this.notes[index];
      this.editNote = index;

    }
  },
  components: {
    Notes
  }
}
</script>

<template>
  <div class="main_section">
    <div class="text_area">
      <h1>Notes</h1>
      <input type="text" placeholder="Enter your notes" ref="note" v-model="inputValue" @keyup.enter="getInputValue">
    </div>
    <div class="notes_section">
      <Notes v-for="(note, index) in notes" :key="index" :note="note" :index="index"
        :deleteNoteHandler="deleteNoteHandler" @editNote="editNoteHandler(index)" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
}

.main_section {
  background-color: #605C3C;
  width: 100%;
  height: 100vh;
}

.text_area {
  margin: auto;
  text-align: center;
}

input {
  outline: 0;
  padding: 16px;
  border: 1px solid rgb(224, 223, 223);
  border-radius: 8px;
}

.notes_section {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
