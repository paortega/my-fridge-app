<template>
  <main class="page-login">

    <section class="box-auth">
      <h1 class="main-title">Log in</h1>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label><br>
            <input placeholder="Correo electrónico" id="email" v-model="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label><br>
            <input placeholder="Contraseña" type="password" id="password" v-model="password" class="form-control">
          </div><br>
          <v-btn elevation="2" small color="deep-orange accent-4" @click="login">Continue</v-btn>
      </form>

      <p v-if="error" class="auth-error">
        {{ error }}
      </p>      
    </section>

  </main>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      email: '',
      password: '',
      error:''
    };
  },
  methods: {
    login: function() {
        //this.$store.dispatch('admin/UpdateNameLogin', this.email, { root: true })
        this.$router.push("/home");
    }
  },
  metaInfo: {
    title: 'Iniciar sesión',
    meta: [
      {
        name: 'description',
        content: 'log in.'
      }
    ]
  }  
};
</script>
<style>
.form-label{
  font-size: 12px;
}
</style>