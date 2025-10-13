import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, Grid3x3, List } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images dynamically using Vite's glob import with proper syntax
// Forgings
const forgingImages = import.meta.glob('/src/assets/Product Gallary/Forgings/*.png', { eager: true, query: '?url', import: 'default' });
const forgingImageArray = Object.values(forgingImages) as string[];

// Hardware
const hardwareImages = import.meta.glob('/src/assets/Product Gallary/Hardware/*.jpg', { eager: true, query: '?url', import: 'default' });
const hardwareImageArray = Object.values(hardwareImages) as string[];

// Investment Castings - Automobile
const automobileImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Automobile Casting/*.png', { eager: true, query: '?url', import: 'default' });
const automobileImageArray = Object.values(automobileImages) as string[];

// Investment Castings - Building & Water Treatment
const buildingImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Building & Water Treatment Parts Casting/*.png', { eager: true, query: '?url', import: 'default' });
const buildingImageArray = Object.values(buildingImages) as string[];

// Investment Castings - Engineering & Automation
const engineeringImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Engineering & Automation/*.png', { eager: true, query: '?url', import: 'default' });
const engineeringImageArray = Object.values(engineeringImages) as string[];

// Investment Castings - Fire Fighting
const fireFightingImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Fire Fighting Equipment Casting/*.png', { eager: true, query: '?url', import: 'default' });
const fireFightingImageArray = Object.values(fireFightingImages) as string[];

// Investment Castings - Industrial Pump
const industrialPumpImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Industrial Pump Casting/*.png', { eager: true, query: '?url', import: 'default' });
const industrialPumpImageArray = Object.values(industrialPumpImages) as string[];

// Investment Castings - Industrial Valve (JPG)
const industrialValveImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Industrial Valve/*.jpg', { eager: true, query: '?url', import: 'default' });
const industrialValveImageArray = Object.values(industrialValveImages) as string[];

// Investment Castings - Industrial Valve Casting (PNG)
const industrialValveCastingImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Industrial Valve Casting/*.png', { eager: true, query: '?url', import: 'default' });
const industrialValveCastingImageArray = Object.values(industrialValveCastingImages) as string[];

// Investment Castings - Power Plant
const powerPlantImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Power Plant Boiler Parts Casting/*.png', { eager: true, query: '?url', import: 'default' });
const powerPlantImageArray = Object.values(powerPlantImages) as string[];

// Investment Castings - Structure & Hardware
const structureImages = import.meta.glob('/src/assets/Product Gallary/Investment Castings/Structure & Hardware Casting/*.png', { eager: true, query: '?url', import: 'default' });
const structureImageArray = Object.values(structureImages) as string[];

// Precision Machining
const precisionMachiningImages = import.meta.glob('/src/assets/Product Gallary/precision machining/*.{jpg,png}', { eager: true, query: '?url', import: 'default' });
const precisionMachiningImageArray = Object.values(precisionMachiningImages) as string[];

// Pressure Die Casting
const pressureDieCastingImages = import.meta.glob('/src/assets/Product Gallary/Pressure Die Casting/*.{jpg,webp}', { eager: true, query: '?url', import: 'default' });
const pressureDieCastingImageArray = Object.values(pressureDieCastingImages) as string[];

// SG-CI Sand Casting - All categories
const sgciAutomobileImages = import.meta.glob('/src/assets/Product Gallary/SG-CI Sand Casting/Automobile/*.jpg', { eager: true, query: '?url', import: 'default' });
const sgciAutomobileImageArray = Object.values(sgciAutomobileImages) as string[];

const sgciElectricMotorImages = import.meta.glob('/src/assets/Product Gallary/SG-CI Sand Casting/electric-motor/*.jpg', { eager: true, query: '?url', import: 'default' });
const sgciElectricMotorImageArray = Object.values(sgciElectricMotorImages) as string[];

const sgciGearBoxImages = import.meta.glob('/src/assets/Product Gallary/SG-CI Sand Casting/Gear Box/*.jpg', { eager: true, query: '?url', import: 'default' });
const sgciGearBoxImageArray = Object.values(sgciGearBoxImages) as string[];

const sgciGeneralEngImages = import.meta.glob('/src/assets/Product Gallary/SG-CI Sand Casting/General Engineering/*.jpg', { eager: true, query: '?url', import: 'default' });
const sgciGeneralEngImageArray = Object.values(sgciGeneralEngImages) as string[];

const sgciPumpPartsImages = import.meta.glob('/src/assets/Product Gallary/SG-CI Sand Casting/Pump Parts/*.jpg', { eager: true, query: '?url', import: 'default' });
const sgciPumpPartsImageArray = Object.values(sgciPumpPartsImages) as string[];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    {
      id: "forgings",
      name: "Forgings",
      description: "High-quality forged components for automotive and industrial applications",
      images: forgingImageArray,
      count: forgingImageArray.length
    },
    {
      id: "hardware",
      name: "Hardware Components",
      description: "Precision hardware components and fasteners",
      images: hardwareImageArray,
      count: hardwareImageArray.length
    },
    {
      id: "investment-automobile",
      name: "Investment Casting - Automobile",
      description: "Precision investment castings for automotive industry",
      images: automobileImageArray,
      count: automobileImageArray.length
    },
    {
      id: "investment-building",
      name: "Investment Casting - Building & Water Treatment",
      description: "Castings for building and water treatment applications",
      images: buildingImageArray,
      count: buildingImageArray.length
    },
    {
      id: "investment-engineering",
      name: "Investment Casting - Engineering & Automation",
      description: "Engineering and automation casting solutions",
      images: engineeringImageArray,
      count: engineeringImageArray.length
    },
    {
      id: "investment-firefighting",
      name: "Investment Casting - Fire Fighting Equipment",
      description: "Reliable castings for fire fighting equipment",
      images: fireFightingImageArray,
      count: fireFightingImageArray.length
    },
    {
      id: "investment-pump",
      name: "Investment Casting - Industrial Pump",
      description: "Industrial pump components and castings",
      images: industrialPumpImageArray,
      count: industrialPumpImageArray.length
    },
    {
      id: "investment-valve",
      name: "Investment Casting - Industrial Valve",
      description: "High-precision industrial valve castings",
      images: industrialValveImageArray,
      count: industrialValveImageArray.length
    },
    {
      id: "investment-valve-casting",
      name: "Investment Casting - Valve Casting",
      description: "Specialized valve casting solutions",
      images: industrialValveCastingImageArray,
      count: industrialValveCastingImageArray.length
    },
    {
      id: "investment-powerplant",
      name: "Investment Casting - Power Plant Boiler",
      description: "Power plant boiler parts and components",
      images: powerPlantImageArray,
      count: powerPlantImageArray.length
    },
    {
      id: "investment-structure",
      name: "Investment Casting - Structure & Hardware",
      description: "Structural and hardware casting solutions",
      images: structureImageArray,
      count: structureImageArray.length
    },
    {
      id: "precision-machining",
      name: "Precision Machined Components",
      description: "CNC machined parts with tight tolerances",
      images: precisionMachiningImageArray,
      count: precisionMachiningImageArray.length
    },
    {
      id: "pressure-die-casting",
      name: "Pressure Die Casting",
      description: "High-pressure die cast aluminum components",
      images: pressureDieCastingImageArray,
      count: pressureDieCastingImageArray.length
    },
    {
      id: "sgci-automobile",
      name: "SG-CI Sand Casting - Automobile",
      description: "Ductile iron castings for automotive applications",
      images: sgciAutomobileImageArray,
      count: sgciAutomobileImageArray.length
    },
    {
      id: "sgci-electric-motor",
      name: "SG-CI Sand Casting - Electric Motor",
      description: "Electric motor housings and components",
      images: sgciElectricMotorImageArray,
      count: sgciElectricMotorImageArray.length
    },
    {
      id: "sgci-gearbox",
      name: "SG-CI Sand Casting - Gear Box",
      description: "Gearbox housings and related components",
      images: sgciGearBoxImageArray,
      count: sgciGearBoxImageArray.length
    },
    {
      id: "sgci-general",
      name: "SG-CI Sand Casting - General Engineering",
      description: "General engineering casting solutions",
      images: sgciGeneralEngImageArray,
      count: sgciGeneralEngImageArray.length
    },
    {
      id: "sgci-pump",
      name: "SG-CI Sand Casting - Pump Parts",
      description: "Pump parts and components in ductile iron",
      images: sgciPumpPartsImageArray,
      count: sgciPumpPartsImageArray.length
    }
  ];

  // Helper function to extract and format filename from image path
  const formatImageName = (imagePath: string): string => {
    // Extract filename from path
    const filename = imagePath.split('/').pop() || '';
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
    // Replace hyphens, underscores, and dots with spaces
    const nameWithSpaces = nameWithoutExt.replace(/[-_\.]/g, ' ');
    // Capitalize each word
    const capitalized = nameWithSpaces
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    return capitalized;
  };

  const ImageGallery = ({ images }: { images: string[] }) => {
    if (images.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          <p>No images available in this category</p>
        </div>
      );
    }

    return (
      <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
        {images.map((image, index) => {
          const imageName = formatImageName(image);
          return (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={imageName}
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" />
                <div className="text-white text-sm font-medium text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {imageName}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Product Showcase
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Product Gallery
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Explore our comprehensive range of precision-engineered components across multiple manufacturing processes
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="outline" className="bg-white/10 border-white/30 text-white">
                {categories.reduce((acc, cat) => acc + cat.count, 0)}+ Products
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/30 text-white">
                {categories.length} Categories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* View Mode Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3x3 className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          <Tabs defaultValue={categories[0].id} className="w-full">
            <TabsList className="w-full flex-wrap h-auto justify-start gap-2 bg-white p-2 rounded-lg shadow-sm mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                  <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                  <Badge variant="secondary" className="mt-3">
                    {category.count} Items
                  </Badge>
                </div>
                <ImageGallery images={category.images} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={selectedImage}
                  alt={formatImageName(selectedImage)}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="bg-black/80 text-white px-6 py-3 rounded-lg mt-4">
                <h3 className="text-lg font-semibold">{formatImageName(selectedImage)}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us to discuss your requirements and get a customized quote for your manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductGallery;

