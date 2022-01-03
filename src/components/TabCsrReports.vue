<template>
  <div class="tab-csr-reports">
    <tab-item-list :subcategories="subcategories" />
  </div>
</template>

<script>
import { filter } from 'lodash'
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
      categoryType: '1',
    }
  },
  computed: {
    subcategories () {
      const object = filter(this.company.categories, ['type', this.categoryType])[0]
      return object.subcategories
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
