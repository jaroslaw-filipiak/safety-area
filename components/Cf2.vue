<!-- TODO: disable validaton on backend: https://contactform7.com/configuration-validator-faq/ -->

<!-- 
"title": "Projekt wizyt\u00f3wki firmowej",
 "id": 0
 [contact-form-7 id="b5c39b1" title="Projekt wizytówki firmowej"]
 _wpcf7_unit_tag: wpcf7-f68-p66-o1
 http://grafikonline.test/wp-json/contact-form-7/v1/contact-forms/65/feedback
s -->

<template>
  <div class="form-wrapper flex w-full border-red pt-3 pb-3">
    <div class="flex flex-col w-full">
      <div class="form-row">
        <label for="business_card_type">
          <p>Co ma się znajdować na ulotce ?</p>
          <input
            name="business_card_type"
            id="business_card_type"
            type="text"
            placeholder="np. ze złotym grawerem ?"
          />
          <div class="text-red mt-1">Validacja error</div>
        </label>
      </div>
      <div class="form-row">
        <label for="business_card_type">
          <p>Czy to ma być ulotka DL ?</p>
          <input
            name="business_card_type"
            id="business_card_type"
            type="text"
            placeholder="np. ze złotym grawerem ?"
          />
          <div class="text-red mt-1">Validacja error</div>
        </label>
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
