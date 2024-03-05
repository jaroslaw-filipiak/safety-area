<template>
    <div class="fixed right-0 top-0  w-[393px] z-[499]   bg-dark3 cart flex flex-col justify-between">
        <header>
            <div class="cart__header bg-darkMain  flex items-center  justify-center  relative h-[57px]">
                <p class="text-[16px] font-light">Twoje zamówienie:</p>
                <button
                    class="cart__hide bg-dark text-[12px] font-light p-[5px] flex items-center gap-[9px] rounded-[5px] absolute left-0 top-[50%] -translate-y-[50%]">
                    <p class="text-center">Zwiń</p>
                    <div class="flex items-center gap-0">
                        <svg class="-rotate-90 opacity-50 " width="10" height="6" viewBox="0 0 10 6" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-light stroke-light"
                                d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z" stroke-width="0.5" />
                        </svg>

                        <svg class="-rotate-90 relative -left-[4px]" width="10" height="6" viewBox="0 0 10 6"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z" fill="#F9F2E5"
                                stroke="#F9F2E5" stroke-width="0.5" />
                        </svg>

                    </div>
                </button>
            </div>
            <div class="cart__items-wrapper flex flex-col gap-[2px]">
                <div v-for="item in items" :key="item.id"
                    class="cart__item flex items-center justify-between pl-[22px] pr-[22px] min-h-[57px] bg-dark border-l-red border-l-[2px]">
                    <div class="flex items-center gap-[24px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.819" height="14.819"
                            viewBox="0 0 14.819 14.819">
                            <g id="Edit_Icon" transform="translate(-779.261 -1011.304)">
                                <line id="Line_8" data-name="Line 8" x2="6.294" transform="translate(787.786 1024.145)"
                                    fill="none" class="stroke-gray" stroke-width="1.5" />
                                <g id="Path_316" data-name="Path 316" transform="translate(790.623 1011.304) rotate(45)"
                                    fill="none">
                                    <path d="M0,0H4.889V12.223l-2.4,3.845L0,12.223Z" stroke="none" />
                                    <path class="fill-gray"
                                        d="M 1.499998092651367 1.499997138977051 L 1.499998092651367 11.77978992462158 L 2.467294692993164 13.27259922027588 L 3.389317989349365 11.7939338684082 L 3.389317989349365 1.499997138977051 L 1.499998092651367 1.499997138977051 M -1.9073486328125e-06 -1.9073486328125e-06 L 4.889317989349365 -1.9073486328125e-06 L 4.889317989349365 12.22328758239746 L 2.491608142852783 16.06853675842285 L -1.9073486328125e-06 12.22328758239746 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                                        stroke="none" />
                                </g>
                            </g>
                        </svg>

                        <p class="text-[14px] text-light"> {{ item.title }}</p>
                    </div>
                    <div class="flex items-center gap-[22px]">
                        <div class="text-[14px] text-light">{{ item.price }},-</div>
                        <div class="cursor-pointer hover:opacity-90"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-trash stroke-gray" width="19" height="19"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg></div>
                    </div>
                </div>
            </div>
        </header>
        <footer>
            <div class="cart__discount  pl-[23px] pr-[23px] pb-[23px]">
                <p class="text-gray text-[14px]">Brakuje ci: <span class="text-white">300,- </span> do uzyskania <span
                        class="text-red">5% rabatu</span></p>
            </div>
            <div class="cart__footer bg-dark p-[23px]">
                <div class="text-gray text-[14px] flex justify-end mb-[3px]">3 154,95 PLN brutto</div>
                <div class="flex items-end justify-between">
                    <div class="text-[16px] text-light">Razem:</div>
                    <div class="flex items-end gap-[12px]">
                        <div class="text-[12px] text-red line-through relative -top-[5px] ">2700 PLN</div>
                        <div class="text-[22px] text-light">2565 PLN netto</div>
                    </div>
                </div>


                <button
                    class="text-darkMain font-medium text-[16px] bg-light h-[75px] rounded-[38px] bg-opacity-[0.3] w-full mt-[27px]">Zamawiam
                    z obowiązkiem realizacji</button>
            </div>
        </footer>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
const items = ref([]);

onMounted(() => {
    items.value = [
        { id: 1, title: 'Projekt wizytówki firmowej', price: 200 },
        { id: 2, title: 'Projekt logotypu', price: 2500 },
       
    ]
})
</script>

<style lang="scss" scoped>
.cart {
    height: calc(100vh - 95px);
}
</style>