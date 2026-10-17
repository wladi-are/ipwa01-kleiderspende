<script setup>
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
function focusMain() { document.getElementById('main').focus() }
const route = useRoute()
const logoUrl = `${import.meta.env.BASE_URL}logo.svg`
watch(() => route.path, async () => {
  await nextTick()
  document.querySelector('h1')?.focus()
})
</script>

<template>
  <div class="min-vh-100 d-flex flex-column">
    <a href="#main" @click.prevent="focusMain" class="visually-hidden-focusable p-2">Zum Inhalt</a>
    <header class="bg-white border-bottom">
      <nav class="container py-3 d-flex flex-wrap align-items-center gap-3" aria-label="Hauptnavigation">
        <RouterLink class="navbar-brand d-flex align-items-center gap-2 fw-semibold me-auto" to="/">
          <img :src="logoUrl" width="40" height="40" alt="Kleiderhilfe Logo" />
          Kleiderhilfe
        </RouterLink>
        <RouterLink class="nav-link" to="/" :aria-current="route.path === '/' ? 'page' : undefined">Spende registrieren</RouterLink>
        <RouterLink class="nav-link" to="/informationen" :aria-current="route.path === '/informationen' ? 'page' : undefined">Informationen</RouterLink>
      </nav>
    </header>
    <main id="main" tabindex="-1" class="container py-4 flex-grow-1"><RouterView /></main>
    <footer class="bg-white border-top py-3">
      <div class="container d-flex flex-wrap justify-content-between gap-2 small">
        <span>Kleiderhilfe · Studienprojekt · Kein echter Spendenbetrieb</span>
        <RouterLink to="/rechtliches">Impressum und Datenschutz</RouterLink>
      </div>
    </footer>
  </div>
</template>
