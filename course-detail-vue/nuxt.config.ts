// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    module: [
        '@nuxt/ui'
    ],

    components: {
        dirs: [
            '~/components',
            // {
            //     path: '~/other-components',
            //     extensions: ['vue'],
            //     prefix: 'nuxt'

            // }
        ]
    }
})
