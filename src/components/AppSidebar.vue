<template>
    <div class="Sidebar">
        <h1>Sidebar</h1>

        <ul>
            <li v-for="entry in toc" :class="entry.type">
                {{ entry.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
          ...mapState(['toc'])
        },
        created() {

        }
    }
</script>