<template>
  <div class="app">
    <div class="app__app-card card">
      <h3 class="app__app-card__app-header card-header">The Re:Source Project <br> </h3>
      <div v-if="company">
        <h1 class="app__app-card__company-name pl-3 pt-3">{{ company.name }}</h1>
        
        <ul class="app__app-card__app-nav nav nav-tabs justify-content-start">
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

<style lang="scss" scoped>
  .app {
    width: 400px;
    border: 0;

    &__app-card {
      background-color: #E5E5E5;
      border-radius: 0;

      &__app-header {
        height: 44px;
        background-color: #2347A4;
        border-radius: 0;
        color: #F1E8E8;
        padding: 0.75rem 0.75rem 2.75rem !important;
        border-bottom: 1px solid #2347A4 !important;
      }

      &__app-nav {
        border-color: black;
      }

      &__company-name {
        margin-bottom: 1rem !important;
      }

      .nav-tabs .nav-link, .nav-tabs .nav-link.active, .nav-tabs .nav-link:hover {
        border-radius: 0;
        border-bottom: 0;
        color: #000000;
        border-color: #000000;
      }

      .nav-tabs .nav-link.active {
        border-color: #000000;
        border-radius: 0;
        border-bottom: 2px solid #2347A4;
      }
    }
  }
</style>

