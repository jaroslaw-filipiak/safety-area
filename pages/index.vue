<template>
    <section class="content dark:text-light flex items-start justify-start relative ">

        <Aside />
        <Cart />

        <main
            class="z-50 w-full max-w-[100vw] overflow-hidden bg-darkMain pt-[70px] 2xl:pt-[128px] flex flex-col lg:flex-row items-start lg:items-start  justify-start lg:justify-center safety-area__main ">
            <Popup />
            <Search />

        </main>
    </section>
</template>

<script setup>

definePageMeta({
    layout: 'default'
})
</script>


<style>
.safety-area__main {
    min-height: calc(100vh - 95px);
    @apply max-xl:pl-5 lg:pl-[28px] max-xl:pr-[13px];
}
</style>