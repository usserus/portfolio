<template>
  <div class="py-14 bg-white text-black">
    <div v-editable="blok" class="text-5xl font-mono font-normal marquee uppercase" id="contact">
      <h1>{{ blok.heading }}</h1>
    </div>
    <div class="container mx-auto justify-items-center px-4 mt-20 font-mono font-light">
      <div class="flex flex-col max-w-3xl gap-8 mt-8">
        <div class="text-xl text-center">
          <div v-html="articleContent"></div>
        </div>
        <div class="flex justify-center gap-10">
          <a href="mailto:emil.dueringer@gmail.com" class="tooltip tooltip-neutral" data-tip="emil.dueringer@gmail.com">
            <Icon name="tdesign:mail" color="black" class="w-6 h-6" />
          </a>
          <a href="tel:+4369910652585" class="tooltip tooltip-neutral" data-tip="+4369910456285">
            <Icon name="tdesign:call" color="black" class="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/emil-düringer-0a9a661b9" target="_blank" rel="noopener noreferrer"
            class="tooltip tooltip-neutral" data-tip="Emil Düringer">
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_37_103)">
                <path
                  d="M0 1.79063C0 0.801563 0.821875 0 1.83594 0H23.1641C24.1781 0 25 0.801563 25 1.79063V23.2094C25 24.1984 24.1781 25 23.1641 25H1.83594C0.821875 25 0 24.1984 0 23.2094V1.79063ZM7.72344 20.9281V9.63906H3.97188V20.9281H7.72344ZM5.84844 8.09688C7.15625 8.09688 7.97031 7.23125 7.97031 6.14688C7.94687 5.03906 7.15781 4.19688 5.87344 4.19688C4.58906 4.19688 3.75 5.04063 3.75 6.14688C3.75 7.23125 4.56406 8.09688 5.82344 8.09688H5.84844ZM13.5172 20.9281V14.6234C13.5172 14.2859 13.5422 13.9484 13.6422 13.7078C13.9125 13.0344 14.5297 12.3359 15.5672 12.3359C16.925 12.3359 17.4672 13.3703 17.4672 14.8891V20.9281H21.2187V14.4531C21.2187 10.9844 19.3688 9.37188 16.9 9.37188C14.9094 9.37188 14.0172 10.4656 13.5172 11.2359V11.275H13.4922L13.5172 11.2359V9.63906H9.76719C9.81406 10.6984 9.76719 20.9281 9.76719 20.9281H13.5172Z"
                  fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_37_103">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(props.blok.description));

</script>

<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee h1 {
  animation: scroll-left 25s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
