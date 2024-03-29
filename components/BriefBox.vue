<template>
  <div
    class="brief-box"
    :id="item.id"
    :class="{
      'brief-box--accepted': isBriefAccepted,
    }"
  >
    <div class="brief-box__top">
      <div class="brief-box__top--title">{{ item.title }}</div>
      <div class="flex items-center justify-end gap-[60px]">
        <div
          @click="store.removeFromCart(item.id)"
          class="brief-box__top--remove cursor-pointer hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-trash stroke-gray"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          <div>Usuń</div>
        </div>
        <div class="brief-box__top--price">
          Cena netto <span>{{ item.price }},-</span>
        </div>
      </div>
    </div>
    <div class="divider border border-dark mt-[18px] mb-[28px]"></div>

    <div v-show="isOpen">
      <component :is="`Cf${item.id}`" />
    </div>

    <div class="brief-box__bottom">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-7">
          <div class="brief-box__details">
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
            <div>Szczegóły usługi</div>
          </div>
          <div class="brief-box__accept flex items-center">
            <div>
              <label
                :for="`accept-terms-for-${item.id}`"
                class="flex items-center gap-5 cursor-pointer"
              >
                <!-- @change="store.addBriefAccepted(item.id)" -->
                <input
                  class="accent-green"
                  v-model="accepted"
                  :id="`accept-terms-for-${item.id}`"
                  :name="`accept-terms-for-${item.id}`"
                  type="checkbox"
                />
                <p class="required-char selection:bg-none">Zaakceptuj</p>
              </label>
            </div>
          </div>
        </div>

        <div
          @click="isOpen = !isOpen"
          class="brief-box__fill-brief flex items-center justify-between"
        >
          <div>
            <!-- !isBriefAccepted -->
            <span
              class="h-[40px] rounded-[6px] flex items-center justify-between text-light text-[14px] cursor-pointer pl-[17px] pr-[17px] selection:bg-none"
              :class="{
                'bg-red': !isOpen,
                'bg-green bg-opacity-50 selection:bg-none': isOpen,
              }"
              v-if="!isBriefAccepted"
            >
              {{ !isOpen ? 'Wypełnij Brief' : 'Gotowe - zwiń kartę' }}
              <span class="pl-4" v-if="isOpen">
                <IconCircleCheck />
              </span>
              <span class="pl-4" v-if="!isOpen">
                <IconEdit />
              </span>
            </span>

            <!-- isBriefAccepted -->
            <span
              class="h-[40px] rounded-[6px] flex items-center justify-between text-light text-[14px] cursor-pointer pl-[17px] pr-[17px]"
              :class="{
                'bg-dark': !isOpen,
                'bg-green bg-opacity-50 selection:bg-none': isOpen,
              }"
              v-if="isBriefAccepted"
            >
              {{ !isOpen ? 'Edytuj' : 'Gotowe - zwiń kartę' }}

              <span class="pl-4" v-if="isOpen">
                <IconCircleCheck />
              </span>
              <span class="pl-4" v-if="!isOpen">
                <IconEdit />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const isOpen = ref(false);
  const accepted = ref(false);
  const store = useMainStore();
  const props = defineProps({
    item: Object,
  });

  watch(accepted, (value) => {
    console.log('accepted change..');
    value
      ? store.addBriefAccepted(props.item.id)
      : store.removeBriefAccepted(props.item.id);
  });

  const isBriefAccepted = computed(() => {
    console.log('isBriefAccepted change..');
    console.log(props.item.id);
    return store.cart.some(
      (cartItem) => cartItem.id === props.item.id && cartItem.briefAccepted
    );
  });
</script>

<style lang="scss" scoped>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .brief-box {
    @apply bg-dark3 p-[24px] border-[2px] border-dark lg:w-[951px] w-full mb-5;

    &__top {
      @apply flex justify-between items-center;
      &--title {
        @apply text-[24px] text-light;
      }

      &--remove {
        @apply text-gray text-[14px] flex items-center gap-[10px] relative;

        &::after {
          content: '';
          @apply absolute bottom-0 -right-[30px] bg-dark;
          display: block;
          width: 1px;
          height: 100%;
        }
      }
      &--price {
        @apply text-gray text-[14px] flex items-center gap-[10px];
        span {
          @apply text-[20px] text-light;
        }
      }
    }

    &__details {
      @apply text-light text-[14px] underline flex items-center gap-[10px] cursor-pointer hover:opacity-65 underline-offset-8;

      svg {
        @apply scale-75;
      }
    }

    // &__fill-brief {
    //   @apply h-[40px] rounded-[6px] flex items-center justify-between text-light text-[14px] cursor-pointer pl-[17px] pr-[17px];
    // }

    &--accepted {
      @apply border-green;
    }
  }
</style>
