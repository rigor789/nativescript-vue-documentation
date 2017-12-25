<template>
    <div class="AppSidebar p-4 py-4 md:py-8">
        <ul class="list-reset">
            <NavigationItem :children="toc"/>
        </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['toc'])
    }
  }
</script>