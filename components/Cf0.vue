<!-- [contact-form-7 id="9e0fa7f" title="Projekt logotypu firmowego"] -->
<template>
  <div class="form-wrapper flex w-full border-red pt-3 pb-3">
    <div class="flex flex-col w-full">
      <div class="form-row">
        <p>Podaj nazwę działalności jaka ma znależć się w projekcie</p>
        <input type="text" placeholder="np. GrafikOnline.PL" />
      </div>
      <div class="form-row">
        <p>Dodać slogan / rok założenia itp. ?</p>
        <input
          type="text"
          placeholder="np.Dbamy o Wizualną Część Twojej Firmy"
        />
      </div>
      <div class="form-row">
        <p>Wybierz stylistykę projektu</p>
        <input type="text" placeholder="Wyvierz z listy" />
      </div>
      <div class="form-row">
        <p>Wybierz Kolorsytykę projektu</p>
        <input type="text" placeholder="Wyvierz z listy" />
      </div>
      <div class="form-row">
        <p>Dodatkowy opis</p>
        <input type="text" placeholder="Wyvierz z listy" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .form-wrapper {
    .form-row {
      @apply mb-6;
      p {
        @apply text-[14px] mb-4;
      }
    }
    input {
      @apply w-full h-[60px] rounded-[4px] bg-dark pl-[25px] pr-[25px] placeholder:text-gray;
    }
  }
</style>
