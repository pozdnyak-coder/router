<template>
    <div class="container">
        <h1>About Page</h1>
        <div class="users">
            <div class="users-card" v-for="(user, idx) in users" :key="idx">
                <h2>{{user.name}}</h2>
                <p>{{user.phone}}</p>
                <span>{{user.address.city + ' ' + user.address.street}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: null
            }
        },
        methods: {
            getUSers(){
                fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => this.users = data)
                .catch((err) => console.error(err)) 
            }
        },
        mounted() {
            this.getUSers()
        }
    }
</script>

<style lang="scss" scoped>

</style>