<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        
        <h1 class="text-4xl text-center lg:text-5xl">Sierra Conditions</h1>
        
        <p class="text-xl font-medium text-center">Welcome to a collection of links & resources for those heading into the backcountry of the Sierra Nevada!</p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        
        <a href="/conditions/breaking/" class="flex flex-col items-center w-full">
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Conditions
          </h3>
          <p class="text-lg">
            A collection of sites &amp; best practices for finding beta on current conditions. Includes information on conditions specific to the <a href="/conditions/breaking">current year</a> (permits, fires bans, etc) as well as general resources to help understand <a href="/conditions/snow">snow & water levels</a>, <a href="/conditions/fire">fire and smoke impacts</a>, <a href="/conditions/roads">road conditions</a>, <a href="/conditions/weather">weather forecasts</a>, where to find <a href="/conditions/trips">trip reports</a>, and general <a href="/conditions/news">news resources</a> for everything in between.
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
