<template>
    <div class="App">
        <AppSidebar/>

        <div>
            <AppHeader/>

            <AppContent/>
        </div>
    </div>
</template>

<script>
  import AppSidebar from './AppSidebar';
  import AppHeader from './AppHeader';
  import AppContent from './AppContent';

  export default {
    created() {
      this.$http.get('toc.json').then(({ data }) => {
        this.$store.commit('SET_TOC', data);
      })
    },
    components: {
      AppSidebar,
      AppHeader,
      AppContent
    }
  }
</script>

<style>
    @import 'https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css';
</style>