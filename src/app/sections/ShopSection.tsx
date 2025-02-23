import SectionTitle from "@/components/SectionTitle"

export default function ShopSection() {
  return (
    <div id="shop" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
      <SectionTitle>Shop</SectionTitle>
      <div className="flex flex-col items-center gap-y-5">
        <p className="drop-shadow-text md:text-xl">Coming soon!</p>
      </div>
    </div>
  )
}