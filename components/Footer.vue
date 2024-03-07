<template>

    <footer class=" bg-dark3 h-[95px] flex flex-col lg:flex-row items-center justify-center relative">
        <div
            class="text-light font-medium text-[14px] lg:text-[16px] lg:absolute top-[50%] left-5 lg:left-[28px] translate-y-[-50%]">
            GrafikOnline <span class="text-[8px] relative -top-4">pl</span>
        </div>
        <div class=" flex items-center justify-center gap-[26px] lg:gap-[112px]">
            <div class="order-2 lg:order-1">
                <a class="text-gray text-[12px] lg:text-[14px] underline" href="#">Polityka prywatności</a>
            </div>
            <div class="order-1 lg:order-2">
                <p class="text-gray text-[12px] lg:text-[13px] footer__date relative ">© 2017 - 2024</p>
            </div>
            <div class="order-3 hidden lg:flex">
                <p class="text-gray text-[12px] lg:text-[13px] ">All Right Reserved</p>
            </div>
        </div>
    </footer>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer__date {
    &::after {
        content: '';
        width: 2px;
        height: 10px;
        @apply bg-dark absolute -right-[13px] lg:-right-[56px] top-[5px];
    }

    &::before {
        content: '';
        width: 2px;
        height: 10px;
        @apply bg-dark absolute -left-[56px] top-[5px] hidden lg:block;
    }
}
</style>