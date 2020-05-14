<template>
  <div id="app">
    <div>
      <label for>Name:</label>
      <input v-model="name" type="text" />
      <button @click="submitName">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="(personName, index) of names" :key="index">
          <p>{{personName.name}}</p>
          <button @click="removePerson(personName)">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "./firebase";
export default {
  data() {
    return {
      name: "Carolina",
      names: []
    };
  },
  firebase: {
    names: db.ref("names")
  },
  mounted() {
    console.log(this.$firebaseRefs);
  },

  methods: {
    submitName() {
      this.$firebaseRefs.names.push({ name: this.name, edit: false });
    },

    removePerson(user) {
      console.log(this.$firebaseRefs);
      this.$firebaseRefs.names.child(user[".key"]).remove();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 1px solid black;
}
</style>
