<!-- src/components/SocialMediaComponent.vue -->
<template>
    <div class="my-3">
        <button class="btn btn-info mr-2" @click="shareOnFacebook">Share on Facebook</button>
        <button class="btn btn-primary" @click="shareOnTwitter">Share on Twitter</button>
    </div>
</template>

<script>
import { shareOnFacebook, shareOnTwitter } from '@/services/socialMedia';

export default {
    methods: {
        shareOnFacebook() {
            shareOnFacebook('https://yourwebsite.com');
        },
        shareOnTwitter() {
            shareOnTwitter('Check this out!', 'https://yourwebsite.com');
        }
    }
}
</script>