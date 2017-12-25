<template>
    <div class="AppSidebar p-4 md:p-8">
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