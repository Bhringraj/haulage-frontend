<template>
    <user name='' />

  <h1 class="mt-16 mb-8 text-3xl">Profile</h1>

  <div class="grid grid-cols-2 gap-10 mx-16">
    <profile-card name="first" />
    <profile-card class="flex justify-center" name="git" />
  </div>
    <blog class="mx-16" name="footer" />
</template>

<script>
import profileCard from '@/components/cards/profile.vue'
import blog from '@/components/cards/blog.vue'
import user from '@/components/cards/user.vue'

export default {
    components: {
        profileCard,
        blog,
        user
    },
}
</script>