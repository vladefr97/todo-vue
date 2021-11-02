<template>
  <div class="list-item">{{ title }}</div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: {
      required: true,
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped lang="scss">
.list-item {
  border: 1px solid $border-color;
  padding: 5px;
}
</style>