<template>
  <div class="tab-csr-reports">
    <tab-item-list :items="items" :categories="categories" />
  </div>
</template>

<script>
import filter from 'lodash/filter'
import TabItemList from '@/components/TabItemList.vue'

export default {
  name: 'TabCsrReports',
  components: {
    TabItemList
  },
  props: {
    company: {
      type: Object
    }
  },
  data () {
    return {
      itemName: 'csr',
      categories: ['Wages, Benefits, Contracts', 'Grievance Mechanism', 'Anti-Discrimination & Harassment', 'Prevention of Underage & Forced Labor', 'Freedom of Association & Collective Bargaining']
    }
  },
  computed: {
    items () {
      console.log(this.company.items);
      return filter(this.company.items, ['type', this.itemName])[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
