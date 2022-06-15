<template>
    <footer>
        <p>Contatos App &copy; 2022</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer{
    height: 50px;
    background-color: #a4a4a4;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0 !important;
    width: 100%;
}
p{
    padding: 0 !important;
    margin: 0 !important;
}
</style>