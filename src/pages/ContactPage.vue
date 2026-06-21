<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SectionHeading from '@/components/SectionHeading.vue'
import { MapPin, Phone, Mail, Send, Check, Clock, Loader2, AlertCircle } from '@lucide/vue'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY
const MAIL_API_URL = import.meta.env.VITE_MAIL_API_URL

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

const form = ref({
  name: '',
  email: '',
  company: '',
  message: '',
})

const errors = ref<Record<string, string>>({})
const submitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')
const turnstileToken = ref('')
let turnstileWidgetId: string | null = null

function renderTurnstile() {
  const container = document.getElementById('contact-turnstile')
  if (!container || !(window as any).turnstile) return

  // Clear any existing widget
  if (turnstileWidgetId !== null) {
    try { (window as any).turnstile.remove(turnstileWidgetId) } catch (_) {}
    turnstileWidgetId = null
  }

  turnstileWidgetId = (window as any).turnstile.render(container, {
    sitekey: TURNSTILE_SITE_KEY,
    theme: 'dark',
    callback: (token: string) => {
      turnstileToken.value = token
    },
    'expired-callback': () => {
      turnstileToken.value = ''
    },
    'error-callback': () => {
      turnstileToken.value = ''
    },
  })
}

function waitForTurnstile() {
  if ((window as any).turnstile) {
    renderTurnstile()
  } else {
    const interval = setInterval(() => {
      if ((window as any).turnstile) {
        clearInterval(interval)
        renderTurnstile()
      }
    }, 200)
  }
}

onMounted(() => {
  waitForTurnstile()
})

onBeforeUnmount(() => {
  if (turnstileWidgetId !== null && (window as any).turnstile) {
    try { (window as any).turnstile.remove(turnstileWidgetId) } catch (_) {}
  }
})

function validate(): boolean {
  errors.value = {}
  if (!form.value.name.trim()) errors.value.name = 'Name is required'
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }
  if (!form.value.message.trim()) errors.value.message = 'Message is required'
  if (!turnstileToken.value) errors.value.turnstile = 'Please complete the verification'
  return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    const subject = `Contact Form: ${form.value.name} — ${form.value.company || 'No Company'}`
    const text = [
      `Name: ${form.value.name}`,
      `Email: ${form.value.email}`,
      `Company: ${form.value.company || 'N/A'}`,
      ``,
      `Message:`,
      form.value.message,
    ].join('\n')

    const res = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject,
        text,
        turnstileToken: turnstileToken.value,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || `Server responded with ${res.status}`)
    }

    submitted.value = true
    form.value = { name: '', email: '', company: '', message: '' }
    turnstileToken.value = ''
  } catch (err: any) {
    submitError.value = err.message || 'Something went wrong. Please try again.'
    // Reset turnstile so user can retry
    if ((window as any).turnstile && turnstileWidgetId !== null) {
      (window as any).turnstile.reset(turnstileWidgetId)
    }
    turnstileToken.value = ''
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  submitted.value = false
  submitError.value = ''
  nextTick(() => {
    waitForTurnstile()
  })
}
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section
      class="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent"
      />
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="
          background-image: radial-gradient(
            circle,
            rgba(0, 242, 254, 0.4) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        "
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge
          variant="outline"
          class="border-cyan-accent/30 text-cyan-accent mb-6"
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
          Have a question, want a demo, or ready to get started? We'd love to
          hear from you.
        </p>
      </div>
    </section>

    <!-- ═══ Contact Content ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <!-- Contact Info Column -->
          <div class="lg:col-span-2 space-y-6">
            <SectionHeading
              title="Contact Information"
              subtitle="Reach out through any of the channels below."
              align="left"
            />
            <div class="space-y-4">
              <Card
                v-for="info in contactInfo"
                :key="info.label"
                class="bg-card/60 border-border hover:border-cyan-accent/30 transition-all duration-300 group"
              >
                <CardContent class="p-5 flex items-start gap-4">
                  <div
                    class="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-accent/20 transition-colors"
                  >
                    <component
                      :is="info.icon"
                      class="w-5 h-5 text-cyan-accent"
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
                      class="text-sm text-foreground hover:text-cyan-accent transition-colors"
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

          <!-- Contact Form Column -->
          <div class="lg:col-span-3">
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill out the form and we'll get back to you within 24 hours."
              align="left"
            />
            <Card class="bg-card/60 border-border">
              <CardContent class="p-8">
                <form
                  v-if="!submitted"
                  @submit.prevent="handleSubmit"
                  class="space-y-5"
                >
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        for="contact-name"
                        class="text-sm font-medium mb-2 block"
                      >
                        Name <span class="text-destructive">*</span>
                      </label>
                      <Input
                        id="contact-name"
                        v-model="form.name"
                        placeholder="Your full name"
                        :class="errors.name ? 'border-destructive' : ''"
                      />
                      <p
                        v-if="errors.name"
                        class="text-xs text-destructive mt-1"
                      >
                        {{ errors.name }}
                      </p>
                    </div>
                    <div>
                      <label
                        for="contact-email"
                        class="text-sm font-medium mb-2 block"
                      >
                        Email <span class="text-destructive">*</span>
                      </label>
                      <Input
                        id="contact-email"
                        v-model="form.email"
                        type="email"
                        placeholder="you@company.com"
                        :class="errors.email ? 'border-destructive' : ''"
                      />
                      <p
                        v-if="errors.email"
                        class="text-xs text-destructive mt-1"
                      >
                        {{ errors.email }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label
                      for="contact-company"
                      class="text-sm font-medium mb-2 block"
                      >Company</label
                    >
                    <Input
                      id="contact-company"
                      v-model="form.company"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label
                      for="contact-message"
                      class="text-sm font-medium mb-2 block"
                    >
                      Message <span class="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="contact-message"
                      v-model="form.message"
                      placeholder="Tell us about your project or question..."
                      rows="5"
                      :class="errors.message ? 'border-destructive' : ''"
                    />
                    <p
                      v-if="errors.message"
                      class="text-xs text-destructive mt-1"
                    >
                      {{ errors.message }}
                    </p>
                  </div>

                  <!-- Turnstile Widget -->
                  <div>
                    <div id="contact-turnstile"></div>
                    <p
                      v-if="errors.turnstile"
                      class="text-xs text-destructive mt-1"
                    >
                      {{ errors.turnstile }}
                    </p>
                  </div>

                  <!-- Error Banner -->
                  <div
                    v-if="submitError"
                    class="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive"
                  >
                    <AlertCircle class="w-5 h-5 flex-shrink-0" />
                    <span>{{ submitError }}</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    :disabled="isSubmitting"
                    class="w-full bg-gradient-to-r from-cyan-accent to-blue-500 text-background font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
                    <Send v-else class="w-4 h-4 mr-2" />
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </Button>
                </form>

                <!-- Success state -->
                <div v-else class="text-center py-12 animate-fade-in-up">
                  <div
                    class="w-20 h-20 rounded-full bg-cyan-accent/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
                  >
                    <Check class="w-10 h-10 text-cyan-accent" />
                  </div>
                  <h3
                    class="text-2xl font-semibold font-[family-name:var(--font-heading)] mb-3"
                  >
                    Message Sent!
                  </h3>
                  <p class="text-muted-foreground max-w-md mx-auto mb-6">
                    Thank you for reaching out. Our team will review your
                    message and get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    @click="resetForm"
                    class="border-cyan-accent/30 text-cyan-accent hover:bg-cyan-accent/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
