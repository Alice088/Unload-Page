<script setup lang="ts">

</script>

<template>
  <div class="mainSpace">
    <div class="mainSpace__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainSpace {
  grid-area: main;
  width: 100%;
  max-height: fit-content;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 5px;
}

.mainSpace__content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}


@include start-at(xslg) {
  .mainSpace {
    max-height: 100%;
  }
}
</style>