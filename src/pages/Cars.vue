<template>
    <div class="container">
        <h1>Cars Page</h1>
        <div class="cars">
            <RouterLink :to="/cars/ + car.id" class="cars-item" v-for="car in cars" :key="car.id">
                <img :src="car.img" alt="">
                <h2>{{car.name}}</h2>
                <p>{{car.descr}}</p>
            </RouterLink>
        </div>
    </div>
</template>

<script>
    import cars from "@/db"
    export default {
        data() {
            return {
                cars: cars
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>