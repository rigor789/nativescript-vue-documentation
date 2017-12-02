<template>
    <li class="NavigationItem" :class="type">
        <span v-if="name">{{ name }} ({{ path }})</span>

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
    .type-category > span {
        color: red;
    }
</style>