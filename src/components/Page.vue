<template>
    <div class="Page">
        <div class="md:bg-docs-gradient min-h-screen">
            <div class="container mx-auto flex">
                <AppSidebar/>
                <div class="flex-1 bg-white min-h-screen max-w-full">
                    <!-- Content Area -->
                    <ContentView/>
                </div>
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