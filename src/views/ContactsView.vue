<template>
  <div class="container" id="contacts">
    <h1 class="mt-3">Página de Contatos</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="search-input">
          Procurar:
          <input v-model="searchInput" type="text" @keyup="searchPessoa()" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="quick-access">
        <router-link class="btn btn-success" to="/contacts/new"
          ><i class="fa-solid fa-user-plus"></i
            > Novo contato</router-link
        >
        </div>
      </div>
    </div>
    <br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">WhatsApp</th>
          <th scope="col">Email</th>
          <th scope="col" id="th-action">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <th scope="row">{{ pessoa.id }}</th>
          <td>{{ pessoa.nome + " " + pessoa.sobrenome }}</td>
          <td>{{ pessoa.telefone }}</td>
          <td>{{ pessoa.whatsapp }}</td>
          <td>{{ pessoa.email }}</td>
          <td id="td-action">
            <router-link
              class="btn btn-sm btn-outline-warning"
              :to="`/contacts/edit/${pessoa.id}`"
              ><i class="fa-solid fa-pen"></i
            ></router-link>
            <button
              class="btn btn-sm btn-outline-danger ms-1"
              @click="deletePessoa(pessoa.id)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Contatos",
  data() {
    return {
      pessoas: null,
      searchInput: "",
    };
  },
  methods: {
    async getPessoas() {
      const req = await fetch(
        "http://ec2-100-26-101-102.compute-1.amazonaws.com/api/pessoas"
      );

      const data = await req.json();

      this.pessoas = data;
    },
    async deletePessoa(id) {
      const req = await fetch(
        `http://ec2-100-26-101-102.compute-1.amazonaws.com/api/pessoas/${id}`,
        {
          method: "DELETE",
        }
      );

      const res = await req.json();

      this.getPessoas();
    },

    async searchPessoa() {
      if (this.searchInput != "") {
        const req = await fetch(
          `http://ec2-100-26-101-102.compute-1.amazonaws.com/api/pessoas/search/${this.searchInput}`,
          {
            method: "GET",
          }
        );

        const data = await req.json();

        this.pessoas = data;
      } else {
        this.getPessoas();
      }
    },
  },
  mounted() {
    this.getPessoas();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.quick-access {
  text-align: end;
}
#td-action,
#th-action {
  text-align: center;
  width: 100px;
}
</style>