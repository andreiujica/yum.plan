<!--
  The header component is a sticky header that contains the logo and a link to the GitHub repository.
  It is used in app.vue.
-->

<template>
  <header
    class="bg-slate-900/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-800"
  >
    <div
      class="mx-auto px-10 sm:px-12 lg:px-14 flex items-center justify-between gap-3 h-16"
    >
      <Logo />

      <!-- GitHub link -->
      <UButton
        icon="i-tabler-brand-github-filled"
        square
        variant="link"
        color="white"
        to="https://github.com/andreiujica/yum-plan"
      />
    </div>
  </header>
</template>
