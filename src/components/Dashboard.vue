<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employees</h4>
      </li>
      <li v-for="employee in employees" :key="employee.id" class="collection-item">
        <div class="chip">
          {{ employee.dept }}
        </div>
        {{ employee.employee_id }} - {{ employee.name }} - {{ employee.position }}
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <font-awesome-icon icon="plus" />
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "./firebaseConfig";

export default {
  name: "Dashboard",
  data() {
    return {
      employees: []
    }
  },
  created() {
    this.getEmployees();
  },
  methods: {
    getEmployees() {
      const db = firebase.firestore();
      db.collection('employees').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          this.employees.push(data);
        })
      })
      .catch(err => {
        alert(err.message);
      })
    }
  }
}
</script>

<style scoped>

</style>