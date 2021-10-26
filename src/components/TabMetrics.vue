<template>
  <div class="tab-metrics">
    <tab-item-list :subcategories="subcategories" />
  </div>
</template>

<script>
import { filter } from 'lodash'
import TabItemList from '@/components/TabItemList.vue'

export default {
  name: 'TabMetrics',
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
      categoryType: '2',
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
