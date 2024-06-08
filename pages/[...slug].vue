<template>
  <Navbar/>
  <StoryblokComponent
      v-if="story"
      :blok="story.content"
      :story-name="story.name"
  />
  <Footer/>
</template>

<script setup>
let {slug} = useRoute().params;


import {onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

onBeforeMount(() => {
  const slug = route.params.slug;
  if (slug && slug.includes('projects')) {
    document.body.classList.add('fade-background');
  }
});


// Render "home" story on root url (/)
if (slug === "") {
  slug = [`home`];
}

let story = null;

try {
  story = await useAsyncStoryblok(slug.join("/"), {
    version: "draft",
    resolve_links: "url",
  });
} catch (sbError) {
  const error = JSON.parse(sbError);

  throw createError({
    statusCode: error.status,
    statusMessage: error.response,
  });
}

</script>


<style>
.fade-background {
  background-color: black;
  color: #e5ded5;
  transition: background-color 2s ease
}

* {
  scroll-behavior: smooth;
}

</style>