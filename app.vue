<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import { onMounted } from 'vue';
  // import { useMainStore } from './stores/main';
  const store = useMainStore();

  onMounted(() => {
    document.body.classList.add('dark');
    store.fetchPricing();
  });
</script>
