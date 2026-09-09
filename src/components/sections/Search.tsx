import findImg from "@/assets/find.webp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LOCATIONS = [
  "Any",
  "Alamo",
  "Alton",
  "Amargosa Valley",
  "Beatty",
  "Beryl",
  "Blue Diamond",
  "Boulder City",
  "Brian Head",
  "Cal Nev Ari",
  "Caliente",
  "Cold Creek",
  "Crystal",
  "Duck Creek Village",
  "Dyer",
  "Elko",
  "Ely",
  "Goldfield",
  "Goodsprings",
  "Hatch",
  "Henderson",
  "Indian Springs",
  "Jean",
  "Las Vegas",
  "Laughlin",
  "Logandale",
  "Manhattan",
  "Mc Gill",
  "Mesquite",
  "Moapa",
  "Mount Charleston",
  "Mountain Springs",
  "North Las Vegas",
  "Other",
  "Overton",
  "Pahrump",
  "Palm Gardens",
  "Panaca",
  "Parowan",
  "Pioche",
  "Round Mountain",
  "Sandy Valley",
  "Searchlight",
  "Tonopah",
];

const TYPES = ["Any", "Land", "Residential Lease", "High Rise", "Residential"];

const SORT_BY = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

const BEDROOMS = ["Any Number", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"];

const BATHS = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];

const Search = () => {
  return (
    <section className="relative w-full py-20 md:py-32 text-neutral-800 overflow-hidden">
      {/* Full-bleed Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={findImg} alt="Find your dream home background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col justify-end">
        {/* Section Heading */}
        <h2 className="text-center text-white text-xl md:text-5xl font-serif tracking-widest uppercase mb-10">
          Find Your Dream Home
        </h2>

        {/* Search Card Container */}
        <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl md:text-2xl font-serif tracking-widest text-neutral-500 uppercase mb-6">
            Search Listings
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {/* Top Row: Select Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Location</label>
                <Select defaultValue="Any">
                  <SelectTrigger className="w-full bg-white border-neutral-300">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {LOCATIONS.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Type</label>
                <Select defaultValue="Any">
                  <SelectTrigger className="w-full bg-white border-neutral-300">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    {TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Sort By</label>
                <Select defaultValue="default">
                  <SelectTrigger className="w-full bg-white border-neutral-300">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    {SORT_BY.map((sort) => (
                      <SelectItem key={sort.value} value={sort.value}>
                        {sort.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Bottom Row: Specs, Prices & Submit */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-end">
              {/* Bedrooms Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Bedrooms</label>
                <Select defaultValue="Any Number">
                  <SelectTrigger className="w-full bg-white border-neutral-300">
                    <SelectValue placeholder="Any Number" />
                  </SelectTrigger>
                  <SelectContent>
                    {BEDROOMS.map((bed) => (
                      <SelectItem key={bed} value={bed}>
                        {bed}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Baths Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Baths</label>
                <Select defaultValue="Any Number">
                  <SelectTrigger className="w-full bg-white border-neutral-300">
                    <SelectValue placeholder="Any Number" />
                  </SelectTrigger>
                  <SelectContent>
                    {BATHS.map((bath) => (
                      <SelectItem key={bath} value={bath}>
                        {bath}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Min Price</label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Min Price"
                  onChange={(e) => {
                    if (Number(e.target.value) < 0) e.target.value = "0";
                  }}
                  className="bg-white border-neutral-300 border-b-2 rounded-none border-x-0 border-t-0 focus-visible:ring-0 px-1"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600">Max Price</label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Max Price"
                  onChange={(e) => {
                    if (Number(e.target.value) < 0) e.target.value = "0";
                  }}
                  className="bg-white border-neutral-300 border-b-2 rounded-none border-x-0 border-t-0 focus-visible:ring-0 px-1"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-2 sm:col-span-1">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/70 text-white font-semibold tracking-wider uppercase rounded-full h-10 transition-colors duration-200"
                >
                  Search Now
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
