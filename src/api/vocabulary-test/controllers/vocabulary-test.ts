/**
 * vocabulary-test controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::vocabulary-test.vocabulary-test', ({ strapi }) =>  ({
    async findOne(ctx) {
        const { data, meta } = await super.findOne(ctx);
        if (!data.attributes.publishedAt) {
            return { data: null, meta: {} }
        }

        return {
            data, meta
        }
    }
}));
