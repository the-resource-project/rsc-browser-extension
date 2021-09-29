<template>
  <div class="tabs-holder">
    <div v-if="currentTabComponent === 'tab-csr-reports'" class="tab pl-1 pt-2 border-top-0">
      <tab-csr-reports :company="company" />
    </div>

    <div v-if="currentTabComponent === 'tab-metrics'" class="tab pl-1 pt-2 border-top-0">
      <tab-metrics :company="company" />
    </div>

    <div v-if="currentTabComponent === 'tab-investigations'" class="tab pl-1 pt-2 border-top-0">
      <tab-investigations :company="company" />
    </div>
  </div>
</template>

<script>
import TabCsrReports from '@/components/TabCsrReports.vue'
import TabMetrics from '@/components/TabMetrics.vue'
import TabInvestigations from '@/components/TabInvestigations.vue'

export default {
  name: 'TabsHolder',
  components: {
    TabCsrReports,
    TabMetrics,
    TabInvestigations
  },
  props: {
    currentTabComponent: {
      type: String
    },
    company: {
      type: Object
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
