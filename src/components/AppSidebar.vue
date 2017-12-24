<template>
    <div class="AppSidebar hidden md:block w-1/4">
        <div class="sidebar py-8">
            <ul class="list-reset">
                <NavigationItem :children="toc"/>
            </ul>
        </div>
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