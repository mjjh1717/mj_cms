<template>
  <PageSearch :searchFormConfig="searchFormConfig" />
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped></style>
