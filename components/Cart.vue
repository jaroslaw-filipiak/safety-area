<template>
  <div
    v-if="isCartOpen"
    class="fixed right-0 top-0 w-[393px] z-[499] bg-dark3 cart flex flex-col justify-between"
  >
    <header>
      <div
        class="cart__header bg-darkMain flex items-center justify-center relative h-[57px]"
      >
        <p class="text-[16px] font-light">Twoje zamówienie:</p>
        <button
          @click="isCartOpen = !isCartOpen"
          class="cart__hide bg-dark text-[12px] font-light p-[5px] flex items-center gap-[9px] rounded-[5px] absolute left-0 top-[50%] -translate-y-[50%]"
        >
          <p class="text-center">Zwiń</p>
          <div class="flex items-center gap-0">
            <svg
              class="-rotate-90 opacity-50"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-light stroke-light"
                d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z"
                stroke-width="0.5"
              />
            </svg>

            <svg
              class="-rotate-90 relative -left-[4px]"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z"
                fill="#F9F2E5"
                stroke="#F9F2E5"
                stroke-width="0.5"
              />
            </svg>
          </div>
        </button>
      </div>
      <div class="cart__items-wrapper flex flex-col gap-[2px]">
        <div
          v-for="item in cart"
          :key="item.id"
          class="cart__item flex items-center justify-between pl-[22px] pr-[22px] min-h-[57px] bg-dark border-l-red border-l-[2px]"
        >
          <div class="flex items-center gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.819"
              height="14.819"
              viewBox="0 0 14.819 14.819"
            >
              <g id="Edit_Icon" transform="translate(-779.261 -1011.304)">
                <line
                  id="Line_8"
                  data-name="Line 8"
                  x2="6.294"
                  transform="translate(787.786 1024.145)"
                  fill="none"
                  class="stroke-gray"
                  stroke-width="1.5"
                />
                <g
                  id="Path_316"
                  data-name="Path 316"
                  transform="translate(790.623 1011.304) rotate(45)"
                  fill="none"
                >
                  <path
                    d="M0,0H4.889V12.223l-2.4,3.845L0,12.223Z"
                    stroke="none"
                  />
                  <path
                    class="fill-gray"
                    d="M 1.499998092651367 1.499997138977051 L 1.499998092651367 11.77978992462158 L 2.467294692993164 13.27259922027588 L 3.389317989349365 11.7939338684082 L 3.389317989349365 1.499997138977051 L 1.499998092651367 1.499997138977051 M -1.9073486328125e-06 -1.9073486328125e-06 L 4.889317989349365 -1.9073486328125e-06 L 4.889317989349365 12.22328758239746 L 2.491608142852783 16.06853675842285 L -1.9073486328125e-06 12.22328758239746 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                    stroke="none"
                  />
                </g>
              </g>
            </svg>

            <p class="text-[14px] text-light">{{ item.title }}</p>
          </div>
          <div class="flex items-center gap-[22px]">
            <div class="text-[14px] text-light">{{ item.price }},-</div>
            <div class="cursor-pointer hover:opacity-90">
              <svg
                @click="store.removeFromCart(item.id)"
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
            </div>
          </div>
        </div>
      </div>
    </header>
    <footer>
      <div
        class="cart__discount pl-[23px] pr-[23px] pb-[20px]"
        v-if="!bonusForHugeOrder"
      >
        <p class="text-gray text-[14px]">
          Brakuje ci:
          <span class="text-white">{{ store.toBonusForHugeOrder }} PLN </span>
          do uzyskania
          <span class="text-red">5% rabatu</span>
        </p>
      </div>

      <div
        class="cart__discount pl-[23px] pr-[23px] pb-[20px]"
        v-if="bonusForHugeOrder"
      >
        <p class="text-gray text-[14px]">
          Otrzymujesz: <span class="text-red">5% rabatu </span> za zakupy
        </p>
        <p>
          powyżej <span class="text-white"> {{ hugeOrderFrom }} </span> PLN
        </p>
      </div>
      <!-- posiadasz kod rabatowy ? -->
      <div class="mb-[12px] pl-[17px] pr-[23px] relative">
        <input
          class="w-full pl-[20px] rounded-[8px] border-[2px] border-dark bg-darkMain h-[60px] placeholder-gray placeholder-[14px] text-[14px]"
          placeholder="Posiadasz kod rabatowy ?"
          type="text"
        />
        <button
          class="absolute w-[44px] h-[44px] bg-dark rounded-full right-[30px] top-[50%] -translate-y-[50%] flex items-center justify-center hover:bg-red transition-all"
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
            data-v-inspector="components/Search.vue:31:33"
            data-v-bdff7e2b=""
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
              data-v-inspector="components/Search.vue:34:37"
              data-v-bdff7e2b=""
            ></path>
            <path
              d="M12 5l0 14"
              data-v-inspector="components/Search.vue:35:37"
              data-v-bdff7e2b=""
            ></path>
            <path
              d="M5 12l14 0"
              data-v-inspector="components/Search.vue:36:37"
              data-v-bdff7e2b=""
            ></path>
          </svg>
        </button>
      </div>

      <!-- przedpłata -->
      <div class="mb-[24px] pl-[17px] pr-[23px] relative">
        <label for="prepayment" class="block cursor-pointer">
          <div
            class="bg-darkMain flex items-center justify-between rounded-[4px] h-[52px] pl-[20px] pr-[15px]"
            :class="
              prepaymentChecked
                ? 'border border-green accent-green'
                : 'border-transparent'
            "
          >
            <div class="flex items-center">
              <input
                type="checkbox"
                name="prepayment"
                id="prepayment"
                @change="store.updatePrepayment(prepaymentChecked)"
                v-model="prepaymentChecked"
              />
              <p
                class="text-[16px] font-medium text-light pl-[21px] selection:bg-none"
              >
                <span class="text-red">+5% rabatu</span>
                za przedpłatę?
              </p>
            </div>

            <div>
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
            </div>
          </div>
        </label>
      </div>
      <!-- przedplata -->

      <div class="cart__footer bg-dark p-[23px]">
        <div class="text-gray text-[14px] flex justify-end mb-[3px]">
          {{ store.getTotalPriceBrutto }} PLN brutto
        </div>
        <div class="flex items-end justify-between">
          <div class="text-[16px] text-light">Razem:</div>
          <div class="flex items-end gap-[12px]">
            <!-- TODO: -->
            <!-- <div class="text-[12px] text-red line-through relative -top-[5px]">
              2700 PLN
            </div> -->
            <div class="text-[22px] text-light">
              {{ store.getTotalPrice }} PLN netto
            </div>
          </div>
        </div>

        <!-- zamawiam  -->

        <div @mouseenter="handleButtonValidation" class="relative mt-[27px]">
          <button
            :disabled="!store.areAllFormsFilled"
            class="text-darkMain font-medium text-[16px] h-[75px] rounded-[38px] w-full relative"
            :class="
              store.areAllFormsFilled
                ? 'bg-red text-light'
                : 'pointer-none bg-light bg-opacity-[0.3]'
            "
          >
            Zamawiam z obowiązkiem realizacji
          </button>

          <div
            v-if="showValidationWarning"
            class="disabled-info w-[203px] bg-red rounded-[10px] text-light text-[12px] pt-[10px] pb-[10px] pl-[13px] pr-[13px] absolute -left-[70px] -top-[30px]"
          >
            <div class="relative">
              Aby złożyć zamówienie, wypełnij poprawnie wszystkie briefy
              projektowe.
              <div class="absolute right-0 top-0">
                <svg
                  @click="showValidationWarning = false"
                  class="cursor-pointer hover:opacity-80"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.483"
                  height="6.484"
                  viewBox="0 0 6.483 6.484"
                >
                  <g
                    id="x"
                    transform="translate(-4386.892 -2157.914) rotate(-45)"
                  >
                    <line
                      id="Line_25"
                      data-name="Line 25"
                      x2="7.669"
                      transform="translate(1572.291 4632.461)"
                      fill="none"
                      stroke="#f9f2e5"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_26"
                      data-name="Line 26"
                      x2="7.669"
                      transform="translate(1576.125 4628.627) rotate(90)"
                      fill="none"
                      stroke="#f9f2e5"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const prepaymentChecked = ref(false);
  const showValidationWarning = ref(false);

  const store = useMainStore();

  const { cart, isCartOpen, bonusForHugeOrder, hugeOrderFrom } =
    storeToRefs(store);

  const handleButtonValidation = () => {
    console.log('handleButtonValidation');

    if (store.areAllFormsFilled === true) {
      showValidationWarning.value = false;
    } else {
      showValidationWarning.value = true;
    }
  };
</script>

<style lang="scss" scoped>
  .cart {
    height: calc(100vh - 95px);
  }
</style>
