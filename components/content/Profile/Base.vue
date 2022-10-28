<template>
<div class="card overflow-hidden">
    <div class="bg-primary bg-soft">
        <img :src="influencer.banner" :alt="influencer.name" :title="influencer.name" loading="lazy" class="img-fluid">
    </div>
    <div class="card-body pt-3">
        <div class="row">
            <div class="col-sm-12">
                <div class="row d-flex align-items-center">
                    <div class="col-2">
                        <img :src="influencer.image" :alt="influencer.name" :title="influencer.name" loading="lazy" class="rounded-circle">
                    </div>
                    <div class="col-8">
                        <h5 class="font-size-16 font-semibold mb-1">{{ influencer.name }}</h5>
                        <p>
                            {{ influencer.username }}
                        </p>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-outline-secondary waves-effect text-muted border-0">
                            <i class="fa fa-share-alt fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProfileBase',
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