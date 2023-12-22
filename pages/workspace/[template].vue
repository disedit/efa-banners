<script setup>
import templates from '~/templates/templates.js'
import { pascalCase } from 'change-case'

/* Get template */
const { params } = useRoute()
const template = computed(() => templates.find(t => t.id === params.template))
const templateId = computed(() => pascalCase(template.value.id))
</script>

<template>
  <main>
    <WorkspaceAspectMenu :template="template" />
  
    <Component :is="`${templateId}Pane`" />
    <Component :is="`${templateId}Canvas`" />

    <WorkspaceDownload />
  </main>
</template>
