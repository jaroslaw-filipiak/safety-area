<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue';
// import { useMainStore } from './stores/main';


onMounted(() => {
  document.body.classList.add('dark')
})

</script>