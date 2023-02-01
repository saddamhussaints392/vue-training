<script>
export default {
    props:{
        deleteNoteHandler: {
            type: Function
        },
        note: {
            type: String,
        },
        index: {
            type: Number
        },
        editNoteHandler: {
            type: Function
        }
    },
    methods:{
        deleteNote(index){
            this.deleteNoteHandler(index);
        },
        editNote(index){
            this.editNoteHandler(index);
        }
    }

}
</script>

<template>
    <div class="sticky_notes_main">
       <div class="icons_section">
        <img alt="edit" src="../assets/images/edit.png" class="edit_icon" @click="editNote(index)"/>
        <img alt="cross" src="../assets/images/cross.png" class="cross_icon" @click="deleteNote(index)"/>
       </div>
        <div class="notes">
           {{note}}
        </div>
    </div>
</template>

<style scoped>
.sticky_notes_main {
    height: 20rem;
    width: 20rem;
    background-color: #f5af19;
    padding: 16px;
}
.notes {
    margin-top: 10px;
    color: white;
    font-size: 20px;
}
.icons_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.edit_icon {
    height: 20px;
    width: 20px;
    display: block;
    cursor: pointer;
    fill: white;
}

.cross_icon {
    height: 15px;
    width: 15px;
    display: block;
    cursor: pointer;
    fill: white;
}
</style>