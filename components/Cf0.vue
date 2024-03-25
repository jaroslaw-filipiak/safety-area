<!--
  {title: "Projekt logotypu", form_id_feedback: "314", price: "2500",…} 
 -->

<template>
  <div class="form-wrapper flex w-full border-red pt-3 pb-3">
    <div class="flex flex-col w-full">
      <div class="form-row">
        <label for="logo_color_preferences">
          <p>Preferowana kolorystyka logotypu</p>
          <input
            @input="
              formStore.updateFormField(
                'logo_color_preferences',
                'cf7_314',
                $event.target.value
              )
            "
            v-model="logoColorPreferences"
            name="logo_color_preferences"
            id="logo_color_preferences"
            type="text"
            placeholder="Preferowana kolorystyka logotypu"
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

  const logoColorPreferences = ref('');

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
    return logoColorPreferences.value !== '';
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
