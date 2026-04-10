import { SiteLayout } from "@/components/site-layout"
import { ServicesCatalogue } from "@/components/services-catalogue"
import { FormSection } from "@/components/form-section"
import { ContactsSection } from "@/components/contacts-section"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <div className="pt-24">
        <ServicesCatalogue />
        <FormSection />
        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
