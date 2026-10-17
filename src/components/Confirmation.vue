<script setup>
import { donation } from '../data'
import { useRouter } from 'vue-router'
const router = useRouter()
function restart() {
  donation.value = null
  router.push('/')
}
</script>

<template>
  <template v-if="donation">
    <h1 tabindex="-1" class="h2">Vielen Dank für deine Kleiderspende!</h1>
    <p class="alert alert-success" role="status">Deine Registrierung wurde erfolgreich abgeschlossen.</p>
    <section class="card card-body" aria-labelledby="summary-heading">
      <h2 id="summary-heading" class="h5 mb-3">Deine Angaben</h2>
      <dl class="row mb-0">
        <dt class="col-sm-4">Spendenart</dt><dd class="col-sm-8">{{ donation.method === 'office' ? 'Übergabe an der Geschäftsstelle' : 'Abholung' }}</dd>
        <dt class="col-sm-4">Art der Kleidung</dt><dd class="col-sm-8">{{ donation.clothing }}</dd>
        <dt class="col-sm-4">Krisenregion</dt><dd class="col-sm-8">{{ donation.region }}</dd>
        <dt class="col-sm-4">Datum der Registrierung</dt><dd class="col-sm-8">{{ donation.registeredAt.toLocaleDateString('de-DE', { timeZone: 'Europe/Berlin' }) }}</dd>
        <dt class="col-sm-4">Uhrzeit der Registrierung</dt><dd class="col-sm-8">{{ donation.registeredAt.toLocaleTimeString('de-DE', { timeZone: 'Europe/Berlin' }) }} (Europe/Berlin)</dd>
        <dt class="col-sm-4">{{ donation.method === 'office' ? 'Übergabeort' : 'Abholadresse' }}</dt><dd class="col-sm-8 text-break">{{ donation.location }}</dd>
      </dl>
    </section>
    <p class="small text-secondary mt-3">Die Angaben werden nur vorübergehend in diesem Browser angezeigt. Es wird kein echter Abholauftrag ausgelöst. Datum und Uhrzeit bezeichnen die Registrierung, keinen Abholtermin.</p>
    <button class="btn btn-primary" @click="restart">Weitere Spende registrieren</button>
  </template>
  <template v-else>
    <h1 tabindex="-1" class="h2">Keine Registrierung vorhanden</h1>
    <p>Nach einem Neuladen stehen keine vorherigen Angaben mehr zur Verfügung.</p>
    <RouterLink to="/" class="btn btn-primary">Zur Registrierung</RouterLink>
  </template>
</template>
