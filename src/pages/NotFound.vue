<template>
    <div class="notFound">
        <h1>ERROR 404 | Страница не найдена</h1>
        <router-link to="/">На главную...</router-link>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    .notFound{
        background: #000;
        height: 95vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        gap: 30px;
        h1{
            font-size: 80px;
        }
        a{
            text-decoration: underline;
            font-size: 40px;
        }
    }
</style>