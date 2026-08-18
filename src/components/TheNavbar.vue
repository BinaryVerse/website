<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from '@lucide/vue'

const route = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sell on Quicky', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function isActive(path: string): boolean {
  return route.path === path
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-red-500 flex items-center justify-center font-bold text-sm text-background">
          Q
        </div>
        <span class="flex flex-col leading-none">
          <span class="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">
            Quic<span class="text-brand">ky</span>
          </span>
          <span class="hidden sm:block text-[10px] text-muted-foreground tracking-wide">
            by Binaryverse
          </span>
        </span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5"
          :class="isActive(link.path) ? 'text-brand bg-white/5' : 'text-muted-foreground hover:text-foreground'"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <Sheet v-model:open="mobileOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="text-foreground">
              <Menu class="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" class="w-72 bg-background border-border">
            <SheetHeader>
              <SheetTitle class="text-left">
                <span class="font-bold font-[family-name:var(--font-heading)]">
                  Quic<span class="text-brand">ky</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <div class="flex flex-col gap-2 mt-8">
              <RouterLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5"
                :class="isActive(link.path) ? 'text-brand bg-white/5' : 'text-muted-foreground hover:text-foreground'"
                @click="mobileOpen = false"
              >
                {{ link.name }}
              </RouterLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
</template>
