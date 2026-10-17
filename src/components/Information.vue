<script setup>
import { office } from '../data'
</script>
<template>
  <h1 tabindex="-1" class="h2">Informationen zur Kleiderspende</h1>
  <section class="card card-body mb-3">
    <h2 class="h5">Übergabe vor Ort</h2>
    <p>Wähle am Tablet „Übergabe an der Geschäftsstelle“. Du musst nur die Art der Kleidung und eine Krisenregion auswählen.</p>
    <p class="mb-0">Unsere fiktive Geschäftsstelle: {{ office.name }}, {{ office.street }}, {{ office.postalCode }} {{ office.city }}.</p>
  </section>
  <section class="card card-body mb-3">
    <h2 class="h5">Abholung</h2>
    <p class="mb-0">Wähle „Abholung“ und trage die Abholadresse ein. Die ersten beiden Ziffern deiner Postleitzahl müssen mit {{ office.postalCode.slice(0, 2) }} übereinstimmen. Wähle anschließend die Kleidung und die gewünschte Krisenregion.</p>
  </section>
  <p>Bitte spende nur saubere und tragbare Kleidung. Für verschiedene Kleidungsarten kannst du mehrere Registrierungen durchführen.</p>
  <RouterLink to="/" class="btn btn-primary">Spende registrieren</RouterLink>
</template>
