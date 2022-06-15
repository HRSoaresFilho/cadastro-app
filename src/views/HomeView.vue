<template>
  <main>
    <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">CONTATOS APP</h1>
        <p class="lead fw-normal">Seu novo jeito de armazenar contatos na web.</p>
        <router-link class="btn btn-success" to="/contacts">Acessar contatos</router-link>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  </main>
</template>

<script>

</script>

<style scoped>
.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}

.site-header a {
  color: #8e8e8e;
  transition: color .15s ease-in-out;
}

.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}
.flex-equal>* {
  flex: 1;
}

@media (min-width: 768px) {
  .flex-md-equal>* {
    flex: 1;
  }
}
</style>