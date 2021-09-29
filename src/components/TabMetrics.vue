<template>
  <div class="tab-metrics">
  </div>
</template>

<script>

export default {
  name: 'TabMetrics',
  components: {
  },
  props: {
    company: {
      type: Object
    }
  },
  data () {
    return {
      categories: ['Wages, Benefits, Contracts', 'Grievance Mechanism', 'Anti-Discrimination & Harassment', 'Prevention of Underage & Forced Labor', 'Freedom of Association & Collective Bargaining']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
