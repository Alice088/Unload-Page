<script setup lang="ts">
</script>

<template>
<div class="block">
  <slot />
</div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 15px;
  margin: 1px;
  row-gap: 5px;
  border-radius: 3px;
  color: var(--brand_color);
}
</style>