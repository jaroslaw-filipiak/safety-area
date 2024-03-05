<template>
    <section class="top-bar fixed left-0 w-full z-[444] duration-1000 transition-all ">
        <div class="w-full xl:pr-5 2xl:pr-[43px] flex items-stretch justify-between h-[60px] lg:h-[128px]">
            <div class="max-xl:pl-5 lg:pl-[28px] xl:min-w-[180px] 2xl:min-w-[240px] flex items-center xl:opacity-0">
                <a href="">
                    <img class="w-[43px] min-w-[43px] lg:w-[55px]" src="/Logo_128px_GrafikOnlinePL_v2.gif"
                        alt="GrafikOnline logotyp" /></a>
            </div>

            <!-- mobile -->
            <div class="w-full text-[16px] text-light flex items-center justify-center xl:hidden">
                <p class="text-[12px] text-green font-medium pl-[32px] pr-[32px]">Jesteś w bezpiecznej strefie składania
                    zamówienia</p>
            </div>

            <div class=" w-[60px] lg:w-[110px] border-b-[0px] flex flex-none items-center justify-center xl:hidden">
                <div class="w-[34px] h-[34px] rounded-full bg-dark flex items-center justify-center rotate-90">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z" fill="#F9F2E5"
                            stroke="#F9F2E5" stroke-width="0.5" />
                    </svg>

                </div>
            </div>

            <!-- jesteś w bezpiecznej strefie -->
            <div
                class="absolute  left-[50%] top-[50%] desktop-menu on-scroll-initial hidden xl:flex items-center lg:w-6/12 xl:w-7/12 2xl:w-6/12 lg:pl-16 xl:pl-0 translate-y-[-50%] translate-x-[-50%] transition-all ">
                <div class="w-full flex lg:gap-[8px] xl:gap-[38px] 2xl:gap-[68px] h-full items-center justify-center">
                    <p class="text-[14px] text-green font-medium">Jesteś w bezpiecznej strefie składania zamówienia</p>
                </div>
            </div>

            <!-- right -->
            <div
                class="hidden xl:flex items-center justify-end gap-[24px] xl:gap-[10px] 2xl:gap-[24px] lg:w-6/12 xl:w-5/12 translate-y-0 transition-all desktop-menu__right ">
                <div class="flex items-center justify-start gap-[14px]">
                    <svg class="fill-gray stroke-gray rotate-90" width="10" height="6" viewBox="0 0 10 6" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.687 1L5.095 4.592L1.5 1L1 1.5L5.1 5.6L9.19 1.5L8.687 1Z" stroke-width="0.5" />
                    </svg>

                    <a href="#" class="text-gray text-[14px] hover:underline">Powrót do: GrafikOnline.PL</a>
                </div>
            </div>
        </div>

        <!-- TODO:  -->
        <!-- notification slider here -->
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
