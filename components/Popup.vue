<template>
    <div v-if="isVisible" class="bg-dark3 lg:absolute lg:left-[30px] lg:top-[210px] p-[21px] lg:w-[310px] z-50 ">
        <div class="popup__header flex items-center justify-between">
            <div class="flex items-center gap-[31px]">
                <svg class="fill-gray" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path id="Arrow_Icon" d="M0,0V8H8V7.018H1.677L7.994.7,7.3.006.983,6.323V0Z"
                        transform="translate(0 8) rotate(-90)" />
                </svg>

                <div class="text-[14px] font-medium text-gray uppercase">Informacja</div>
            </div>
            <div>
                <svg @click="isVisible = !isVisible" xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x stroke-gray cursor-pointer hover:opacity-85" width="18"
                    height="18" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>

            </div>
        </div>
        <div class="popup__content pt-[33px]">
            <p class="text-[14px] text-light leading-[24px]">Uporządkowana komunikacja wizualna marki pozwala
                skuteczniej ją
                prezentować i promować. Działamy według
                uporządkowanego schematu, dzięki któremu Twoja marka stanie się rozpoznawalna i zacznie budzić
                konkretne, oczekiwane skojarzenia u odbiorców.</p>
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue'

    const isVisible = ref(true)

</script>

<style lang="scss" scoped></style>
