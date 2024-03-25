<!-- 
{1: title: "Projekt wizytówki", form_id_feedback: "68", price: "200",…}
-->

<template>
  <div class="form-wrapper flex w-full border-red pt-3 pb-3">
    <div class="flex flex-col w-full">
      <div class="form-row">
        <label for="business_card_type">
          <p>Typ wizytówki</p>
          <input
            @input="
              formStore.updateFormField(
                'business_card_type',
                'cf7_68',
                $event.target.value
              )
            "
            v-model="businessCardType"
            name="business_card_type"
            id="business_card_type"
            type="text"
            placeholder="typ wizytówki"
          />
          <!-- <div class="text-red mt-1">Validacja error</div> -->
        </label>
      </div>

      <div class="form-row">
        <label for="business_card_weight">
          <p>Gramatura papieru</p>
          <input
            @input="
              formStore.updateFormField(
                'business_card_weight',
                'cf7_68',
                $event.target.value
              )
            "
            v-model="businessCardWeight"
            name="business_card_weight"
            id="business_card_weight"
            type="text"
            placeholder="np.200g"
          />
          <!-- <div class="text-red mt-1">Validacja error</div> -->
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const store = useMainStore();
  const formStore = useFormStore();

  const isFullyFilled = ref(false);
  const businessCardType = ref('');
  const businessCardWeight = ref('');

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
    return businessCardType.value !== '' && businessCardWeight.value !== '';
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
