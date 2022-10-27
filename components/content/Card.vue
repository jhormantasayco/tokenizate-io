<template>
  <div class="card overflow-hidden">
    <div class="bg-primary bg-soft">
        <img :src="influencer.banner" :alt="influencer.name" class="img-fluid">
    </div>
    <div class="card-body pt-0">
        <div class="row">
            <div class="col-sm-12">
                <div class="avatar-md profile-user-wid mb-4">
                    <img :src="influencer.image" :alt="influencer.name" class="img-thumbnail rounded-circle">
                </div>
                <div class="avatar-button bg-white rounded">
                    <a href="" class="btn btn-outline-secondary border-gray-400 waves-effect px-5" title="Ir al Perfil">Ir al Perfil</a>
                </div>
                <h5 class="font-size-18 font-medium mb-3">{{ influencer.name }}</h5>
                <p class="pr-3 text-secondary">{{ influencer.description }}</p>
            </div>
            <div class="col-sm-12">
                <div class="pt-4">
                    <span v-for="(tag, index) in influencer.tags" :key="index" class="badge badge-soft-dark mr-3" :title="tag">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    props: {
        influencer: {
            type: Object,
            required: true,
        },
    },
  }
</script>
<style>
</style>