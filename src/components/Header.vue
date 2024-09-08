<template>
    <header class="header">
        <nav class="header-nav container">
            <RouterLink to="/">LOGO</RouterLink>
            <ul>
                <li v-for="page in pages" :key="page.url">
                    <RouterLink :to="page.url">{{page.name}}</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        props: ['pages']
    }
</script>

<style lang="scss" scoped>

</style>