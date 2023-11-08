<script setup>
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa.offlineReady) {
    console.log('App ready to work offline')
  }
})
</script>

<template>
  <div>
    <VitePwaManifest />
    <p>Hello world</p>
    <!-- You can use $pwa directly in templates! -->
    <div v-show="$pwa.needRefresh">
      <span>
        New content available, click on reload button to update.
      </span>

      <button @click="$pwa.updateServiceWorker()">
        Reload
      </button>
    </div>
  </div>
</template>
