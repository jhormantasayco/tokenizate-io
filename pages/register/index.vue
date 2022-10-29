<template>
    <div class="container-fluid">
      <div class="row">
          <div class="col-12">
              <div class="d-sm-flex align-items-center justify-content-between mb-5">
                <h4 class="font-size-22 font-medium">Ser creador</h4>
              </div>
          </div>
      </div>
      <form @submit.prevent="sendForm()" method="POST" >
        <div class="row">
          <div class="col-4">
              <div class="card">
                <div class="card-body p-4">
                  <div>
                    <div class="mb-4">
                        <label for="formFile" class="form-label">Foto de perfil</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Foto de portada</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="card">
                <div class="card-body p-4">
                  <h4 class="font-size-18 font-semibold mb-4">Datos basicos</h4>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group mb-4">
                        <label>Nombre y Apellidos:</label>
                        <input type="text" class="form-control" v-model="form.name" placeholder="Ingresar" required="required">
                      </div>
                      <div class="form-group mb-4">
                        <label>Categoria :</label>
                        <select class="form-select" v-model="form.category_id" placeholder="Seleccionar" required="required">
                          <option v-for="(category, index) in categories" :key="index">{{ category }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group mb-4">
                        <label>Nombre de usuario:</label>
                        <input type="text" class="form-control" v-model="form.username" placeholder="Ingresar" required="required">
                      </div>
                      <div class="form-group mb-4">
                        <label>Etiquetas:</label>
                        <input type="text" class="form-control" v-model="form.tags" placeholder="Ingresar" required="required">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Descripción:</label>
                        <textarea class="form-control" v-model="form.description" rows="4" placeholder="Ingresar" required="required"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body p-4">
                  <div class="mb-4">
                    <h4 class="font-size-18 font-semibold mb-4">Datos del token</h4>
                    <p>
                    Tu comunidad te pagará a través de tu propio token (moneda).
                    </p>
                    <p>
                    Tu token crecerá a la par de tu carrera como creador, tu comunidad es la que le dará el valor.
                    </p>
                  </div>
                  <div class="row mb-4">
                    <div class="col-6">
                    <div class="form-group">
                      <label>Nombre de usuario:</label>
                      <input type="text" class="form-control" v-model="form.token" placeholder="Ejemplo: AlexTorresToken" required="required">
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group">
                      <label>Symbolo de la moneda:</label>
                      <input type="text" class="form-control" v-model="form.symbol" placeholder="Ejemplo: ATT" required="required">
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-warning font-medium px-5" title="Crear token">
                  Crear token
                </button>
              </div>
            </div>
        </div>
      </form>
    </div>
  </template>

<script>
    export default {
      layout: 'default',
      name: 'Register',
      components: {
      },
      data: () => ({
        form : {
          profile : null,
          banner: null,
          name: '',
          username:'',
          category_id: '',
          tags: '',
          description: '',
          token:'',
          symbol : ''
        },
        categories : [
          'Inflencer',
          'Deportista',
          'Youtuber',
          'Streamer'
        ]
      }),
      mounted() {

      },
      methods: {
        sendForm(){
          alert('Submit');
          console.log(this.form);
        }
      },

      head () {
        return {
          title: 'Tokenizate.io | Registro',
        }
      },
    }
  </script>
  <style>
  </style>