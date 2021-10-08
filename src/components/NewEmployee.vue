<template>
  <div id="new-employee">
    <h3>Add New Employee</h3>

    <div class="row">
      <form class="col s12" @submit="setEmployee">
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
      <p>{{ name }} {{ dept }} {{ position }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "./firebaseConfig";

export default {
  name: "new-employee",
  data() {
    return {
      name: '',
      dept: '',
      position: '',
      id: 0,
    }
  },
  created() {
    const db = firebase.firestore();
    db.collection('employees').get().then(querySnapshot => {
      this.id = querySnapshot.docs.length
    })
  },
  methods: {
    setEmployee() {
      const db = firebase.firestore();
      const employee = {
        employee_id: this.id + 1,
        name: this.name,
        dept: this.dept,
        position: this.position
      }
      db.collection('employees').add(employee).then(() => alert('Added new employee!')).catch(err => alert('Failed to add new employee'))
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>