<template>
    <div class="car" v-if="getCar">
        <img :src="getCar.img" alt="">
        <h2>{{getCar.name}}</h2>
        <p>{{getCar.descr}}</p>     
        <RouterLink to="/cars">Back to cars...</RouterLink>
    </div>
    <div class="notFound" v-else>
        <h1>ERROR 404 | Машина не найдена</h1>
        <router-link to="/">На страницу с машинами...</router-link>
    </div>
</template>

<script>
    import cars from "@/db"
    export default {
        data() {
            return {
                cars: cars,
                currentId: null
            }
        },
        created() {
            this.currentId = this.$route.params.id
        },
        computed: {
            getCar(){
                return this.cars.find(car => car.id == this.currentId)
            }
        }
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