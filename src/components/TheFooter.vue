<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail } from '@lucide/vue'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <footer class="bg-card/50 border-t border-border">
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
        <!-- Brand Column -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div
              class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-accent to-blue-500 flex items-center justify-center font-bold text-sm text-background"
            >
              BV
            </div>
            <span
              class="text-lg font-bold font-[family-name:var(--font-heading)]"
            >
              Binary<span class="text-cyan-accent">Verse</span>
            </span>
          </div>
          <p class="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Pioneering the future of industrial simulation with high-fidelity
            digital twins powered by artificial intelligence.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3
            class="text-sm font-semibold uppercase tracking-wider text-foreground mb-4"
          >
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-sm text-muted-foreground hover:text-cyan-accent transition-colors duration-200"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3
            class="text-sm font-semibold uppercase tracking-wider text-foreground mb-4"
          >
            Legal
          </h3>
          <ul class="space-y-3">
            <li>
              <RouterLink
                to="/privacy"
                class="text-sm text-muted-foreground hover:text-cyan-accent transition-colors duration-200"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/terms"
                class="text-sm text-muted-foreground hover:text-cyan-accent transition-colors duration-200"
              >
                Terms of Service
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3
            class="text-sm font-semibold uppercase tracking-wider text-foreground mb-4"
          >
            Contact
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin class="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-accent" />
              <span
                >No. 145, F block, Ambedkar Street, Arumbakkam, MMDA Colony,
                Chennai-600106</span
              >
            </li>
            <li class="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone class="w-4 h-4 flex-shrink-0 text-cyan-accent" />
              <a
                href="tel:+917092208101"
                class="hover:text-cyan-accent transition-colors"
                >+91 7092208101</a
              >
            </li>
            <li class="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail class="w-4 h-4 flex-shrink-0 text-cyan-accent" />
              <a
                href="mailto:info@bversetech.com"
                class="hover:text-cyan-accent transition-colors"
                >info@bversetech.com</a
              >
            </li>
          </ul>
        </div>
      </div>

      <Separator class="my-8 bg-border" />

      <!-- Copyright -->
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Binaryverse. All rights
          reserved.
        </p>
        <p>Built with precision &amp; passion.</p>
      </div>
    </div>
  </footer>
</template>
