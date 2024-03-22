<template>
  <div
    v-if="isBillingDetailsVisible"
    class="billing-details"
    :class="{ 'billing-details--has-overlay': hasBackdrop }"
  >
    <div class="window">
      <div class="window__top">
        <div class="flex items-center justify-center gap-5">
          <svg
            id="i"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g
              id="Ellipse_4"
              data-name="Ellipse 4"
              fill="none"
              stroke="#f9f2e5"
              stroke-width="1.5"
            >
              <circle cx="10" cy="10" r="10" stroke="none" />
              <circle cx="10" cy="10" r="9.25" fill="none" />
            </g>
            <line
              id="Line_33"
              data-name="Line 33"
              y2="5.676"
              transform="translate(10.406 9.149)"
              fill="none"
              stroke="#f9f2e5"
              stroke-width="1.5"
            />
            <line
              id="Line_34"
              data-name="Line 34"
              y2="1.703"
              transform="translate(10.406 5.175)"
              fill="none"
              stroke="#f9f2e5"
              stroke-width="1.5"
            />
          </svg>

          <div>Dane rozliczeniowe</div>
        </div>
        <div>
          <svg
            @click="closeBillingDetailsWindow"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x stroke-gray cursor-pointer hover:opacity-85"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div class="window__content">
        <div class="text-[22px]">
          Wybierz jedną z opcji<span class="text-red">*</span>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
        >
          <button
            @click="store.showNewClientForm()"
            class="window__btn window__btn--new-client"
          >
            Jestem nowym klientem
          </button>
          <button
            @click="store.showRegularClientForm()"
            class="window__btn window__btn--regular-client"
          >
            Jestem stałym klientem
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const store = useMainStore();
  const hasBackdrop = computed(() => store.hasBackdrop);

  const { isBillingDetailsVisible } = storeToRefs(store);

  const closeBillingDetailsWindow = () => {
    store.closeBillingDetails();
  };
</script>

<style lang="scss" scoped>
  .billing-details {
    @apply w-screen h-screen fixed left-0 top-0 z-[445]  flex items-center justify-center;

    .window {
      @apply w-11/12 lg:w-10/12 xl:w-6/12 bg-darkMain;
      &__top {
        @apply bg-dark h-[55px] flex items-center justify-between p-5 text-light text-[14px] gap-4;
      }
      &__content {
        @apply pt-[65px] pb-[65px]  pl-16 pr-16 flex flex-col items-center justify-center gap-10;
      }
      &__btn {
        @apply text-[14px] inline-flex items-center justify-center pt-[20px] pb-[20px] pl-10 pr-10 rounded-full w-full font-medium max-w-[400px];

        &--new-client {
          @apply bg-red text-light hover:bg-light hover:text-dark transition-all;
        }

        &--regular-client {
          @apply bg-light text-dark hover:bg-red hover:text-light transition-all;
        }
      }
    }

    &--has-overlay {
      @apply bg-black bg-opacity-50;
      backdrop-filter: blur(10px);
    }
  }
</style>
