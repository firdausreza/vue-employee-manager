<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>

    <div class="row">
      <form class="col s12" @submit="editEmployee()">
        <div class="row">
          <div class="row">
            <div class="col s4">
              <div class="input-field">
                <input id="name_inline" type="text" class="validate" v-model="name">
                <label for="name_inline">Full Name</label>
              </div>
            </div>
            <div class="col s4">
              <div class="input-field">
                <input id="dept_inline" type="text" class="validate" v-model="dept">
                <label for="dept_inline">Department</label>
              </div>
            </div>
            <div class="col s4">
              <div class="input-field">
                <input id="pos_inline" type="text" class="validate" v-model="position">
                <label for="pos_inline">Position</label>
              </div>
            </div>
          </div>
          <button class="btn waves-effect waves-light block" type="submit" style="display: block; width: 100%">
            Submit
          </button>
        </div>
      </form>
    </div>

    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employee to edit</h4>
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
  name: "edit-employee",
  data() {
    return {
      employee: {},
      name: '',
      dept: '',
      position: ''
    }
  },
  created() {
    const db = firebase.firestore();
    db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.employee = {
          'id': doc.id,
          'employee_id': doc.data().employee_id,
          'name': doc.data().name,
          'dept': doc.data().dept,
          'position': doc.data().position
        }
      })
    })
    this.name = this.employee.name;
    this.dept = this.employee.dept;
    this.position = this.employee.position;
  },
  methods: {
    editEmployee() {
      const db = firebase.firestore();
      const new_employee_data = {
        'name': this.name,
        'dept': this.dept,
        'position': this.position
      }
      db.collection('employees').doc(this.employee.id).update(new_employee_data).then(() => {
        alert('Edit employee successful!')
      }).catch(err => alert('Failed to edit employee'))
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>