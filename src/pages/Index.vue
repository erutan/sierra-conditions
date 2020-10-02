<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        
        <h1 class="text-4xl text-center lg:text-5xl">Sierra Conditions</h1>
        
        <p class="text-xl font-medium text-center">Welcome to a collection of links & resources for those heading into the backcountry of the Sierra Nevada!</p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        
        <a href="/conditions/breaking/" class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Conditions
          </h3>
          <p class="text-lg text-left">
            A collection of sites &amp; best practices for finding beta on current conditions.
          </p>
        </a>

        <a href="/resources/official" class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Resources
          </h3>
          <p class="text-lg text-left">
            Links to some broader use resources to aid your backcountry experience.
          </p>
        </a>

        <a href="/about/" class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            About &amp; Contributing
          </h3>
          <p class="text-lg text-left">
            Feel like something's missing? Help fill it in...
          </p>
        </a>
        
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    SearchIcon
  },

  metaInfo() {
    const title = 'Backcountry Conditions for the Sierra Nevada';
    const description = 'Sierra Conditions is a collection of resources useful for getting backcountry information.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
