<script setup lang="ts">
import Navbar from "../fragments/Navbar.vue";
import Footer from "../fragments/Footer.vue";
import Hero from "../views/Hero.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
</script>

<template>
  <div class="w-full min-h-screen overflow-hidden bg-black">
    <Navbar />

    <main class="w-full">
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
