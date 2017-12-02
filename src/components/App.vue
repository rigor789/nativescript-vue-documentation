<template>
    <div class="App">
        <Sidebar/>

        <div>
            <Header/>

            <Content/>
        </div>
    </div>
</template>

<script>
  import Sidebar from './Sidebar';
  import Header from './Header';
  import Content from './Content';

  export default {
    components: {
      Sidebar,
      Header,
      Content
    }
  }
</script>