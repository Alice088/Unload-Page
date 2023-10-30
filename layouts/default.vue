<template>
  <div id="app" theme="default">
    <div class="layout">
      <Header />

      <Navbar />

      <div class="content">
        <slot />

        <Footer />
      </div>
    </div>
  </div>
</template>
