<template>
    <div class="Page md:bg-docs-gradient min-h-screen">
        <div class="container mx-auto flex">
            <div class="hidden md:w-1/4 md:block">
                <AppSidebar/>
            </div>
            <div class="w-full md:w-3/4 bg-white min-h-screen">
                <ContentView/>
            </div>
        </div>
    </div>
</template>

<script>
  import AppSidebar from './AppSidebar';
  import ContentView from './content/ContentView';

  export default {
    components: {
      AppSidebar,
      ContentView
    }
  }
</script>