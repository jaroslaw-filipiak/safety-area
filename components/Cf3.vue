<!-- TODO: disable validaton on backend: https://contactform7.com/configuration-validator-faq/ -->

<!-- 
"title": "Landing page",
 "id": 3
 [contact-form-7 id="b5c39b1" title="Projekt wizytówki firmowej"]
 _wpcf7_unit_tag: wpcf7-f68-p66-o1
 https://j-filipiak.pl/clients/grafikonline/wp-json/contact-form-7/v1/contact-forms/65/feedback
s -->

<template>
  <div class="form-wrapper flex w-full border-red pt-3 pb-3">
    <div class="flex flex-col w-full">
      <div class="form-row">
        <label for="business_card_type">
          <p>Czy Landing Page ma być wykonany w wersji respnsywnej ?</p>
          <input
            v-model="hasLandingRWD"
            name="business_card_type"
            id="business_card_type"
            type="text"
            placeholder="np. ze złotym grawerem ?"
          />
          <div class="text-red mt-1">Validacja error</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const store = useMainStore();

  const isFullyFilled = ref(false);
  const hasLandingRWD = ref('');

  // Get the file path dynamically
  const filePath = import.meta.url;

  // Extract the component name from the file path
  const componentName = filePath.split('/').pop().split('.')[0];
  const getComponentNumber = (componentName) => {
    const regex = /\d+/;
    const match = componentName.match(regex);
    return match ? parseInt(match[0]) : null;
  };

  const ID = getComponentNumber(componentName);

  // Check if form is fully filled
  const areAllFieldsFilled = computed(() => {
    return hasLandingRWD.value !== '';
  });

  // Update isFullyFilled value
  watch(areAllFieldsFilled, (value) => {
    isFullyFilled.value = value;
  });

  watch(isFullyFilled, (value) => {
    value ? store.addFormFilled(ID) : store.removeFormFilled(ID);
  });
</script>

<style lang="scss" scoped>
  .form-wrapper {
    .form-row {
      @apply mb-6;
      p {
        @apply text-[14px] mb-4;
      }
    }
    input {
      @apply w-full h-[60px] rounded-[4px] bg-dark pl-[25px] pr-[25px] placeholder:text-gray;
    }
  }
</style>
