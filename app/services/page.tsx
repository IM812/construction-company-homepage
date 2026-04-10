import { SiteLayout } from "@/components/site-layout"
import { ServicesGrid } from "@/components/services-grid"
import { ContactsSection } from "@/components/contacts-section"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <div className="pt-24">
        <ServicesGrid />
        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
