<template>
  <div
    v-if="isNewClientFormVisible"
    class="new-client-form"
    :class="{ 'new-client-form--has-overlay': hasBackdrop }"
  >
    <div class="window">
      <div class="window__top">
        <div class="flex items-center justify-center gap-5">
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

          <div>
            Dane rozliczeniowe <span class="text-red">(Nowy Klient)</span>
          </div>
        </div>
        <div>
          <svg
            @click="closeNewClientFormWindow"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x stroke-gray cursor-pointer hover:opacity-85"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div class="window__content">
        <div class="form-wrapper flex w-full border-red pt-3 pb-3">
          <div class="flex flex-col w-full">
            <!-- row name_surname + company_name -->
            <div class="form-row">
              <label for="name_surname">
                <p>Imię i nazwisko</p>
                <input
                  @input="
                    formStore.updateFormField(
                      'name_surname',
                      $event.target.value
                    )
                  "
                  v-model="name_surname"
                  name="name_surname"
                  id="name_surname"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
              <label for="company_name">
                <p>Nazwa firmy</p>
                <input
                  @input="
                    formStore.updateFormField(
                      'company_name',
                      $event.target.value
                    )
                  "
                  v-model="company_name"
                  name="company_name"
                  id="company_name"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
            </div>

            <!-- row nip + city -->
            <div class="form-row">
              <label for="nip">
                <p>NIP</p>
                <input
                  @change="
                    formStore.updateFormField('nip', $event.target.value)
                  "
                  v-model="nip"
                  name="nip"
                  id="nip"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
              <label for="city">
                <p>Miejscowość</p>
                <input
                  @input="
                    formStore.updateFormField('city', $event.target.value)
                  "
                  v-model="city"
                  name="city"
                  id="city"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
            </div>

            <!-- row postal_code + street -->
            <div class="form-row">
              <label for="postal_code">
                <p>Kod Pocztowy</p>
                <input
                  @change="
                    formStore.updateFormField(
                      'postal_code',
                      $event.target.value
                    )
                  "
                  v-model="postal_code"
                  name="postal_code"
                  id="postal_code"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
              <label for="street">
                <p>Ulica</p>
                <input
                  @change="
                    formStore.updateFormField('street', $event.target.value)
                  "
                  v-model="street"
                  name="street"
                  id="street"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
            </div>

            <!-- row email + phone -->
            <div class="form-row">
              <label for="email">
                <p>Adres e-mail</p>
                <input
                  @change="
                    formStore.updateFormField('email', $event.target.value)
                  "
                  v-model="email"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
              <label for="phone">
                <p>Numer Telefonu</p>
                <input
                  @change="
                    formStore.updateFormField('phone', $event.target.value)
                  "
                  v-model="phone"
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Wpisz treść"
                />
                <!-- <div class="text-red mt-1">Validacja error</div> -->
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="window__bottom">
        <div class="separator border-t-[1px] border-dark mb-6"></div>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex flex-col md:flex-row items-center gap-7">
            <div class="window__details">
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
              <div>Polityka prywatności</div>
            </div>
            <div class="window__accept flex items-center">
              <div>
                <label
                  :for="privacy_policy_accepted"
                  class="flex items-center gap-5 cursor-pointer"
                >
                  <!-- @change="store.addBriefAccepted(item.id)" -->
                  <input
                    @change="
                      formStore.updateFormField(
                        'privacy_policy_accepted',
                        acceptedPrivacyPolicy
                      )
                    "
                    class="accent-green"
                    v-model="acceptedPrivacyPolicy"
                    :id="privacy_policy_accepted"
                    :name="privacy_policy_accepted"
                    type="checkbox"
                  />
                  <p class="required-char selection:bg-none">Zaakceptuj</p>
                </label>
              </div>
            </div>
          </div>

          <div
            @click="isOpen = !isOpen"
            class="window__fill-brief flex items-center justify-between mt-10 md:mt-0"
          >
            <button
              :disabled="!acceptedPrivacyPolicy"
              class="disabled:pointer-events-none group"
              @click="submit"
            >
              <!-- !isBriefAccepted -->
              <span
                class="flex items-center justify-between text-light text-[14px] cursor-pointer pl-[24px] pr-[24px] selection:bg-none bg-red rounded-full h-[50px] min-w-[188px] hover:opacity-90 transition-all group-disabled:bg-dark group-disabled:opacity-50"
              >
                Zamawiam
                <span class="pl-4">
                  <svg
                    class="scale-[70%] -rotate-90"
                    width="14.993"
                    height="14.993"
                    viewBox="0 0 14.993 14.993"
                  >
                    <path
                      class="fill-light"
                      id="Arrow_Down"
                      d="M0,0V10.6H10.6V9.3H2.223L10.594.929,9.674.008,1.3,8.38V0Z"
                      transform="translate(0 7.496) rotate(-45)"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const store = useMainStore();
  const formStore = useFormStore();
  const hasBackdrop = computed(() => store.hasBackdrop);
  const acceptedPrivacyPolicy = ref(false);

  const { isNewClientFormVisible } = storeToRefs(store);
  const { privacy_policy_accepted } = formStore;

  const closeNewClientFormWindow = () => {
    store.closeNewClientForm();
  };

  watch(acceptedPrivacyPolicy, (value) => {
    acceptedPrivacyPolicy.value = value;
  });

  const submit = () => {
    formStore.getFormsInfo.map((item) => {
      formStore.sendForm(item.form_id_feedback);
    });
  };
</script>

<style lang="scss" scoped>
  .new-client-form {
    @apply w-full md:w-screen md:h-full md:fixed md:left-0 md:top-0 z-[445]  flex items-center justify-center;

    .window {
      @apply w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 2xl:max-w-[960px] bg-darkMain;
      &__top {
        @apply bg-dark h-[55px] flex items-center justify-between p-5 text-light text-[14px] gap-4;
      }
      &__content {
        @apply pt-[14px] pl-[23px] pr-[23px] flex flex-col items-center justify-center gap-6;
      }
      &__bottom {
        @apply pb-[25px] pl-[23px] pr-[23px];
      }
      &__details {
        @apply text-light text-[14px] lg:underline flex items-center gap-[10px] cursor-pointer hover:opacity-65 underline-offset-8;

        svg {
          @apply scale-75;
        }
      }
      &__btn {
        @apply text-[14px] inline-flex items-center justify-center pt-[20px] pb-[20px] pl-10 pr-10 rounded-full w-full font-medium max-w-[400px];

        &--new-client {
          @apply bg-red text-light hover:bg-light hover:text-dark transition-all;
        }

        &--regular-client {
          @apply bg-light text-dark hover:bg-red hover:text-light transition-all;
        }
      }
    }

    &--has-overlay {
      @apply bg-black bg-opacity-50;
      backdrop-filter: blur(10px);
    }
  }

  // TODO: DRY RULE , formwrapper in CF components
  .form-wrapper {
    .form-row {
      @apply mb-6 flex flex-col sm:flex-row items-center justify-between gap-6;
      p {
        @apply text-[14px] mb-4;
      }

      label {
        @apply w-full;
      }
    }
    input {
      @apply w-full h-[60px] rounded-[4px] bg-dark pl-[25px] pr-[25px] placeholder:text-gray;
    }
  }
</style>
