import { ref } from 'vue'

export const office = {
  name: 'Kleiderhilfe Musterstadt',
  street: 'Musterstraße 12',
  postalCode: '10115',
  city: 'Musterstadt',
}
export const clothingTypes = ['Oberbekleidung', 'Hosen', 'Jacken und Mäntel', 'Kinderkleidung', 'Schuhe']
// Auswahl für die Fallstudie; vor einem echten Einsatz regelmäßig aktualisieren.
export const regions = ['Ukraine', 'Sudan', 'Palästinensische Gebiete']
export const donation = ref(null)

export function isLocalPostalCode(value) {
  return /^[0-9]{5}$/.test(value) && value.slice(0, 2) === office.postalCode.slice(0, 2)
}
