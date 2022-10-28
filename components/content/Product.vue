<template>
<div class="card border border-red-500">
    <div class="card-body pt-3">
        <div class="mb-3">
            <NuxtLink :to="`/users/${influencerId}/article/${product.id}`" :title="`Producto: ${product.name}`">
                <img :src="product.image" :alt="product.name" loading="lazy" class="img-fluid">
            </NuxtLink>
        </div>
        <div class="mb-3">
            <h4 class="font-semibold font-size-16">
                {{ product.name }}
            </h4>
        </div>
        <div class="mb-3">
            {{ product.description }}
        </div>
        <div class="mb-3 font-bold">
            {{ product.amount }} $JE
        </div>
        <div class="mb-3">
            <NuxtLink :to="`/users/${influencerId}/article/${product.id}`" class="btn btn-outline-secondary w-100 waves-effect" :title="`Producto: ${product.name}`">
                Ver detalle
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: {
            type: Object,
            required: true,
        },
        influencerId: {
            type: Number,
            required: true,
        },
    },
}
</script>
<style>
</style>