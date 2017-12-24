<template>
</template>

<script>
    import ContentPane from './ContentPane'
    import PreviewPane from './PreviewPane'
    import { mapState } from 'vuex'

    export default {
      computed: {
        ...mapState({
          frontMatter: state => state.current.matter
        })
      },

      components: {
        ContentPane,
        PreviewPane
      }
    }
</script>