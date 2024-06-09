<template>

  <div class="my-14">

  <div v-editable="blok" class="text-5xl font-mono font-normal marquee uppercase" id="contact">
    <h1>{{ blok.heading }}</h1>
  </div>

  <div class="container mx-auto px-4 mt-20 font-mono font-light">

    <div class="grid lg:grid-cols-2 gap-4 mt-8">

      <div class="text-xl">
        <div v-html="articleContent"></div>
      </div>

      <form action="mailto:emil.dueringer@gmail.com" method="post" enctype="text/plain">
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="floating_first_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_first_name"
                   class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
              name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="floating_last_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_last_name"
                   class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
              name</label>
          </div>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input type="email" name="floating_email" id="floating_email"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_email"
                 class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
            address</label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <label for="message" class="block mb-2 text-sm text-gray-400">Message</label>
          <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-xs text-gray-900 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                    placeholder="...."/>
        </div>

        <button type="submit"
                class="relative px-5 py-2 overflow-hidden text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group">
          <span
              class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span
              class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span
              class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span
              class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span
              class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span
              class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Submit request</span>
        </button>

      </form>

    </div>

  </div>

  </div>


</template>

<script setup>

const props = defineProps({blok: Object});
const articleContent = computed(() => renderRichText(props.blok.description));

</script>

<style scoped>

.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee h1 {
  animation: scroll-left 12s linear infinite;
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
