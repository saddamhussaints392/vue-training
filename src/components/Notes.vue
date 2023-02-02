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
    },
    methods:{
        deleteNote(index){
            this.deleteNoteHandler(index);
        },
    }

}
</script>

<template>
    <div class="sticky_notes_main">
       <div class="icons_section">
        <img alt="edit" src="../assets/images/pen.png" class="edit_icon" @click="$emit('editNote')"/>
        <img alt="cross" src="../assets/images/close.png" class="cross_icon" @click="deleteNote(index)"/>
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
    outline: none;
    border: 0;
}
.icons_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.edit_icon {
    height: 25px;
    width: 25px;
    display: block;
    cursor: pointer;
}
.cross_icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
}
</style>