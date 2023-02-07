<template>
  <nav>
    <div class="d-flex justify-content-center">
      <img src="../assets/images/Foodtuck.png" alt />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <ul class="navbar_items d-flex align-items-center justify-content-between fw-normal text-light">
        <li>Home</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>
          About
          <b-icon icon="chevron-down" font-scale="1"></b-icon>
        </li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <div class="d-flex align-items-center">
        <div class="navbar_input mr-3 position-relative">
          <input type="text" class="text-light" placeholder="Search..." />
          <b-icon icon="search" font-scale="1.5" variant="light"></b-icon>
        </div>
        <b-icon icon="bag" variant="light" font-scale="1.5"></b-icon>
      </div>
    </div>
  </nav>
</template>
<script>
import { BIcon, BIconSearch, BIconBag, BIconChevronDown } from "bootstrap-vue";
export default {
  components: {
    BIcon,
    BIconSearch,
    BIconBag,
    BIconChevronDown
  }
};
</script>
<style scoped>
nav {
  height: 80px;
  padding: 45px 20rem 20px 20rem;
  background-color: transparent;
  font-family: 'Inter', sans-serif;
}
.navbar_items {
  list-style: none;
  cursor: pointer;
 
}
.navbar_items > li {
  font-size: 16px;
  line-height: 24px;
  margin-right: 32px;
}
.navbar_input > input {
  padding: 16px 26px;
  outline: none;
  border-radius: 27px;
  border: 1px solid #ff9f0d;
  background-color: transparent;
  width: 310px;
}
input::placeholder {
  color: #ffffff;
}
.navbar_input > svg {
  position: absolute;
  top: 17px;
  right: 20px;
}
</style>