<script setup lang="ts">
defineProps<{
  customIf?: boolean;
}>()
</script>

<template>
  <div class="cardPanel">
    <div v-if="$props.customIf ?? true" class="cardPanel__list"><slot /></div>
    <div v-else class="cardPanel__loading">загрузка...</div>
  </div>
</template>

<style scoped lang="scss">

.cardPanel {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: max-content;
  grid-area: panel;
}

.cardPanel__list {
  display: flex;
  overflow: visible;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  height: 100%;
}

.cardPanel__loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@include start-at(xslg) {
  .cardPanel__list {
    overflow: scroll;
  }
}

</style>