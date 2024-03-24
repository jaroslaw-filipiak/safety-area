<template>
  <div class="flex items-center justify-center">
    <div class="loader"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid #0000;
    // border-right-color: #ffa50097;
    position: relative;
    animation: l24 1s infinite linear;
    @apply border-r-red;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
  }
  .loader:after {
    animation-duration: 4s;
  }
  @keyframes l24 {
    100% {
      transform: rotate(1turn);
    }
  }
</style>
