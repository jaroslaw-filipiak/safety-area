<template>
  <div class="mt-[20px] mb-20">
    <ul>
      <li v-for="item in cart" :key="item.id">
        <BriefBox :item="item" :key="item.id" />
      </li>
    </ul>
  </div>
</template>

<script setup>
  const store = useMainStore();
  const { cart } = storeToRefs(store);
</script>
