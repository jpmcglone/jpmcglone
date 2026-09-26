// Only morph the portrait between pages when it is on screen as navigation starts; otherwise
// it would fly in from off screen. Runs in beforeEach, ahead of the view transition's beforeResolve.
export default defineNuxtPlugin(() => {
  useRouter().beforeEach(() => {
    const rect = document.querySelector('.portrait-morph')?.getBoundingClientRect()
    const visible = !!rect && rect.bottom > 0 && rect.top < window.innerHeight
    document.documentElement.classList.toggle('portrait-morph-off', !visible)
  })
})
