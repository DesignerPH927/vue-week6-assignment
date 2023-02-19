<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid ">               
        <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link fw-bold fs-5">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link fw-bold fs-5">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link fw-bold fs-5">前台產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/cart" class="nav-link fw-bold fs-5">前台購物車列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin" class="nav-link fw-bold fs-5">後台管理</RouterLink>
            </li>
        </ul>            
        <div>                 
          <i class="fa-solid fa-cart-arrow-down
          fs-4 text-secondary position-relative"
          style="cursor:pointer;">
            <span class="position-absolute top-0 
            start-100 translate-middle badge 
            rounded-circle bg-danger"
            style="font-size:11px;"></span>
          </i>
        </div>
      </div>
    </nav>    
    <hr class="text-danger m-0"> 
    <RouterView></RouterView>

  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
  }
}
</script>
