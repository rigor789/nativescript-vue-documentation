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
        const flatten = (entry, res) => {
          if (entry.path && entry.source) {
            res.push({
              path: entry.path,
              source: entry.source
            });
          }

          if (entry.children) {
            const len = entry.children.length
            let i = 0;
            for (; i < len; i++) {
              flatten(entry.children[i], res);
            }
          }

          return res;
        };
        const flat_toc = flatten({ children: data }, []);
        console.log('%cParsed Routes:', 'color: red; font-size: 18px;');
        console.table(flat_toc);
        this.$store.commit('SET_TOC', data);
        this.$store.commit('SET_FLAT_TOC', flat_toc);
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