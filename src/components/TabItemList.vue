<template>
  <div class="tab-item-list">
    <article class="list-group-item"  v-for="(category, index) in categories" :key="index" :class="{ 'bg-light': isActive === index }">
      <div class="d-flex flex-row" @click="toggleItem(index)">
        <div class="p-2 w-100">
          {{ category }}
        </div>
        <div class="p-2 flex-shrink">
          <font-awesome-icon icon="angle-down" />
        </div>
      </div>
      <div v-if="isActive === index" class="py-2">
        <div class="p-2" v-for="(point, index) in getCategoryPoints(index, category)" :key="index">
          <font-awesome-icon :icon="generateIcon(point.rating)" />
          <span class="pl-5">{{ point.text }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import filter from 'lodash/filter'

export default {
  name: 'TabItemList',
  props: {
    items: {
      type: Array
    },
    categories: {
      type: Array
    }
  },
  data () {
    return {
      isActive: null
    }
  },
  methods: {
    toggleItem (index) {
      this.isActive = this.isActive === index ? null : index
    },
    getCategoryPoints (index, categoryName) {
      const category = filter(this.items.categories, ['type', categoryName])[0]
      return category.points
    },
    generateIcon (rating) {
      let icon
      switch (rating) {
        case 'good':
          icon = 'thumbs-up'
          break;
        case 'bad':
          icon = 'thumbs-down'
          break;
        case 'block':
          icon = 'exclamation-triangle'
          break;
        case 'neutral':
          icon = 'stop-circle'
          break;
        default:
          icon = 'question'
      }
      return icon
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
