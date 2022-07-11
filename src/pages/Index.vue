<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        
        <h1 class="text-4xl text-center lg:text-5xl">Sierra Conditions Reports</h1>
        
        <p class="text-xl font-medium text-center">Welcome to a collection of links & resources for those heading into the backcountry of the Sierra Nevada!</p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        
          <p class="text-lg">
            A collection of sites &amp; best practices for finding beta on current conditions. Includes information on conditions specific to the <a href="/conditions/breaking" class="underline">current year</a> (permits, fires bans, etc) as well as general resources to help understand <a href="/conditions/snow" class="underline">snow & water levels</a>, <a href="/conditions/fire" class="underline">fire and smoke impacts</a>, <a href="/conditions/roads" class="underline">road conditions</a>, <a href="/conditions/weather" class="underline">weather forecasts</a>, where to find <a href="/conditions/trips" class="underline">trip reports</a>, and general <a href="/conditions/news" class="underline">news resources</a> for everything in between.
          </p>
        
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
