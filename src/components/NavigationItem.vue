<template>
    <li class="NavigationItem" :class="type">
        <router-link v-if="path" :to="path.replace('.md', '')">
            {{ name }}
        </router-link>
        <span v-else-if="name">{{ name }}</span>

        <ul v-if="children">
            <NavigationItem
                    v-for="item in children"
                    :key="item.path"
                    :name="item.name"
                    :type="item.type ? `type-${item.type}` : ''"
                    :path="item.path"
                    :children="item.children"/>
        </ul>
    </li>
</template>

<script>
  export default {
    name: 'NavigationItem',

    props: {
      name: String,
      type: String,
      path: String,
      children: {
        type: Array,
        required: false
      },
    }
  }
</script>

<style scoped>
    .type-main-category > span {
        color: red;
    }

    .type-sub-category > span {
        color: blue;
    }
</style>