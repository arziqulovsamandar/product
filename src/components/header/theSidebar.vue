<template>
  <aside>
    <nav>
      <ul>
        <li>
          <img
            src="../../assets/img/icons8-home-24.png"
            alt=""
          /><router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped>
nav ul {
  margin: 20px;
  list-style: none;
  padding: 0;
  width: 200px;
  display: flex;
  justify-content: center;
}

nav li {
  margin-bottom: 5px;
  width: 80%;
  background-color: #08f327;
  color: black;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  display: flex;
  gap: 10px;
}
</style>
