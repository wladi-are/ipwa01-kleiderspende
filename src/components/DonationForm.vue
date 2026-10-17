<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { clothingTypes, regions, office, donation, isLocalPostalCode } from '../data'

const router = useRouter()
const form = reactive({ method: 'office', clothing: '', region: '', street: '', number: '', postalCode: '', city: '' })
const error = ref('')
const postalInput = ref(null)

function changeMethod() {
  error.value = ''
  form.street = form.number = form.postalCode = form.city = ''
}

function submit() {
  error.value = ''
  if (form.method === 'pickup' && !isLocalPostalCode(form.postalCode)) {
    error.value = `Eine Abholung ist nur bei Postleitzahlen mit ${office.postalCode.slice(0, 2)} am Anfang möglich.`
    postalInput.value.focus()
    return
  }
  donation.value = {
    method: form.method,
    clothing: form.clothing,
    region: form.region,
    location: form.method === 'office'
      ? `${office.name}, ${office.street}, ${office.postalCode} ${office.city}`
      : `${form.street} ${form.number}, ${form.postalCode} ${form.city}`,
    registeredAt: new Date(),
  }
  router.push('/bestaetigung')
}
</script>

<template>
  <h1 tabindex="-1" class="h2">Kleiderspende registrieren</h1>
  <p>Wähle die Art deiner Kleidung und die Krisenregion, die du unterstützen möchtest.</p>
  <form class="card card-body" @submit.prevent="submit">
    <p class="small text-secondary">Alle angezeigten Felder sind Pflichtfelder.</p>
    <fieldset class="mb-4">
      <legend class="fs-5">Wie möchtest du spenden?</legend>
      <div class="form-check mb-2">
        <input id="office" v-model="form.method" class="form-check-input" type="radio" value="office" name="method" @change="changeMethod" />
        <label class="form-check-label" for="office">Übergabe an der Geschäftsstelle</label>
      </div>
      <div class="form-check">
        <input id="pickup" v-model="form.method" class="form-check-input" type="radio" value="pickup" name="method" @change="changeMethod" />
        <label class="form-check-label" for="pickup">Abholung</label>
      </div>
    </fieldset>
    <p v-if="form.method === 'office'" class="alert alert-light border">Geschäftsstelle: {{ office.street }}, {{ office.postalCode }} {{ office.city }} (fiktive Adresse).</p>
    <fieldset v-else class="mb-4">
      <legend class="fs-5">Abholadresse</legend>
      <p id="pickup-help" class="small">Wir holen in unserem Einzugsgebiet ab: Die Postleitzahl muss mit {{ office.postalCode.slice(0, 2) }} beginnen.</p>
      <div class="row g-3">
        <div class="col-md-8">
          <label for="street" class="form-label">Straße</label>
          <input id="street" v-model.trim="form.street" class="form-control" required pattern=".*\S.*" maxlength="100" autocomplete="address-line1" />
        </div>
        <div class="col-md-4">
          <label for="number" class="form-label">Hausnummer</label>
          <input id="number" v-model.trim="form.number" class="form-control" required pattern=".*\S.*" maxlength="15" />
        </div>
        <div class="col-md-4">
          <label for="postalCode" class="form-label">Postleitzahl</label>
          <input id="postalCode" ref="postalInput" v-model.trim="form.postalCode" class="form-control" :class="{ 'is-invalid': error }" required inputmode="numeric" pattern="[0-9]{5}" maxlength="5" autocomplete="postal-code" aria-describedby="pickup-help postal-error" :aria-invalid="error ? 'true' : undefined" @input="error = ''" />
          <div id="postal-error" class="invalid-feedback" role="alert">{{ error }}</div>
        </div>
        <div class="col-md-8">
          <label for="city" class="form-label">Ort</label>
          <input id="city" v-model.trim="form.city" class="form-control" required pattern=".*\S.*" maxlength="100" autocomplete="address-level2" />
        </div>
      </div>
    </fieldset>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <label for="clothing" class="form-label">Art der Kleidung</label>
        <select id="clothing" v-model="form.clothing" class="form-select" required>
          <option disabled value="">Bitte auswählen</option>
          <option v-for="item in clothingTypes" :key="item">{{ item }}</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="region" class="form-label">Krisenregion</label>
        <select id="region" v-model="form.region" class="form-select" required>
          <option disabled value="">Bitte auswählen</option>
          <option v-for="item in regions" :key="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <div><button type="submit" class="btn btn-primary">Spende registrieren</button></div>
  </form>
</template>
