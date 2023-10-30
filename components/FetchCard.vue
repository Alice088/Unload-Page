<script setup lang="ts">
defineProps<{
  success?: boolean
}>()
</script>

<template>
  <Card :style="{ borderLeftColor: $props.success ? 'var(--color_success)' : 'var(--color_danger)' }">
    <slot />
  </Card>
</template>

<style scoped lang="scss">
div {
  border-left: 10px solid;
}
</style>