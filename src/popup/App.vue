<template>
  <div>
    <div class="card">
      <div class="card-header">
        Re:Source Project
      </div>
      <div class="card-body" v-if="company">
        {{ company.name }}
      </div>

      <div class="card-body" v-else>
        Oops! We don't have that company in our database yet.
      </div>
    </div>
  </div>
</template>

<script>
import filter from 'lodash/filter'
import companies from '@/data/companies.json'

export default {
  name: 'App',
  data () {
    return {
      company: null
    }
  },
  created () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      const url = new URL(tabs[0].url);
      const company = filter(companies, ['url', url.hostname])
      this.company = company[0]
    })
  }
}
</script>

<style>
  html {
    width: 400px;
    height: 800px;
  }
</style>
