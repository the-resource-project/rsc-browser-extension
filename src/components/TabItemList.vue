<template>
  <div class="tab-item-list">
    <article class="list-group-item"  v-for="(subcategory, index) in subcategoryObjects" :key="index" :class="{ 'bg-light': isActive === index }">
      <div class="d-flex flex-row" @click="toggleItem(index)">
        <div class="p-2 w-100">
          {{ generateSubcategoryTitle(subcategory) }}
        </div>
        <div class="p-2 flex-shrink">
          <font-awesome-icon icon="angle-down" />
        </div>
      </div>
      <div v-if="isActive === index" class="py-2">
        <div class="p-2" v-for="(point) in getSubCategoryPoints(index)" :key="point.type + Math.random()">
          <font-awesome-icon :icon="generateIcon(point.rating)" />
          <span class="pl-5">{{ generatePoint(point.type, index) }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { get, values } from 'lodash'

export default {
  name: 'TabItemList',
  props: {
    subcategories: {
      type: Array
    }
  },
  data () {
    return {
      isActive: null
    }
  },
  computed: {
    subcategoryObjects () {
      return values(this.subcategories)
    },
    uniquePointKey () {
      return `point-${Math.random()}`
    }
  },
  methods: {
    toggleItem (index) {
      this.isActive = this.isActive === index ? null : index
    },
    getSubCategoryPoints (index) {
      return get(this.subcategoryObjects[index], 'points')
    },
    generateSubcategoryTitle (subcategory) {
      const type = subcategory['type']
      return this.subCategoryTypes[type]
    },
    generateIcon (pointRating) {
      const description = this.ratingTypes[pointRating]
      switch (description) {
        case 'good':
          return 'smile'
        case 'bad':
          return 'frown'
        case 'block':
          return 'dizzy'
        case 'neutral':
          return 'meh'
        default:
          return 'question'
      }
    },
    generatePoint (pointType, index) {
      return this.pointTypes[index + 1][pointType]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
