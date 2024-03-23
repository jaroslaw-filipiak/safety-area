<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import { onMounted } from 'vue';
  // import { useMainStore } from './stores/main';
  const store = useMainStore();
  const formStore = useFormStore();

  onMounted(() => {
    document.body.classList.add('dark');
    store.fetchPricing();
  });
</script>
