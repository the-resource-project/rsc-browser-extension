<template>
  <div>
    <div class="card">
      <div class="card-header">
        Re:Source Project
      </div>
      <div class="card-body" v-if="company">
        <p class="py-4">
          {{ company.name }}
        </p>

        <ul class="nav nav-tabs justify-content-start">
          <li class="nav-item" v-for="category in categories" v-bind:id="formatTabId(category)" :key="category">
            <a :class="{ active: currentTab === category }" class="nav-link tablinks" href="#" @click="currentTab = category">
              {{ category }}
            </a>
          </li>
        </ul>

        <tabs-holder :currentTabComponent="currentTabComponent" :company="company" />
      </div>

      <div class="card-body" v-else>
        Oops! We don't have that company in our dataset yet.
      </div>

      <div class="card-footer text-muted">
        Project links go here
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from 'lodash'
import companies from '@/data/companies.json'
import TabsHolder from '@/components/TabsHolder.vue'

const CATEGORIES = ["CSR Reports", "Metrics", "Investigations"]

export default {
  name: 'App',
  components: {
    TabsHolder
  },
  data () {
    return {
      company: null,
      currentTab: CATEGORIES[0],
      categories: CATEGORIES
    }
  },
  computed: {
    currentTabComponent () {
      let str = this.currentTab
      str = str.replace(/\W+/g, '-').toLowerCase()
      return 'tab-' + str
    }
  },
  methods: {
    formatTabId (name) {
      return 'tab-' + name.replace(/\W+/g, '-').toLowerCase()
    }
  },
  created () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      const url = new URL(tabs[0].url)
      const company = filter(companies, (company) => {
        const urls = company.known_urls.split(',')
        return urls.includes(url.hostname)
      })
      this.company = company[0]
    })
  }
}
</script>

<style>
  html {
    width: 400px;
  }
</style>
