<template>
  <div class="container" id="contacts">
    <h1 class="mt-3">Editar contato</h1>
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
            :value="pessoas.nome"
          />
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Sobrenome</label>
          <input
            type="text"
            class="form-control"
            name="lastName"
            id="lastName"
            :value="pessoas.sobrenome"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <label for="inputTel" class="form-label">Telefone</label>
          <input
            type="text"
            class="form-control"
            id="inputTel"
            :value="pessoas.telefone"
          />
        </div>
        <div class="col-4">
          <label for="inputWA" class="form-label">WhatsApp</label>
          <input
            type="text"
            class="form-control"
            id="inputWA"
            :value="pessoas.whatsapp"
          />
        </div>
        <div class="col-4">
          <label for="inputEmail" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            :value="pessoas.email"
          />
        </div>
      </div>
    </form>
    <div class="col-12 mt-3">
      <button
        @click="updatePessoa(this.$route.params.id)"
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
  data() {
    return {
      pessoas: [],
    };
  },
  methods: {
    async getPessoaById(id) {
      const req = await fetch(
        `http://ec2-100-26-101-102.compute-1.amazonaws.com/api/pessoas/${id}`,
        {
          method: "GET",
        }
      );
      const res = await req.json();

      return (this.pessoas = res);
    },
    async updatePessoa(id) {
      const form = {
        nome: document.getElementById("name").value,
        sobrenome: document.getElementById("lastName").value,
        telefone: document.getElementById("inputTel").value,
        whatsapp: document.getElementById("inputWA").value,
        email: document.getElementById("inputEmail").value
      };

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };

      console.log(requestOptions);

      const response = await fetch(
        `http://ec2-100-26-101-102.compute-1.amazonaws.com/api/pessoas/${id}`,
        requestOptions
      );

      const data = await response.json();

      if (data) {
        this.$router.push("/contacts");
      }
    },
  },
  mounted() {
    this.getPessoaById(this.$route.params.id);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>