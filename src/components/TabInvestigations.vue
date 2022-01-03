<template>
  <div class="tab-investigations">
    {{ company }}
  </div>
</template>

<script>
export default {
  name: 'TabInvestigations',
  props: {
    company: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
