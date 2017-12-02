<template>
    <div class="ContentView">
        <h1>ContentView</h1>

        <div v-html="currentContent"></div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        currentContent: state => state.current.content
      }),
      ...mapState(['flat_toc', 'lang']),
      currentContentSource() {
        const route = this.$route;

        const matched = this.flat_toc.find((r) => r.path === route.path);

        if (!matched) {
          return null;
        }

        return matched.source
      }
    },
    mounted() {
      this.$watch('currentContentSource', () => this.fetchContent());
    },
    methods: {
      fetchContent() {
        const source = this.currentContentSource;

        if(!source) {
            return this.$router.replace('/404');
        }

        this.$http.get(`${window.location.origin}/${this.lang}/${source}`).then(res => {
          if(res.status === 404) {
            return this.$router.replace('/404');
          }

          this.$store.commit('SET_CURRENT_RAW_CONTENT', res.data);
          this.$store.commit('SET_CURRENT_CONTENT', this.$md.render(res.data));
        })
      }
    }
  }
</script>