<template>
  <div id="dashboard">
    <h3>Dashboard</h3>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <font-awesome-icon icon="plus" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>