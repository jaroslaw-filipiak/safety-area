<template>
  <div class="mt-[20px] mb-20">
    <ul>
      <li
        @changeInBriefs="handleChangeInBriefs"
        v-for="item in cart"
        :key="item.id"
      >
        <BriefBox :item="item" :key="item.id" />
      </li>
    </ul>
  </div>
</template>

<script setup>
  const store = useMainStore();
  const { cart } = storeToRefs(store);

  const handleChangeInBriefs = (e) => {
    console.log('handleChangeInBriefs');
    console.log(e);
  };
</script>
