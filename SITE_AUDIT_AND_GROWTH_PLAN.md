# DocGenie Global — Complete Site Audit, Problems & Growth Plan
**Prepared:** June 17, 2026  
**Data Sources:** Codebase audit · GA4 (Jun 2025–Jun 2026) · Google Search Console (Last 16 months) · Calendly (39 meetings, Jun '25–Jun '26)

---

## THE REAL NUMBERS FIRST

| Metric | Number | What It Means |
|--------|--------|---------------|
| Total GA4 Sessions (12 months) | 4,871 | Very low for a B2B SaaS |
| Organic Search Sessions | 495 | Near zero organic presence |
| Contact Page Unique Visitors | 633 | Real intent, no tracking |
| Calendly Demo Bookings | **39** | Product is viable — tracking is broken |
| GA4 Conversions Recorded | **0** | Every booking is invisible to analytics |
| GSC Total Clicks (16 months) | ~570 | Tiny organic footprint |
| Homepage Avg Position (GSC) | 18.03 | Page 2 — nobody sees it |
| White-Label Page Avg Position | 32–46 | Page 3–5 — invisible |
| Channels with 0% Conversion Tracking | All 9 | Cannot optimize anything |

---

## PART 1 — ALL PROBLEMS WITH SOLUTIONS

---

### CATEGORY 1: TRACKING & ANALYTICS (CRITICAL — FIX FIRST)

---

#### PROBLEM 1.1 — GA4 First Page View Never Fires
**File:** `src/pages/_app.tsx` line 41  
**What is happening:** `gtag('config', GA_ID, { send_page_view: false })` is set. The `RouteChangeTracker` component only fires on client-side navigation (`routeChangeComplete`). When a user lands on the site for the first time from Google, LinkedIn, or any external source, that page view is never recorded. This means 100% of your organic, paid, direct, and referral entry sessions are missing their landing page data.  
**Impact:** Traffic source attribution is broken. Direct traffic is inflated. Organic sessions are massively undercounted.

**Fix:**
```typescript
// src/pages/_app.tsx
// Replace the RouteChangeTracker component with this useEffect inside App:

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Fire on initial load (fixes the missing first page view)
    window.gtag?.('config', GA_ID, {
      page_path: router.asPath,
      page_title: document.title,
    });
  }, [router.asPath]); // Fires on every route change including first load

  // Remove the <RouteChangeTracker /> component entirely
  // Remove send_page_view: false from the gtag config script
}
```

**Time to fix:** 30 minutes  
**Owner:** Developer

---

#### PROBLEM 1.2 — Zero Conversion Events Tracked (39 Real Bookings, 0 Recorded)
**File:** `src/components/contact/ContactForm.tsx` lines 55–70  
**What is happening:** The contact form success handler shows a toast notification and resets fields. It does not fire any GA4 event. 39 Calendly bookings and an unknown number of contact form submissions have zero attribution.  
**Impact:** You cannot know which channel, page, or keyword drives leads. You cannot optimise spend. You cannot set up GA4 conversion goals.

**Fix — Contact Form:**
```typescript
// src/components/contact/ContactForm.tsx
// Inside the if (responseData.status === "success") block, add:

window.gtag?.('event', 'generate_lead', {
  event_category: 'conversion',
  form_name: 'contact_form',
  page_path: window.location.pathname,
});
```

**Fix — Calendly Booking:**
```typescript
// src/components/contact-page/ScheduleDemo.tsx
// Add inside the component:

useEffect(() => {
  const handleCalendly = (e: MessageEvent) => {
    if (e.origin !== 'https://calendly.com') return;
    if (e.data?.event === 'calendly.event_scheduled') {
      window.gtag?.('event', 'book_demo', {
        event_category: 'conversion',
        event_label: 'calendly_inline',
        page_path: window.location.pathname,
      });
      // LinkedIn conversion (once re-enabled):
      window.lintrk?.('track', { conversion_id: 22311258 });
    }
  };
  window.addEventListener('message', handleCalendly);
  return () => window.removeEventListener('message', handleCalendly);
}, []);
```

**Time to fix:** 1 hour  
**Owner:** Developer

---

#### PROBLEM 1.3 — LinkedIn Insight Tag Fully Disabled
**File:** `src/components/contact/ContactForm.tsx` lines 37–43  
**What is happening:** The LinkedIn conversion tracking code (conversion_id: 22311258) is commented out. The LinkedIn Insight base tag is also not loaded in `_app.tsx`. Any LinkedIn campaigns you have run or will run have zero conversion data.  
**Impact:** Cannot retarget LinkedIn visitors. Cannot measure LinkedIn campaign ROI. Cannot build lookalike audiences on LinkedIn from converters.

**Fix — Step 1, add LinkedIn base tag to `_app.tsx`:**
```typescript
<Script id="linkedin-insight" strategy="afterInteractive">{`
  _linkedin_partner_id = "YOUR_PARTNER_ID";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
  window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];
  var b=document.createElement("script");b.type="text/javascript";b.async=true;
  b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b,s)})(window.lintrk);
`}</Script>
```

**Fix — Step 2, uncomment in ContactForm.tsx:**
```typescript
// Uncomment these lines:
if (window.lintrk) {
  window.lintrk('track', { conversion_id: 22311258 });
}
```

**Time to fix:** 45 minutes  
**Owner:** Developer

---

#### PROBLEM 1.4 — Calendly UTM Parameters Not Passed Through
**File:** `src/components/contact-page/ScheduleDemo.tsx`  
**What is happening:** The Calendly embed URL is hardcoded as `https://calendly.com/adityavj-docgenie/30min`. If a user arrives from `?utm_source=linkedin&utm_medium=paid`, those UTMs are not passed into Calendly. The booking record in Calendly has no source attribution.  
**Impact:** Even if you check Calendly manually, you cannot tell which campaign or channel drove each of the 39 bookings.

