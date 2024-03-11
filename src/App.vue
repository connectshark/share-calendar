<script setup>

</script>

<template>
<header class="container header-wrapper">
  <h1 class="site-title">
    <router-link to="/">Share Calendar</router-link>
  </h1>
  <nav>
    <input type="radio" class="ssr-only" name="theme" id="system" checked>
    <input type="radio" class="ssr-only" name="theme" id="light">
    <input type="radio" class="ssr-only" name="theme" id="dark">
    <label for="system" class="btn">
      <i class='bx bx-laptop bx-sm'></i>
    </label>
    <label for="light" class="btn">
      <i class='bx bx-sun bx-sm'></i>
    </label>
    <label for="dark" class="btn">
      <i class='bx bx-moon bx-sm'></i>
    </label>
  </nav>
</header>
<RouterView />
</template>

<style scoped>
#system:checked ~ .btn[for="system"] i{
  color: var(--primary);
}
#light:checked ~ .btn[for="light"] i{
  color: var(--primary);
}
#dark:checked ~ .btn[for="dark"] i{
  color: var(--primary);
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;;
}
.site-title {
  padding: 1rem 0;
}
.site-title a {
  font-size: 1.5rem;
  line-height: 2;
  font-weight: bold;
  text-decoration: none;
  color: currentColor;
  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
}
@media (width >= 768px) {
  .site-title a {
    font-size: 2rem;
  }
}
</style>
