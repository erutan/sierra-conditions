<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        
        <h1 class="text-4xl text-center lg:text-5xl">Sierra Nevada Condition Reports</h1>
        
        <p class="text-xl font-medium text-center">Welcome to a collection of links & resources for those heading into the backcountry of the Sierra Nevada!</p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>
        
          <p class="text-lg">
            A collection of sites &amp; best practices for finding beta on current conditions. Includes information on conditions specific to the:
          </p> 

          <ul>
            <li><a href="/conditions/breaking" class="underline">current year</a> (permits, fires bans, etc)</li>
            <li><a href="/conditions/snow" class="underline">current snow & water levels</a></li>
            <li><a href="/conditions/fire" class="underline"> fire and smoke impacts</a></li>
            <li><a href="/conditions/roads" class="underline">road conditions</a></li>
            <li><a href="/conditions/weather" class="underline">weather forecasting tips</a></li>
            <li><a href="/conditions/reports" class="underline">trip & conditions reports</a></li>
            <li><a href="/conditions/news" class="underline">news resources in the Sierra</a></li>
          </ul>

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
