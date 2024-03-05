<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.add('dark')
})

</script>