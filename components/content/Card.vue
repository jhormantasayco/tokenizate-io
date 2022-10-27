<template>
  <div class="card overflow-hidden">
    <div class="bg-primary bg-soft">
        <img :src="influencer.banner" alt="" class="img-fluid">
    </div>
    <div class="card-body pt-0">
        <div class="row">
            <div class="col-sm-12">
                <div class="avatar-md profile-user-wid mb-4">
                    <img :src="influencer.image" :alt="influencer.name" class="img-thumbnail rounded-circle">
                </div>
                <h5 class="font-size-15">{{ influencer.name }}</h5>
                <p class="text-muted mb-0">{{ influencer.description }}</p>
            </div>
            <div class="col-sm-12">
                <div class="pt-4">

                    <div class="row">
                        <div class="col-6">
                            <h5 class="font-size-15">125</h5>
                            <p class="text-muted mb-0">Projects</p>
                        </div>
                        <div class="col-6">
                            <h5 class="font-size-15">$1245</h5>
                            <p class="text-muted mb-0">Revenue</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="javascript: void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View Profile <i class="mdi mdi-arrow-right ms-1"></i></a>
                    </div>
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