<template>
    <div class="home_section">
        <button @click="this.$router.push('/sticky-notes')">Notepad</button>
        <button @click="this.$router.push('/food-app')">Food App</button>
    </div>
</template>

<style>
.home_section {
    height: 100%;
    width: 100%;
    margin: auto;
}

button {
    border: none;
    padding: 16px;
    background: #09af00;
    color: white;
    border-radius: 12px;
    font-size: 20px;
    display: block;
    margin: 20px auto;
    cursor: pointer;
}
</style>