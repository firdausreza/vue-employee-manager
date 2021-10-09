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

    <button class="btn red block" @click="deleteEmployee" style="display: block; width: 100%">
      Delete
    </button>

    <div class="fixed-action-btn">
      <router-link :to="{ name: 'edit-employee', params: { employee_id: employee.employee_id } }" class="btn-floating btn-large red">
        <font-awesome-icon icon="pencil-alt" />
      </router-link>
    </div>
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
  },
  methods: {
    deleteEmployee() {
      const db = firebase.firestore();
      let confirmation = confirm('Are you sure want to delete this employee data?');
      if (confirmation === true) {
        db.collection('employees').doc(this.employee.id).delete().then(() => {
          alert('Employee deleted successfully')
        })
        this.$router.push("/")
      }
    }
  }
}
</script>

<style scoped>

</style>