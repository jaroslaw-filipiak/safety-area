<!-- TODO: disable validaton on backend: https://contactform7.com/configuration-validator-faq/ -->

<!-- 
"title": "Projekt wizyt\u00f3wki firmowej",
 "id": 0
 [contact-form-7 id="b5c39b1" title="Projekt wizytówki firmowej"]
 _wpcf7_unit_tag: wpcf7-f68-p66-o1
 http://grafikonline.test/wp-json/contact-form-7/v1/contact-forms/65/feedback
s -->

<template>
  <code class="border p-3 mb-4 block">
    isFullyFilled: {{ isFullyFilled }} component number:
    {{ getComponentNumber(componentName) }}
    id: {{ ID }}
  </code>

  <div class="form-wrapper flex w-full border-red pt-3 pb-3">
    <div class="flex flex-col w-full">
      <div class="form-row">
        <label for="business_card_type">
          <p>Czy wizytówka powinna być tłoczona ?</p>
          <input
            v-model="businessCardIsEmbossed"
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
  const businessCardIsEmbossed = ref('');

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
    return businessCardIsEmbossed.value !== '';
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
