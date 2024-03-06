<template>
  <div class="mt-[20px] mb-20">
    <ul>
      <li>
        <div class="brief-box">
          <div class="brief-box__top">
            <div class="brief-box__top--title">Projekt wizytówki firmowej</div>
            <div class="flex items-center justify-end gap-[60px]">
              <div class="brief-box__top--remove">
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
                <div>Usuń</div>
              </div>
              <div class="brief-box__top--price">
                Cena netto <span>200,-</span>
              </div>
            </div>
          </div>
          <div class="divider border border-dark mt-[18px] mb-[28px]"></div>
          <div class="brief-box__bottom">
            <div class="flex items-center justify-between">
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
              <div class="brief-box__fill-brief">
                <div>Wypełnij brief</div>
                <div>
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
                        stroke="#f9f2e5"
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
                          d="M 1.499998092651367 1.499997138977051 L 1.499998092651367 11.77978992462158 L 2.467294692993164 13.27259922027588 L 3.389317989349365 11.7939338684082 L 3.389317989349365 1.499997138977051 L 1.499998092651367 1.499997138977051 M -1.9073486328125e-06 -1.9073486328125e-06 L 4.889317989349365 -1.9073486328125e-06 L 4.889317989349365 12.22328758239746 L 2.491608142852783 16.06853675842285 L -1.9073486328125e-06 12.22328758239746 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                          stroke="none"
                          fill="#f9f2e5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const store = useMainStore();
  const { cart } = storeToRefs(store);
</script>

<style lang="scss" scoped>
  .brief-box {
    @apply bg-dark3 p-[24px] border-[2px] border-dark lg:w-[951px] w-full;

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
      @apply text-light text-[14px] underline flex items-center gap-[10px] cursor-pointer hover:opacity-65;
    }

    &__fill-brief {
      @apply bg-red w-[155px] h-[40px] rounded-[6px] flex items-center justify-between text-light text-[14px] cursor-pointer pl-[17px] pr-[17px];
    }
  }
</style>
