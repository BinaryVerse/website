<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeading from '@/components/SectionHeading.vue'
import { MapPin, Phone, Mail, Clock } from '@lucide/vue'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value:
      'No. 145, F block, Ambedkar Street, Arumbakkam, MMDA Colony, Chennai-600106',
    href: '',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7092208101',
    href: 'tel:+917092208101',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@bversetech.com',
    href: 'mailto:info@bversetech.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri, 9:00 AM – 6:00 PM IST',
    href: '',
  },
]
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section
      class="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent"
      />
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="
          background-image: radial-gradient(
            circle,
            rgba(255, 107, 53, 0.4) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        "
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge
          variant="outline"
          class="border-brand/30 text-brand mb-6"
        >
          Contact Us
        </Badge>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up"
        >
          Get in
          <span class="gradient-text">Touch</span>
        </h1>
        <p
          class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1"
        >
          Have a question about Quicky, want to partner your shop, or
          interested in becoming a delivery partner? We'd love to hear from
          you.
        </p>
      </div>
    </section>

    <!-- ═══ Contact Content ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-3xl mx-auto">
        <SectionHeading
          title="Contact Information"
          subtitle="Reach out through any of the channels below."
          align="center"
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <Card
            v-for="info in contactInfo"
            :key="info.label"
            class="bg-card/60 border-border hover:border-brand/30 transition-all duration-300 group"
          >
            <CardContent class="p-5 flex items-start gap-4">
              <div
                class="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors"
              >
                <component
                  :is="info.icon"
                  class="w-5 h-5 text-brand"
                />
              </div>
              <div>
                <p
                  class="text-xs text-muted-foreground uppercase tracking-wider mb-1"
                >
                  {{ info.label }}
                </p>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="text-sm text-foreground hover:text-brand transition-colors"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-sm text-foreground">
                  {{ info.value }}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
