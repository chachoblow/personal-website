<script setup lang="ts">
import ProjectPageSectionHeading from '@/components/ProjectViewSectionHeading.vue'
import beaconAnimation from '@/assets/Beacon/beacon-animation.gif'
import image01 from '@/assets/Beacon/CloudyBeach-03.png'
import image02 from '@/assets/Beacon/CloudyBeach-04.png'
import image03 from '@/assets/Beacon/CloudyBeach-05.png'
import image04 from '@/assets/Beacon/CloudyBeach-06.png'
import image05 from '@/assets/Beacon/CloudyBeach-07.png'
import image06 from '@/assets/Beacon/CloudyBeach-08.png'
import image07 from '@/assets/Beacon/CloudyBeach-09.png'
import image08 from '@/assets/Beacon/CloudyBeach-10.png'
import image09 from '@/assets/Beacon/CloudyBeach-11.png'
import image10 from '@/assets/Beacon/CloudyBeach-12.png'
import image11 from '@/assets/Beacon/CloudyBeach-13.png'
import image12 from '@/assets/Beacon/CloudyBeach-15.png'
import image13 from '@/assets/Beacon/CloudyBeach-16.png'
import image14 from '@/assets/Beacon/CloudyBeach-17.png'
import image15 from '@/assets/Beacon/CloudyBeach-18.png'

const images = [
  beaconAnimation,
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
]
</script>

<template>
  <div class="container">
    <RouterLink to="/" class="back-button"> &#8592; </RouterLink>
    <ProjectPageSectionHeading :level="1">Beacon</ProjectPageSectionHeading>
    <section id="overview">
      <ProjectPageSectionHeading :level="2">Overview</ProjectPageSectionHeading>
      <p>
        Beacon reimagines how we maintain connections with distant loved ones
        through ambient presence. Unlike traditional communication that demands
        attention, Beacon operates primarily as an elegant lamp in your
        space—until someone reaches out.
      </p>
      <p>
        When a family member or friend presses their Beacon device, it instantly
        transmits a signal to all connected Beacons. Your device responds by
        gently pulsing with the sender's unique color signature—a visual "I'm
        thinking of you" that requires no words. Responding is equally
        effortless: a simple press of your Beacon sends your color to all
        connected devices, acknowledging their presence with "I see you too."
      </p>
      <p>
        This intentionally minimalist interaction creates meaningful connection
        without the burden of conversation, perfect for maintaining ambient
        awareness of loved ones across any distance.
      </p>
    </section>
    <section id="technical">
      <ProjectPageSectionHeading :level="2">
        Technical Architecture
      </ProjectPageSectionHeading>
      <p>
        Each Beacon is powered by an ESP-32 microcontroller interfaced with an
        LED matrix using AdaFruit's comprehensive libraries. The devices
        communicate through AWS IoT Core's MQTT service, employing a
        publish-subscribe model:
      </p>
      <ul>
        <li>
          When activated, a Beacon publishes to a topic containing its unique
          identifier and color signature
        </li>
        <li>
          All connected Beacons subscribe to these events, responding
          immediately to incoming signals
        </li>
        <li>
          The communication architecture ensures reliable, real-time
          connectivity regardless of physical distance
        </li>
      </ul>
    </section>
    <section id="hardware">
      <ProjectPageSectionHeading :level="2">
        Hardware Design
      </ProjectPageSectionHeading>
      <p>
        The physical Beacon embodies thoughtful design that balances aesthetics
        with functionality:
      </p>
      <ul>
        <li>
          Custom 3D-printed internal enclosure houses the ESP-32, LED matrix,
          and interactive components
        </li>
        <li>
          Precision-cut acrylic and Baltic birch plywood form the external lamp
          structure, creating a warm diffusion of light
        </li>
        <li>
          A potentiometer allows users to adjust brightness to suit their
          environment
        </li>
        <li>
          The minimalist single-button interface ensures the interaction remains
          effortlessly simple
        </li>
      </ul>
    </section>
    <section id="opensource">
      <ProjectPageSectionHeading :level="2">
        Open Source
      </ProjectPageSectionHeading>
      <p>
        The complete codebase for Beacon is available on
        <a href="https://github.com/chachoblow/beacon">GitHub</a>, including
        firmware, communication protocols, and 3D printing specifications.
      </p>
    </section>
    <section id="gallery">
      <ProjectPageSectionHeading :level="2">
        Project Gallery
      </ProjectPageSectionHeading>
      <div class="images">
        <figure
          v-for="(image, index) in images"
          :key="index"
          class="image-container"
        >
          <img
            :src="image"
            :alt="`Beacon project view ${index + 1}`"
            loading="lazy"
            class="gallery-image"
          />
        </figure>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
}

.back-button {
  font-size: 28px;
  margin-bottom: 48px;
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
}

h1,
h2,
p,
li {
  font-size: 14px;
}

h1,
h2 {
  font-weight: bold;
}

p,
li {
  line-height: 1.7;
}

p + p,
p + ul {
  margin-top: 0.5rem;
}

h1 {
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1.1rem;
}

section + section {
  margin-top: 2rem;
}

ul {
  padding-left: 1.5rem;
}

.images {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.image-container {
  margin: 0;
  transition: transform 0.3s ease;
}

.image-container + .image-container {
  margin-top: 2rem;
}

.gallery-image {
  width: 100%;
  height: auto;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  object-fit: contain;
}
</style>
