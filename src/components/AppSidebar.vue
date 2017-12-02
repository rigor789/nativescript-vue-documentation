<template>
    <div class="Sidebar">
        <h1>Sidebar</h1>


    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
          ...mapState(['toc'])
        },
        created() {
          this.$http.get('toc.json').then(({ data }) => {
            this.$store.commit('SET_TOC', data);
          })
        }
    }
</script>