<template>
  <div>
    <h1>test2</h1>
    <ListItem :title="'Элемент списка'"></ListItem>
  </div>

</template>

<script>
import ListItem from "../base/coomponents/ListItem";

export default {
  name: "Todo",
  components: {ListItem},
}
</script>

<style scoped>

</style>