**Fix:**
```typescript
// src/components/contact-page/ScheduleDemo.tsx
// Make the URL dynamic:

const getCalendlyUrl = () => {
  if (typeof window === 'undefined') return 'https://calendly.com/adityavj-docgenie/30min';
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const utmKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const utmString = utmKeys
    .filter(k => params.has(k))
    .map(k => `${k}=${encodeURIComponent(params.get(k) || '')}`)
    .join('&');
  return `https://calendly.com/adityavj-docgenie/30min${utmString ? '?' + utmString : ''}`;
};
```

**Time to fix:** 30 minutes  
**Owner:** Developer

---

#### PROBLEM 1.5 — No GTM Container (Raw gtag Only)
**File:** `src/pages/_app.tsx`  
**What is happening:** GA4 is implemented via raw gtag.js scripts hardcoded in the app. There is no Google Tag Manager container. Every new event, pixel, or tag requires a developer to write code, test, and deploy.  
**Impact:** Marketing team cannot add or modify tracking independently. Slows down every campaign launch and experiment.

**Fix:**
1. Create a GTM container at tagmanager.google.com
2. Migrate GA4 to fire through GTM (GA4 Configuration Tag)
3. Replace the raw Script tags in `_app.tsx` with the GTM snippet:
```typescript
<Script id="gtm" strategy="afterInteractive">{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');
`}</Script>
// Also add noscript tag to _document.tsx body
```

**Time to fix:** 1 day  
**Owner:** Developer + Marketing

---

#### PROBLEM 1.6 — No CTA Click Tracking
**Files:** All CTA components sitewide  
**What is happening:** Not a single CTA button on the website fires a GA4 event when clicked. There is no way to know which CTAs are being clicked, which are being ignored, or which drive downstream conversions.

**Fix — Add to every primary CTA:**
```typescript
onClick={() => window.gtag?.('event', 'cta_click', {
  cta_text: 'Book a Demo',     // change per button
  cta_location: 'hero',         // change per location
  page_path: router.pathname,
})}
```

**Priority CTAs to track:**
- Hero "Book a Demo" button
- Sticky Demo Button (`StickyDemoButton.tsx`)
- Solutions page CTAs
- Pricing page CTAs
- Blog post CTAs
- Navigation "Contact" link

**Time to fix:** 2 hours  
**Owner:** Developer

---

#### PROBLEM 1.7 — Paid Other Campaign Delivering Bot Traffic
**GA4 Data:** Paid Other = 187 sessions, 10.7% engagement rate, 1.5 sec average time, 0 conversions  
**What is happening:** A campaign classified as "Paid Other" (display, programmatic, or non-Google/Meta channel) is sending 187 sessions with an average engagement time of 1.5 seconds. This is bot traffic or severely mismatched audience targeting.  
**Impact:** Money being burned with zero return.

**Fix:**
1. Identify which campaign/platform is tagged as Paid Other in UTM parameters
2. Pause it immediately
3. Audit the traffic source for bot activity
4. Do not restart until audience targeting is validated

**Time to fix:** 1 hour (investigation) + immediate pause  
**Owner:** Marketing

---

### CATEGORY 2: TECHNICAL SEO (HIGH PRIORITY)

---

#### PROBLEM 2.1 — Old Static Website Still Live and Destroying SEO
**GA4 Evidence:** Hundreds of page view entries for URLs like `/solution/ai-powered-clinical-platform/assets/images/feature/assets/js/assets/images/banners/assets/aos/aos.css`  
**GSC Evidence:** 404 errors, ghost pages, old solution URLs still indexed  
**What is happening:** The previous static HTML website is still accessible at `/solution/` paths. It has relative CSS/JS paths. When visited, GA4 fires a page_view for every asset URL (CSS files, JS files, images), creating hundreds of fake page views. Google is indexing these asset paths as web pages.  
**Impact:** Crawl budget wasted. GA4 data polluted. Domain authority diluted across hundreds of junk URLs. Old solution pages competing with new ones.

**Fix:**
1. Identify where these old HTML files are being served from (likely `/public/` folder or a legacy hosting redirect)
2. Either delete them entirely or return 410 (Gone) for all `/solution/` singular paths
3. Confirm all `/solution/` → `/solutions/` redirects are working via middleware
4. Submit GSC removal request for all `/solution/` and asset paths
5. Search `/public/` folder for old `.html` files: `pricing.html`, `about.html`, `contact.html`, `solution.html` — delete them all

**Time to fix:** 2–4 hours  
**Owner:** Developer

---

#### PROBLEM 2.2 — Trailing Slash URLs Are 404ing (Not Redirecting)
**GSC Coverage Data:** `https://www.docgenieglobal.com/solutions/white-label-telemedicine/` listed under "Not found (404)"  
**GSC Performance:** This URL has 12,094 impressions — same as the canonical version  
**What is happening:** The middleware handles trailing slash redirects but GSC confirms the trailing slash version of the white-label page is returning 404 instead of 301. This means 12,094 impressions worth of Google authority is going to a dead URL instead of the canonical.

**Fix:**
1. Test in browser: visit `https://www.docgenieglobal.com/solutions/white-label-telemedicine/` — confirm it redirects to the non-slash version
2. If 404, check the middleware matcher pattern is catching this URL
3. Check `next.config.ts` — `skipTrailingSlashRedirect: true` means Next.js is NOT auto-redirecting. The middleware must handle it. Verify the middleware `pathname.endsWith('/')` check includes this path
4. After fix, request re-indexing of the canonical URL in GSC
5. Submit URL removal for the trailing slash version

**Time to fix:** 1–2 hours  
**Owner:** Developer

---

#### PROBLEM 2.3 — Static Sitemap Is Incomplete and Points to Wrong URLs
**File:** `/public/sitemap.xml` (generated by free online tool)  
**`robots.txt` references:** `https://www.docgenieglobal.com/sitemap.xml` (static file)  
**What is happening:** The static sitemap is manually created, missing 6+ pages, and uses a third-party tool watermark ("created with Free Online Sitemap Generator"). The dynamic sitemap at `/api/sitemap.xml` is more complete but is not referenced in `robots.txt` and is not submitted to GSC.

**Missing from static sitemap:**
- `/industries/telemedicine-platform-for-clinics`
- `/industries/telemedicine-platform-for-hospitals`
- `/us/white-label-telemedicine-platform`
- `/uk/white-label-telemedicine-platform`
- `/za/white-label-telemedicine-platform`
- `/gh/white-label-telemedicine-platform`
- Several new blog posts

**Fix:**
1. Delete `/public/sitemap.xml`
2. Update `robots.txt` line 7: Change `Sitemap: https://www.docgenieglobal.com/sitemap.xml` to `Sitemap: https://www.docgenieglobal.com/api/sitemap.xml`
3. Verify the dynamic sitemap includes all current routes
4. Submit the new sitemap URL in Google Search Console
5. Request indexing for all 17 "never crawled" pages individually in GSC

**Time to fix:** 1 hour  
**Owner:** Developer

---

#### PROBLEM 2.4 — admindemo.docgenieglobal.com Is Indexed by Google
**GSC Data:** `https://admindemo.docgenieglobal.com/` — 8 clicks, 608 impressions, position 11.56  
**What is happening:** Your admin demo panel is publicly accessible, indexed by Google, appearing on page 1 for some queries, and getting more clicks than your pricing page. Competitors can access and analyse your platform.

**Fix:**
1. Add to the server handling `admindemo.docgenieglobal.com`: `X-Robots-Tag: noindex, nofollow` response header
2. OR add password protection (HTTP Basic Auth or login page)
3. Submit URL removal in GSC: Search Console → Removals → New Request
4. Add to `robots.txt` (note: this is for the subdomain — needs its own robots.txt): `User-agent: * Disallow: /`

**Time to fix:** 1 hour  
**Owner:** Developer

---

#### PROBLEM 2.5 — No hreflang Tags on Regional Pages
**Files:** `/src/pages/us/white-label-telemedicine-platform.tsx`, `/uk/...`, `/za/...`, `/gh/...`  
**GSC Data:** US and UK pages have never been crawled (1970-01-01 crawl date)  
**What is happening:** Four regional landing pages exist but have no `hreflang` tags. Google does not know these are geo-targeted pages. They may rank in the wrong country or not rank at all.

**Fix — Add to each regional page's `<Head>`:**
```html
<!-- On /us/ page -->
<link rel="alternate" hreflang="en-US" href="https://www.docgenieglobal.com/us/white-label-telemedicine-platform" />
<link rel="alternate" hreflang="en-GB" href="https://www.docgenieglobal.com/uk/white-label-telemedicine-platform" />
<link rel="alternate" hreflang="en-ZA" href="https://www.docgenieglobal.com/za/white-label-telemedicine-platform" />
<link rel="alternate" hreflang="en-GH" href="https://www.docgenieglobal.com/gh/white-label-telemedicine-platform" />
<link rel="alternate" hreflang="x-default" href="https://www.docgenieglobal.com/" />
```
Add the full set of hreflang tags to every regional page AND to the homepage.

**Time to fix:** 2 hours  
**Owner:** Developer

---

#### PROBLEM 2.6 — apis.docgenieglobal.com Consumer App Is Indexed
**GSC Data:** `apis.docgenieglobal.com/sexologist`, `/dermatologist`, `/our-doctors`, `/faqs`, `/solution/hipaa-compliant-telehealth-platform/` — all indexed  
**What is happening:** The patient-facing consumer telehealth app (the original DocGenie India product) shares the same GSC property and is indexed under the DocGenie Global brand. When a US healthcare enterprise IT director searches "docgenie telemedicine", they see consumer Indian patient pages alongside B2B SaaS pages.

**Fix:**
1. Add a `robots.txt` to `apis.docgenieglobal.com` disallowing all consumer app pages: `User-agent: * Disallow: /`
2. OR add `X-Robots-Tag: noindex` headers to all consumer-facing pages on that subdomain
3. Submit GSC removal for all indexed `apis.docgenieglobal.com` URLs
4. Separate `apis.docgenieglobal.com` into its own GSC property so it does not pollute the B2B site data

**Time to fix:** 2–3 hours  
**Owner:** Developer

---

#### PROBLEM 2.7 — URL Fragmentation Splitting Domain Authority
**GSC Data:** White-label page split across 3 URLs with combined ~27,000 impressions:
- `/solutions/white-label-telemedicine` — 12,861 impressions, position 32
- `/solutions/white-label-telemedicine/` — 12,094 impressions, position 45 (404ing)
- `/solution/white-label-telemedicine/` — 2,218 impressions, position 40

**What is happening:** Google has split the page authority across three different URLs. If consolidated to one, this page would likely rank in the top 15 instead of position 32–45.

**Fix:**
1. Confirm trailing slash → non-slash redirect is working (see Problem 2.2)
2. Confirm `/solution/` → `/solutions/` redirect is working via middleware
3. Submit GSC removal for old URLs after redirects confirmed
4. Build internal links ONLY to the canonical URL: `https://www.docgenieglobal.com/solutions/white-label-telemedicine`
5. Request re-indexing of the canonical in GSC

**Time to fix:** 2 hours  
**Owner:** Developer + SEO

---

#### PROBLEM 2.8 — 10 Blog Posts + Key Pages Never Crawled
**GSC Coverage:** 17 URLs with last crawl date `1970-01-01`  
**Never-crawled pages include:**
- 10 blog posts
- `/industries/healthcare-providers`, `/industries/public-health`
- `/solutions/ai-capabilities`, `/solutions/chronic-care-management`, `/solutions/virtual-care-features`
- `/us/white-label-telemedicine-platform`, `/uk/white-label-telemedicine-platform`

**What is happening:** Google discovered these URLs (from the sitemap) but has never crawled them. Likely caused by the broken static sitemap having wrong URLs, combined with low crawl budget from the hundreds of ghost asset URLs consuming Googlebot's time.

**Fix:**
1. Fix the sitemap first (Problem 2.3)
2. Fix the old website ghost URLs first (Problem 2.1) — this frees up crawl budget
3. In GSC → URL Inspection, manually request indexing for each of the 17 URLs
4. Add internal links to these pages from high-traffic pages (homepage, solutions index, blog)

**Time to fix:** 1 hour (after above fixes)  
**Owner:** Developer + SEO

---

#### PROBLEM 2.9 — Support/Legal Pages Indexed and Wasting Crawl Budget
**Pages:** `/integration-guide`, `/sla-support-policy`, `/sitemap` (HTML page), `/terms-of-service`, `/privacy-policy`  
**What is happening:** Support documentation and legal pages are fully indexed, included in the sitemap, and consuming crawl budget that should go to product/solution pages.

**Fix:**
```typescript
// Add to each support/legal page's <Head>:
<meta name="robots" content="noindex, follow" />
```
Also remove from the XML sitemap. Keep `/privacy-policy` and `/terms-of-service` indexed (required for trust/compliance signals) but remove the rest.

**Time to fix:** 30 minutes  
**Owner:** Developer

---

#### PROBLEM 2.10 — Ghost Pages in GA4 from Old PHP Backend
**GA4 Data:** `/apis/video2.php`, `/apis/authenticate/sessionCreate.php`, `/api/v2/users/oidc/callback` tracked as page views  
**What is happening:** Backend API endpoints and PHP files are firing GA4 page_view events. This pollutes the GA4 data and inflates session counts.

**Fix:**
1. Identify if these are on the main domain or a subdomain
2. If on main domain, remove the GA4 tag from backend/API responses
3. Add a GA4 filter to exclude paths containing `/api/`, `/apis/`, `.php`
4. In GA4 → Admin → Data Streams → More Tagging Settings → Unwanted Referrals / Filters

**Time to fix:** 1 hour  
**Owner:** Developer

---

#### PROBLEM 2.11 — Missing Security Headers
**File:** `next.config.ts`  
**What is happening:** No Content Security Policy, no HSTS, no X-Frame-Options, no X-Content-Type-Options headers are set. Enterprise healthcare buyers and their IT teams run security audits before approving vendor tools.

**Fix — Add to `next.config.ts`:**
```typescript
const nextConfig: NextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      ],
    }];
  },
};
```

**Time to fix:** 1 hour  
**Owner:** Developer

---

#### PROBLEM 2.12 — No GDPR/CCPA Cookie Consent
**What is happening:** GA4, Microsoft Clarity, Apollo, and LinkedIn Insight Tag all load without user consent. This is illegal for EU users (GDPR) and California users (CCPA). It also means privacy-conscious users (and browser extensions like uBlock) block these scripts entirely, making your tracking even less accurate.

**Fix:**
1. Integrate Cookieyes (free tier available) or Osano
2. Only load GA4, Clarity, Apollo after user consents
3. Add `<CookieBanner />` component to `_app.tsx` that conditionally loads tracking scripts

**Time to fix:** 1–2 days  
**Owner:** Developer + Legal

---

#### PROBLEM 2.13 — Title and OG Title Brand Inconsistency
**File:** `src/pages/index.tsx`  
**What is happening:**
- `<title>`: "DocGenie Global – Complete AI-Powered Telemedicine Platform | HIPAA-Compliant Virtual Care Solutions"
- `og:title`: "DocGenie | White Label Telemedicine Platform"

These are two different brand names and two different positioning statements. Social shares show one brand. Google shows another.

**Fix:** Unify all page titles and OG titles. Recommended format:
```
<title>White Label Telemedicine Platform | HIPAA-Compliant | DocGenie Global</title>
<meta property="og:title" content="White Label Telemedicine Platform | DocGenie Global" />
```
Apply consistent pattern across all pages: `[Keyword] | [Secondary] | DocGenie Global`

**Time to fix:** 2 hours  
**Owner:** Marketing + Developer

---

#### PROBLEM 2.14 — Unknown/Unexpected Pages on Production
**GA4 Data reveals these pages exist and are being visited:**

| Page | Problem |
|------|---------|
| `/vishal` | Developer test page live on production |
| `/payment` | Payment page with no context — security risk |
| `/sexologist`, `/orthopedics`, `/urogynecologist` | Consumer app pages on main domain |
| `/our-doctors` | Consumer app page on main domain |
| `/legal-notice`, `/mentions-legales` | French legal pages — wrong market |
| `/ks/white-label-telemedicine-platform` | Unknown regional page |
| `/sa/white-label-telemedicine-platform` | Saudi Arabia page not in codebase |
| `/zh-Hans` | Chinese language route being generated |
| `/robot.txt` (misspelled) | Not an issue, just bots probing |
| `/resources/case-studies`, `/resources/whitepapers` | Pages planned but don't exist (404) |

**Fix:** Audit each URL. Delete, redirect, or properly build each one.

**Time to fix:** 2–4 hours  
**Owner:** Developer

---

### CATEGORY 3: CONVERSION RATE OPTIMISATION

---

#### PROBLEM 3.1 — Contact Page Has Two Competing CTAs
**File:** `src/pages/contact.tsx` (layout)  
**GA4 Data:** 633 unique visitors to `/contact`, 32.7 seconds average engagement — too short to complete a form  
**What is happening:** The contact page shows both a Calendly booking widget and a contact form side by side. Visitors must choose between them with no clear hierarchy. This creates decision paralysis. 32.7 seconds is not enough time to book a Calendly meeting OR fill a form.

**Fix:**
1. Make Calendly the PRIMARY action — full width, above the fold, with headline: "Book a 30-Minute Demo — Free, No Commitment"
2. Move contact form below Calendly with subtitle: "Prefer to send a message? We respond within 4 hours."
3. Add social proof beside the booking widget: "Join 39+ healthcare businesses who've already seen the platform"
4. Add trust signals: "No spam · No pressure · HIPAA-compliant demo environment"

**Time to fix:** 1 day  
**Owner:** Developer + Marketing

---

#### PROBLEM 3.2 — Contact Form Missing Critical B2B Fields
**File:** `src/components/contact/ContactForm.tsx`  
**What is happening:** The form collects: First Name, Last Name, Email, Subject, Message. It does not collect Company Name, Phone, Role/Title, or Country. You cannot qualify leads, route them to sales, or call them back.

**Fix — Replace current fields with:**
```
First Name (required)
Last Name (required)
Work Email (required) — add note: "We don't accept personal email addresses"
Company Name (required)
Your Role (dropdown: CEO/Founder · CTO/IT Director · Clinic Manager · Hospital Admin · Other)
Country (dropdown — pre-select based on IP if possible)
Phone/WhatsApp (optional — "For faster response")
How can we help? (dropdown: Schedule a Demo · Get Pricing · Technical Question · Partnership)
Message (optional — not required, reduces friction)
```

**Time to fix:** 2 hours  
**Owner:** Developer + Marketing

---

#### PROBLEM 3.3 — Homepage Primary CTA Goes to /solutions (Not /contact)
**File:** `src/components/home/CtaSection.tsx`  
**What is happening:** The main CTA section on the homepage sends visitors to `/solutions` instead of `/contact`. This adds one extra step before a lead can be captured. Every extra click reduces conversion by 10–30%.

**Fix:**
- Primary CTA button text: "Book a Free Demo" → links to `/contact`
- Secondary CTA button text: "Explore Features" → links to `/solutions`
- Hero section primary button should also be: "Book a Free Demo" → `/contact`

**Time to fix:** 30 minutes  
**Owner:** Developer + Marketing

---

#### PROBLEM 3.4 — Industry Pages Have No Lead Capture
**GA4 Data:** `/industries/third-party-vendors` — 118 seconds average engagement (highest on site). `/industries/healthcare-providers` — 62 seconds. These are your most engaged visitors and there is no CTA capturing them.  
**What is happening:** Visitors who match your exact buyer profile (healthcare vendors, clinic managers) are spending 1–2 minutes reading your industry pages and then leaving with no lead capture mechanism.

**Fix — Add to every industry page:**
1. A sticky side panel or mid-page CTA: "Get a Demo Tailored for [Industry]" → Calendly
2. A lead magnet: "Download our [Industry] Telemedicine Readiness Checklist" → email capture
3. At the bottom: A short 3-field form (Name + Email + Company) with CTA: "See how DocGenie works for [Industry]"

**Time to fix:** 1–2 days  
**Owner:** Developer + Marketing

---

#### PROBLEM 3.5 — No Social Proof, Case Studies, or Customer Logos
**What is happening:** The website has no customer logos, no named testimonials, no case studies, no "As Seen In" press section, no review platform ratings. For B2B healthcare buyers (who are making high-stakes decisions affecting patient care), trust signals are not optional — they are the deciding factor.

**Fix — Add in priority order:**
1. Homepage: Add a "Trusted by" logo bar even with 3–5 anonymised logos ("A leading clinic in Nigeria", "A telehealth startup in the UK")
2. Solutions pages: Add 1 mini case study card per solution ("A hospital in Ghana reduced patient wait times by 40% using our platform")
3. Create a `/case-studies` page with at least 2 detailed stories (can be anonymised with permission)
4. Contact page: Add "Join 39+ healthcare organisations who've already booked a demo"
5. Request Google/Clutch/G2 reviews from the 39 demo attendees — even 3 reviews changes buyer perception

**Time to fix:** 1 week for initial version  
**Owner:** Marketing

---

#### PROBLEM 3.6 — Pricing Page Has No Tier Structure
**GA4 Data:** 304 unique visitors to `/pricing`, 41.5 seconds average engagement, 0 conversions tracked  
**What is happening:** 304 people read the pricing page carefully for 41 seconds and left with no action. B2B buyers who visit pricing pages are in the bottom of the funnel. If the pricing page does not give them enough information to make a decision, they go to a competitor who does.

**Fix:**
- Show at minimum 3 tiers: Starter / Growth / Enterprise
- Each tier must show: "From $X/month" or "Contact for pricing" with features list
- Add a comparison table (Feature vs Tier grid)
- Add a "What's included in every plan" section (HIPAA, uptime SLA, support hours)
- Add FAQ schema: "Is there a free trial?", "What's the setup fee?", "How long are contracts?"
- CTA per tier: different Calendly links with pre-filled plan info

**Time to fix:** 2–3 days  
**Owner:** Marketing + Developer

---

#### PROBLEM 3.7 — Sticky Demo Button Hidden Too Aggressively
**File:** `src/components/StickyDemoButton.tsx`  
**What is happening:** The sticky demo button correctly floats on most pages. However, it hides when the hero CTA is visible via IntersectionObserver. On mobile, the hero section is tall and occupies most of the screen — the sticky button stays hidden for a long scroll.

**Fix:**
- Keep IntersectionObserver behaviour on desktop
- On mobile: always show the sticky button regardless of hero visibility
- Test on actual mobile devices

**Time to fix:** 1 hour  
**Owner:** Developer

---

#### PROBLEM 3.8 — Blog Posts Have No Email Capture or Lead Magnet
**What is happening:** Blogs receive traffic (the blog index has 588 views) but there is no mechanism to capture email addresses or convert readers into leads. Every blog visitor who does not immediately go to `/contact` is lost forever.

**Fix:**
1. Add a mid-post email capture box: "Get our White Label Telemedicine Platform Guide — Free PDF" (inline, halfway through each blog post)
2. Add a sidebar (desktop) or bottom-of-post (mobile) CTA: "Ready to launch your telemedicine platform? Book a free demo."
3. Add a related solutions box at end of each post: "If this helped you, see how [Solution] works"
4. Create a gated resource (PDF checklist or guide) that blog readers can download in exchange for their email

**Time to fix:** 2–3 days  
**Owner:** Marketing + Developer

---

#### PROBLEM 3.9 — No Comparison Pages (High Purchase-Intent Traffic Going to Competitors)
**What is happening:** Buyers who search "docgenie vs doxy" or "white label telemedicine platform comparison" are at the bottom of the funnel and ready to decide. There is not a single comparison page on the site. These visitors are landing on competitors' comparison pages instead.

**Fix — Create these pages:**
1. `/compare/docgenie-vs-doxy` 
2. `/compare/docgenie-vs-healthie`
3. `/compare/docgenie-vs-teladoc`
4. `/compare/docgenie-vs-simplepractice`

Each page should have an honest feature comparison table with DocGenie's advantages clearly highlighted.

**Time to fix:** 1 week for all 4  
**Owner:** Marketing

---

### CATEGORY 4: SEO & CONTENT

---

#### PROBLEM 4.1 — Site Is 100% Brand-Dependent With No Non-Brand Organic Traffic
**GSC Data:** ~122 of ~570 clicks are brand searches. Non-brand clicks from high-intent queries: under 50 in 16 months.  
**What is happening:** For all the keywords that matter commercially ("white label telemedicine platform", "HIPAA compliant telehealth", "private label telemedicine"), the site ranks on pages 3–8. Nobody sees page 3 results.

**The keyword opportunity being missed:**

| Keyword | Monthly Impressions (GSC) | Current Position | Target Position |
|---------|--------------------------|-----------------|-----------------|
| white label telemedicine platform | 4,585 | 29 | Top 5 |
| white label telemedicine | 3,628 | 28 | Top 5 |
| white label telehealth platform | 2,139 | 42 | Top 10 |
| hipaa compliant telehealth platforms | 2,040 | 54 | Top 10 |
| private label telemedicine | 2,219 | 26 | Top 5 |
| white label telemedicine app | 2,149 | 45 | Top 10 |
| white label telemedicine software | 1,333 | 37 | Top 10 |

**Fix:** These keywords require:
1. Consolidated URL authority (fix Problem 2.7)
2. Stronger on-page optimisation of `/solutions/white-label-telemedicine` (longer content, more FAQ schema, internal links)
3. Backlink building from healthcare IT publications
4. New content targeting supporting keywords

**Time to fix:** Ongoing — first results in 60–90 days

---

#### PROBLEM 4.2 — Homepage Ranking at Position 18 for Brand Searches
**GSC Data:** `docgenie` query — 15,094 impressions, 73 clicks, position 7.55  
**What is happening:** The brand keyword "docgenie" — your own company name — ranks at position 7.5. This is because the consumer app (docgenie.in, apis.docgenieglobal.com), directories, and review sites are outranking you for your own brand name. 15,094 impressions with only 73 clicks means 15,000 people searched your brand and most didn't click your site.

**Fix:**
1. Fix the non-www duplicate (consolidate www canonical)
2. Fix admindemo.docgenieglobal.com (currently outranking in some queries)
3. Fix apis.docgenieglobal.com appearing in brand results
4. Create/claim your Google Business Profile for the company
5. Get listed on Crunchbase, LinkedIn Company Page, and healthcare SaaS directories (Capterra, G2, GetApp)
6. These directory listings create brand SERP ownership — push competitors off page 1 for your own name

**Time to fix:** 1 week (listings), ongoing (SERP monitoring)

---

#### PROBLEM 4.3 — White Label Telemedicine Page Not Optimised to Win
**File:** `src/pages/solutions/white-label-telemedicine.tsx`  
**GSC Data:** 12,861 impressions, 18 clicks, position 32 — the highest-potential commercial page on the site  
**What is happening:** This page has 12,000+ monthly impressions which means Google shows it for relevant queries — but at position 32, nobody clicks. The page needs to be strong enough to rank in the top 5.

**Fix — Page must contain:**
1. H1: "White Label Telemedicine Platform — Launch Under Your Brand in Days"
2. Exact feature checklist: what gets white-labeled (logo, colours, domain, mobile app, patient portal, notifications)
3. Launch timeline section: "Day 1: Configure → Day 3: Brand → Day 7: Go Live"
4. Technical specifications: API-first, HIPAA compliant, HL7 FHIR, mobile (iOS + Android), browser-based
5. Pricing starting point or "from $X" range
6. 3 mini case study cards (anonymised)
7. FAQ section with schema: 8+ questions
8. Internal links to: /solutions/hipaa-compliant-healthcare, /pricing, /contact
9. Word count: minimum 1,500 words (most page-1 results for this keyword are 2,000+ words)

**Time to fix:** 2–3 days  
**Owner:** Marketing + Developer

---

#### PROBLEM 4.4 — Blog Content Does Not Target Buyer-Intent Keywords
**What is happening:** Existing blog posts cover general healthcare topics ("Big Data in Healthcare", "VR in Medical Training", "Mental Health Apps Review"). These attract informational readers, not buyers. The highest-value blog content for lead generation targets decision-maker search queries.

**High-priority blog posts to create:**
1. "White Label Telemedicine Platform Cost: What to Expect in 2026" — pricing-intent keyword
2. "Best White Label Telemedicine Platforms for Clinics in 2026" — comparison keyword
3. "HIPAA Compliant Telemedicine Platform Checklist: 15 Things to Verify" — compliance keyword (use as lead magnet PDF)
4. "How to Launch a Branded Telemedicine Platform in Under 30 Days" — solution-aware keyword
5. "White Label vs Custom-Built Telemedicine: Which Is Right for Your Clinic?" — decision-stage keyword
6. "Telemedicine Platform ROI Calculator for Clinics and Hospitals" — commercial keyword (build as interactive tool)

**Time to fix:** 1 post per week  
**Owner:** Marketing (content)

---

#### PROBLEM 4.5 — AEO/GEO: Not Optimised for AI Overviews or LLM Citations
**What is happening:** Google's AI Overviews, ChatGPT, and Perplexity are increasingly where B2B buyers start research. DocGenie Global is not structured to be cited by these systems.

**Missing for AI discoverability:**
- No Wikipedia or Wikidata entity
- No Crunchbase profile linked from site
- No quantified claims ("serving X+ clients in Y countries") — LLMs need numbers to cite
- Author bios on blogs show "Organisation" not named humans with credentials
- No press/media mentions section

**Fix:**
1. Add to homepage a clear entity paragraph: "DocGenie Global is a B2B white-label telemedicine SaaS company founded in [year], serving healthcare providers, clinics, and hospitals in the United States, United Kingdom, South Africa, and Ghana."
2. Add quantified claims to homepage and About page (real numbers only)
3. Create Crunchbase profile and link from About page
4. Claim LinkedIn Company Page and link from site
5. Submit to healthcare SaaS directories (G2, Capterra, HealthTech directories)

**Time to fix:** 1 week  
**Owner:** Marketing

---

---

## PART 2 — HOW TO GAIN MORE TRAFFIC AND CONVERSIONS

---

### TRAFFIC GROWTH STRATEGY

---

#### STRATEGY T1 — Fix Technical SEO First (Month 1)
Nothing else matters until the URL fragmentation, old website, and sitemap issues are fixed. When these are resolved:
- The white-label page authority consolidates from 3 URLs to 1 → position improves from 32 to estimated 15–20
- Crawl budget freed from 100+ ghost URLs → Google crawls real pages faster
- 17 never-crawled pages get indexed → new keyword rankings appear

**Expected traffic impact:** +50–100% organic sessions within 60 days of technical fixes

---

#### STRATEGY T2 — Own the "White Label Telemedicine" Topic Cluster
Build a content cluster around the highest-value commercial keyword:

**Pillar page (already exists, needs expansion):**
- `/solutions/white-label-telemedicine` — make this the most comprehensive page on the topic on the internet

**Supporting cluster pages (to create):**
- `/blog/white-label-telemedicine-platform-cost`
- `/blog/white-label-telemedicine-vs-custom-built`
- `/blog/how-to-launch-white-label-telemedicine-platform`
- `/blog/best-white-label-telemedicine-platforms-2026`
- `/blog/white-label-telemedicine-for-clinics`
- `/blog/white-label-telemedicine-for-hospitals`

All cluster pages should link back to the pillar. This is how you rank in the top 5 for a competitive keyword — not with one page, but with a network of supporting content.

**Expected timeline:** 60–90 days for position improvement

---

#### STRATEGY T3 — Create High-Intent Comparison Pages
These pages target buyers who are actively comparing options:

**Pages to create:**
- `/compare/docgenie-vs-doxy`
- `/compare/docgenie-vs-healthie`
- `/compare/best-white-label-telemedicine-platforms`
- `/compare/white-label-telemedicine-platform-comparison`

Each comparison page should:
1. Be honest (highlight real differences)
2. Have DocGenie advantages prominently but fairly positioned
3. Include a feature comparison table
4. End with "See DocGenie in action — Book a Free Demo"
5. Have FAQ schema

**Expected traffic:** 200–500 visits/month within 90 days (comparison keywords have high click-through rates)

---

#### STRATEGY T4 — Build Regional Pages Properly (US + UK + Africa Focus)

**US page `/us/white-label-telemedicine-platform`:**
- Emphasise: HIPAA, HL7 FHIR, EHR integrations (Epic, Cerner, Athena)
- Mention: 50-state telehealth licensing considerations
- Keywords: "white label telemedicine platform USA", "HIPAA compliant telemedicine solution"

**UK page `/uk/white-label-telemedicine-platform`:**
- Emphasise: NHS Digital standards, DTAC compliance, CQC context
- Keywords: "white label telemedicine platform UK", "NHS-compatible telemedicine"

**South Africa `/za/white-label-telemedicine-platform`:**
- Emphasise: POPIA compliance, South African private healthcare market, Rand-based pricing context
- Keywords: "telemedicine platform South Africa", "white label telehealth South Africa"

**Ghana `/gh/white-label-telemedicine-platform`:**
- Emphasise: Ghana Health Service, mobile-first (low bandwidth optimisation), USSD fallback
- Keywords: "telemedicine platform Ghana", "digital health Ghana"

**New regional pages to create:**
- `/au/white-label-telemedicine-platform` (Australia)
- `/ca/white-label-telemedicine-platform` (Canada)
- `/ae/white-label-telemedicine-platform` (UAE)
- `/ng/white-label-telemedicine-platform` (Nigeria — large market)

---

#### STRATEGY T5 — LinkedIn Organic + Outreach (B2B Fastest Channel)
LinkedIn is the single most effective non-SEO channel for B2B healthcare SaaS. Current LinkedIn presence appears minimal.

**What to post (3x per week):**
1. "We helped a [country] clinic launch their branded telemedicine platform in [X] days. Here's what that looked like:" (with screenshots)
2. "HIPAA compliance checklist for telemedicine platforms — save this post"
3. "Why hospitals are choosing white-label over custom-built telemedicine (cost comparison)"
4. "5 questions to ask any telemedicine vendor before signing a contract"
5. Behind-the-scenes: platform features, implementation stories, team posts

**Direct outreach targets:**
- Hospital IT Directors
- Clinic Operations Managers
- Digital Health startup CTOs
- Healthcare VC portfolio companies
- Telehealth consultants and advisors

**Tool:** Use the Apollo tracker (already installed on site) — it identifies companies visiting your site. Reach out to those companies on LinkedIn within 48 hours of their visit.

---

#### STRATEGY T6 — Create Lead Magnets (Turn Blog Traffic Into Leads)

**Priority lead magnets to create:**

| Lead Magnet | Format | Target Keyword | Capture Method |
|-------------|--------|----------------|----------------|
| HIPAA Compliant Telemedicine Checklist | PDF (15-point checklist) | hipaa telemedicine checklist | Inline blog form + dedicated landing page |
| White Label Telemedicine Platform Buyer's Guide | PDF (20 pages) | how to choose telemedicine platform | Homepage exit intent + blog sidebar |
| Telemedicine ROI Calculator | Interactive web tool | telemedicine roi | Dedicated `/roi-calculator` page |
| "Launch in 30 Days" Timeline Template | PDF/Notion | telemedicine launch plan | Contact page secondary CTA |

Each lead magnet replaces a generic "contact us" CTA with a high-value, low-friction exchange. Email for a useful document. Then nurture with email sequence toward a demo booking.

---

### CONVERSION GROWTH STRATEGY

---

#### STRATEGY C1 — The 6.2% Contact Page Rate Is Your Baseline — Scale Traffic Into It
Your contact page converts at 6.2% (39 bookings from 633 visitors). You do not need to improve the contact page dramatically. You need to send more of the right people to it.

**Current flow:** Visitor → Homepage → Wherever they wander → Maybe /contact → Maybe books  
**Target flow:** Visitor → Any page → Industry-specific CTA → /contact → Books

To get from 39 to 100+ demos/year, you need ~1,600 contact page visitors instead of 633. That requires roughly 3x the current qualified traffic — achievable in 12 months with the content and SEO strategy above.

---

#### STRATEGY C2 — Add Personalised CTAs to Every Industry Page
**GA4 Data shows industry page visitors are the most engaged on the site:**
- `/industries/third-party-vendors`: 118 sec engagement, 6 views/user
- `/industries/healthcare-providers`: 62 sec engagement, 5.9 views/user
- `/industries/public-health`: 62 sec engagement, 5.3 views/user

These people need a CTA that speaks to them specifically:
- "See how we work with third-party vendors → Book a Demo"
- "Built for healthcare providers like you → Book a 30-min call"
- Not a generic "Contact Us" — a personalised Calendly link with pre-filled "how can we help" = vendor/provider/public health

---

#### STRATEGY C3 — Fix the Funnel Drop at "Homepage to Contact"
**Current:** Homepage → /solutions → (may visit other pages) → /contact  
**Problem:** The journey is too long and unclear  
**Fix:** Homepage → /contact (direct)

This requires:
1. Change hero CTA to "Book a Free Demo" → `/contact`
2. Add a second CTA in hero: "See how it works" → video or solutions page
3. Add a sticky "Book Demo" in nav bar on desktop (not just the floating button)
4. Add an exit-intent popup (triggers when mouse moves toward browser close): "Before you go — get a free 30-minute demo of the platform"

---

#### STRATEGY C4 — Email Nurture Sequence for All Leads
Currently there is no email follow-up sequence after a form submission or demo booking. This means:
- People who submit the form and don't book a Calendly → never followed up with automated content
- People who book a demo but don't close → no nurture sequence to re-engage them

**Build a 5-email nurture sequence:**
1. Day 0: "Thank you — here's what to expect in our demo" (with prep questions)
2. Day 3: "3 things most clinics don't ask telemedicine vendors (but should)"
3. Day 7: "How [anonymised client] launched in 7 days — mini case study"
4. Day 14: "Quick question — are you still evaluating telemedicine options?"
5. Day 21: "Last chance to book at our current pricing — [urgency if applicable]"

**Tool:** HubSpot (free CRM), Mailchimp, or ConvertKit — connect to the contact form via webhook from the existing PHP API endpoint.

---

#### STRATEGY C5 — Retargeting Audiences (Once LinkedIn Tag Is Fixed)
Once LinkedIn Insight Tag is re-enabled and GA4 conversions are tracking:

**Audience 1:** "Visited /pricing but did not book demo" — serve LinkedIn ad: "See what's included in every DocGenie plan"  
**Audience 2:** "Visited /solutions/white-label-telemedicine" — serve LinkedIn ad: "White label telemedicine — see a live platform demo"  
**Audience 3:** "Visited 3+ pages but no contact" — serve LinkedIn ad: "Still evaluating telemedicine platforms? Book a 30-min comparison call"  

These retargeting audiences will have extremely high conversion rates because the traffic is already warm.

---

---

## PART 3 — MASTER ACTION CHECKLIST

### WEEK 1 (Days 1–7) — Stop the Bleeding

- [ ] Fix GA4 first-page-view tracking bug (`_app.tsx`)
- [ ] Add `generate_lead` event to contact form success handler
- [ ] Add Calendly postMessage listener for `book_demo` event
- [ ] Add CTA click events on all primary buttons
- [ ] Re-enable LinkedIn Insight Tag (add base script + uncomment conversion)
- [ ] Pass UTM parameters into Calendly embed URL
- [ ] Pause "Paid Other" campaigns immediately
- [ ] Block `admindemo.docgenieglobal.com` from indexing (noindex header)
- [ ] Submit GSC URL removal for `admindemo.docgenieglobal.com`
- [ ] Fix `robots.txt` — change Sitemap to `/api/sitemap.xml`
- [ ] Delete `/public/sitemap.xml` (the broken static one)
- [ ] Add `noindex` to `integration-guide` and `sla-support-policy`
- [ ] Configure `generate_lead` and `book_demo` as conversions in GA4 Admin
- [ ] Link GSC to GA4 (if not already done)
- [ ] Add Company Name + Phone/WhatsApp to contact form
- [ ] Remove Subject field, replace with intent dropdown
- [ ] Add Calendly qualifying questions in Calendly dashboard (no code needed)
- [ ] Delete/remove: `/vishal`, `/legal-notice`, `/mentions-legales`, old `.html` files
- [ ] Investigate and fix the old static website at `/solution/` paths

### WEEK 2 (Days 8–14) — Fix the Foundation

- [ ] Fix trailing slash 404 on `/solutions/white-label-telemedicine/`
- [ ] Submit GSC removal for all `/solution/` (singular) old URLs
- [ ] Request GSC indexing for all 17 never-crawled pages individually
- [ ] Add hreflang tags to all 4 regional pages + homepage
- [ ] Add security headers to `next.config.ts`
- [ ] Add `noindex` to `apis.docgenieglobal.com` consumer pages
- [ ] Unify page `<title>` and `og:title` across all pages
- [ ] Add `priority` prop to all hero images (LCP fix)
- [ ] Change homepage primary CTA to "Book a Free Demo" → `/contact`
- [ ] Begin GTM container setup and migration
- [ ] Export Calendly data for all 39 bookings — analyse buyer profiles

### WEEKS 3–4 (Days 15–30) — Optimise the Funnel

- [ ] Rewrite `/solutions/white-label-telemedicine` (1,500+ words, feature checklist, FAQs, case study cards)
- [ ] Restructure `/contact` page: Calendly primary, form secondary
- [ ] Rewrite `/pricing` page: add 3 tiers with feature comparison table
- [ ] Add lead capture to all 3 industry pages
- [ ] Add internal links from homepage and solutions to never-crawled pages
- [ ] Implement cookie consent (Cookieyes or Osano)
- [ ] Create `/case-studies` hub page (even with 1 anonymised case study)
- [ ] Add scroll depth tracking (25/50/75/90%)
- [ ] Set up Clarity heatmap reviews — identify drop-off points
- [ ] Begin email nurture sequence setup

### MONTH 2 (Days 31–60) — Build the Content Engine

- [ ] Publish: "White Label Telemedicine Platform Cost 2026"
- [ ] Publish: "Best White Label Telemedicine Platforms 2026" (comparison post)
- [ ] Publish: "HIPAA Compliant Telemedicine Checklist" (with gated PDF)
- [ ] Create: `/compare/docgenie-vs-doxy`
- [ ] Create: `/industries/mental-health-providers`
- [ ] Create: `/industries/urgent-care`
- [ ] Build lead magnet: HIPAA Compliance Checklist PDF
- [ ] Build lead magnet: White Label Telemedicine Buyer's Guide
- [ ] Set up email nurture sequence (5 emails)
- [ ] Begin LinkedIn organic posting (3x per week)
- [ ] Start reviewing Apollo dashboard for company visits — begin outreach
- [ ] Build `/us/` page as fully unique, US-specific landing page
- [ ] Set up GA4 Looker Studio dashboard: Sessions, Demos, by Channel

### MONTH 3 (Days 61–90) — Scale What Works

- [ ] Publish: "White Label vs Custom-Built Telemedicine"
- [ ] Create: `/compare/docgenie-vs-healthie`
- [ ] Create: `/au/white-label-telemedicine-platform` (Australia)
- [ ] Create: `/ng/white-label-telemedicine-platform` (Nigeria)
- [ ] Build: `/roi-calculator` interactive tool
- [ ] Run A/B test: Homepage hero CTA text ("Book a Free Demo" vs "See It in Action")
- [ ] Launch LinkedIn retargeting campaign to /pricing and /solutions visitors
- [ ] Pursue 5 backlinks from healthcare IT publications (HIT Consultant, Healthcare IT News, mHealth Intelligence)
- [ ] Request reviews from 39 demo attendees (G2, Capterra, Google)
- [ ] Create Crunchbase profile and list on major directories
- [ ] Review GA4 data with working tracking — optimise top-performing channels

---

## PART 4 — EXPECTED RESULTS IF EVERYTHING ABOVE IS EXECUTED

| Metric | Current (June 2026) | Target (September 2026) | Target (December 2026) |
|--------|--------------------|-----------------------|----------------------|
| Monthly Organic Sessions | ~41 | ~150 | ~400 |
| Monthly Contact Page Visitors | ~53 | ~150 | ~300 |
| Monthly Demo Bookings (Calendly) | ~3.25 | ~8 | ~18 |
| GA4 Conversions Tracked | 0 | 100% (all events fixed) | 100% |
| White-Label Page Position | 32 | 15–20 | Top 10 |
| Homepage Position (brand) | 7.5 | Top 3 | Top 3 |
| Total Annual Demo Bookings | 39 | — | 150–200 |
| Leads with full attribution | 0% | 100% | 100% |

---

## SUMMARY: THE 3 THINGS THAT MATTER MOST

### 1. Fix tracking this week (before doing anything else)
You have 39 demos happening with zero data. Every day without tracking is another lost data point that can never be recovered. The fix is 90 minutes of developer time.

### 2. Clean up the old website and URL mess (within 2 weeks)
The old static HTML website, the `/solution/` URLs, the trailing slash 404s, and the `apis.docgenieglobal.com` consumer pages are actively damaging your Google rankings. Fixing this is the single highest-ROI technical task on the list. The white-label page alone has 27,000 impressions split across 3 URLs. Consolidate them and rankings will improve without writing a single new word of content.

### 3. Send more of the right people to `/contact` (ongoing)
Your contact page converts at 6.2%. You need ~160 visitors/month to hit 10 demos/month. You currently get ~53/month. The path from 53 to 160 is: better organic rankings (technical fixes + content cluster), industry page lead capture, and LinkedIn outreach. Not paid ads. Not a redesign. Not a rebrand.

---

*This document covers all findings from the full codebase audit, GA4 data (Jun 2025–Jun 2026), Google Search Console data (last 16 months), and Calendly booking data (39 meetings).*
