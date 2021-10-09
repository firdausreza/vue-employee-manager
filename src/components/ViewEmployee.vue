<template>
  <div id="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employee Detail</h4>
      </li>
      <li class="collection-item">
        <div class="chip">
          Employee ID
        </div>
        {{ employee.employee_id }}
      </li>
      <li class="collection-item">
        <div class="chip">
          Employee Name
        </div>
        {{ employee.name }}
      </li>
      <li class="collection-item">
        <div class="chip">
          Department
        </div>
        {{ employee.dept }}
      </li>
      <li class="collection-item">
        <div class="chip">
          Employee Position
        </div>
        {{ employee.position }}
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "./firebaseConfig";

export default {
  name: "view-employee",
  data() {
    return {
      employee: {}
    }
  },
  created() {
    const db = firebase.firestore();
    db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc);
        this.employee = {
          'id': doc.id,
          'employee_id': doc.data().employee_id,
          'name': doc.data().name,
          'dept': doc.data().dept,
          'position': doc.data().position
        }
      })
    })
  }
}
</script>

<style scoped>

</style>