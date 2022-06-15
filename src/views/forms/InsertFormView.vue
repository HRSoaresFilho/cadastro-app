<template>
  <div class="container" id="contacts">
    <h1 class="mt-3">Novo contato</h1>
    <br />
    <form id="form">
      <div class="row">
        <div class="col-md-6">
          <label for="name" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
          />
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Sobrenome</label>
          <input
            type="text"
            class="form-control"
            name="lastName"
            id="lastName"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <label for="inputTel" class="form-label">Telefone</label>
          <input type="text" class="form-control" id="inputTel" value="" />
        </div>
        <div class="col-4">
          <label for="inputWA" class="form-label">WhatsApp</label>
          <input type="text" class="form-control" id="inputWA" value="" />
        </div>
        <div class="col-4">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail" value="" />
        </div>
      </div>
    </form>
    <div class="col-12 mt-3">
      <button
        @click="insertPessoa()"
        class="btn btn-primary"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  methods: {
    async insertPessoa() {
      const form = {
        nome: document.getElementById("name").value,
        sobrenome: document.getElementById("lastName").value,
        telefone: document.getElementById("inputTel").value,
        whatsapp: document.getElementById("inputWA").value,
        email: document.getElementById("inputEmail").value
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };

      const response = await fetch(
        `http://ec2-100-26-101-102.compute-1.amazonaws.com/api/pessoas`,
        requestOptions
      );

      const data = await response.json();

      if (data) {
        this.$router.push("/contacts");
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>