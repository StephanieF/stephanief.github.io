---
title: GEO, AEO & Technical SEO Consulting
description: Future-proof your discoverability with expert optimization for AI-powered search, answer engines, and traditional SEO
sidebar: heading
sidebarDepth: 1
head:
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfessionalService",
            "name": "GEO, AEO & Technical SEO Consulting",
            "description": "Future-proof your discoverability with expert optimization for AI-powered search, answer engines, and traditional SEO",
            "url": "https://www.stephanie.codes/consulting/",
            "provider": {
              "@id": "https://www.stephanie.codes/#person"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Worldwide"
            },
            "serviceType": [
              "Generative Engine Optimization (GEO)",
              "Answer Engine Optimization (AEO)",
              "Technical SEO Audits & Implementation",
              "Analytics & Performance Measurement",
              "Content Strategy & Architecture"
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": ["Technical companies", "SaaS organizations", "Data-driven organizations"]
            },
            "sameAs": ["https://citedby.agency/"]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.stephanie.codes/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Consulting",
                "item": "https://www.stephanie.codes/consulting/"
              }
            ]
          }
        ]
      }
---

# AI Search & Discoverability Engineering

## Treating visibility as a data problem, not a guessing game

Google AI Overviews, ChatGPT, Perplexity, and Gemini answer questions directly now. Click-through is falling, citations are replacing rankings, and the gap that decides who gets cited is usually technical — malformed schema, an architecture crawlers can't traverse, entity signals that never resolve.

That gap is where I work. Most of what looks like a content problem turns out to be a data problem once you read the logs.

**I take on this work through [CitedBy](https://citedby.agency/), my consulting practice.** If you're evaluating someone for a GEO, AEO, or technical SEO engagement, start there — services, case studies, and scoping all live on that site. This page is about the engineering behind it.

## How I actually approach it

I write the code. I don't hand off a strategy deck and disappear.

- **Log file analysis** — parsing raw server logs in Python and SQL to see what crawlers and AI agents actually fetch, how often, and what they abandon. Crawl budget is measurable; most audits never measure it.
- **Structured data as an API** — Schema.org and JSON-LD treated as a machine-readable interface to your content, with entity relationships that resolve rather than a checklist of isolated blobs.
- **Indexation and architecture forensics** — crawl diffs, canonical conflicts, orphaned depth, render-blocking paths that keep content out of the index in the first place.
- **Measurement that survives contact with a stakeholder** — SQL-backed frameworks that track citation appearances and snippet coverage across discovery channels, wired to dashboards people will actually open.
- **Implementation in your codebase** — Python, JavaScript, R, SQL. I work in the repo, alongside your engineers, with documentation so the capability stays in-house after I leave.

Twenty-five years of software engineering is the reason the recommendations are implementable. If you've worked with an SEO consultant who couldn't talk to your engineers, that's the difference.

## Where the practice lives

GEO and AEO are young enough that the playbooks are still being written, which is most of why I find them interesting. I run that work commercially under CitedBy, which serves small and mid-sized businesses and agencies that need deep technical work white-labeled or named.

- **Services and engagement models** → [citedby.agency/services](https://citedby.agency/services/)
- **Writing on GEO, AEO, and structured data** → [citedby.agency/insights](https://citedby.agency/insights/)
- **Start a conversation** → [citedby.agency/contact](https://citedby.agency/contact/)

My own [Insights](/insights/) here stay technical — implementation notes, CMS architecture, and the occasional post-mortem on something that broke.

## Working with me

New client engagements go through CitedBy, including audits, implementation, and ongoing retainers. [Request a free visibility audit →](https://citedby.agency/contact/)

For anything else — engineering roles, collaborations, speaking, or just comparing notes on how AI retrieval is behaving this month — [get in touch directly](/about.html).

