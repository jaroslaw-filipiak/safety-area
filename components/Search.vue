<template>
  <section class="lg:mt-[140px] 2xl:mt-[240px] max-lg:w-full">
    <p
      class="text-light text-[18px] lg:text-[20px] text-center mb-5 mt-5 lg:mt-0"
    >
      Dodaj projekt
    </p>
    <div
      class="relative"
      :class="{ 'is-results-wrapper-visible': showList || searchTerm.length }"
    >
      <input
        class="results__input"
        type="text"
        placeholder="Wpisz frazę, lub wybierz z listy"
        v-model="searchTerm"
      />

      <div
        @click="showList = !showList"
        class="absolute right-[10px] lg:right-[17px] top-[13px] w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full bg-red lg:bg-dark flex items-center justify-center cursor-pointer transition-all results__btn"
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="results__svg rotate transition-all"
        >
          <path
            d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z"
            fill="#F9F2E5"
            stroke="#F9F2E5"
            stroke-width="0.5"
          />
        </svg>
      </div>

      <!-- results -->
      <div v-if="searchTerm.length || showList" class="results__wrapper">
        <ul
          @change="
            store.updateCart(selectedItems);
            showList = false;
          "
          class="bg-dark3"
        >
          <li
            v-for="item in store.filteredItems(searchTerm)"
            class="flex items-center justify-between pr-[13px] lg:pr-[28px] border-b-[1px] border-b-dark"
          >
            <div class="flex items-center w-full">
              <label
                class="w-full flex items-center justify-start h-[49px] pr-[13px] lg:pr-[28px] pl-[15px] lg:pl-[39px] cursor-pointer"
                :for="item.id"
              >
                <input
                  :id="item.id"
                  :name="item.title"
                  class="hidden lg:flex accent-red"
                  :value="item"
                  type="checkbox"
                  v-model="selectedItems"
                />
                <div class="text-[14px] lg:text-[16px] text-dark2 pl-4">
                  {{ item.title }}
                </div>
              </label>
            </div>

            <div class="flex items-center justify-center gap-[24px]">
              <div class="text-[14px] lg:text-[16px] text-light">
                {{ item.price }},-
              </div>
              <div
                class="lg:hidden w-[32px] h-[32px] rounded-full bg-red flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plus"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Boxes -->
      <BriefBoxes />
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const store = useMainStore();
  const searchTerm = ref('');
  const selectedItems = ref([]);
  const showList = ref(false);

  watch(selectedItems, (newSelectedItems) => {
    console.log('selected items changed... updating cart');
    store.updateCart(newSelectedItems);
  });

  watch(
    () => store.cart,
    (newCart) => {
      selectedItems.value = newCart;
    }
  );
</script>

<style lang="scss" scoped>
  .is-results-wrapper-visible {
    .results__wrapper {
      @apply border-t-0;

      ul {
        @apply rounded-b-[8px];
      }

      ul li {
        &:last-child {
          @apply rounded-b-[8px];
        }
      }
    }

    .results__input {
      @apply rounded-b-[0px];
    }

    .results__svg {
      @apply rotate-180;
    }

    .results__btn {
      @apply lg:bg-red;
    }
  }

  .results {
    &__input {
      @apply bg-dark3 rounded-[8px] text-[14px] text-gray placeholder-gray h-[75px] pl-[20px] lg:pl-[31px] border-[2px] border-dark lg:w-[951px] w-full;
    }

    &__wrapper {
      @apply border-[2px] border-dark rounded-b-[8px];

      ul li {
        &:hover {
          @apply bg-dark;
        }
      }
    }
  }
</style>
