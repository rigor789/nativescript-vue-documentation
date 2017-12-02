<template>
    <div class="AppSidebar">
        <h1>Sidebar</h1>

        <ul class="list-reset">
            <NavigationItem :children="toc"/>
        </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['toc'])
    }
  }
</script>