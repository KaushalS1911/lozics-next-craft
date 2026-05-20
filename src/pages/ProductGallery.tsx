import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

// Load only image files from Gallery Images (supports nested subfolders)
const galleryImageModules = import.meta.glob(
  '/src/assets/Gallery Images/**/*.{png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const GALLERY_FOLDER_TO_CATEGORY: Record<string, string> = {
  Investment: 'investment-casting',
  Forgings: 'forgings',
  'SG-CI Sand Casting': 'sgci-casting',
  'Pressure Die Casting': 'pressure-die-casting',
  'precision machining': 'precision-machining',
  Hardware: 'hardware',
};

const isGalleryImageFile = (filePath: string): boolean => {
  const filename = filePath.split('/').pop() ?? '';
  return (
    !filename.startsWith('.') &&
    !/^Screenshot\s/i.test(filename)
  );
};

const getCategoryFromGalleryPath = (filePath: string): string | null => {
  const segments = filePath.split('Gallery Images/')[1]?.split('/') ?? [];
  for (const segment of segments) {
    const categoryId = GALLERY_FOLDER_TO_CATEGORY[segment];
    if (categoryId) return categoryId;
  }
  return null;
};

const galleryImagesByCategory = Object.entries(galleryImageModules).reduce<
  Record<string, string[]>
>((acc, [path, url]) => {
  if (!url || !isGalleryImageFile(path)) return acc;

  const categoryId = getCategoryFromGalleryPath(path);
  if (!categoryId) return acc;

  if (!acc[categoryId]) acc[categoryId] = [];
  if (!acc[categoryId].includes(url)) acc[categoryId].push(url);
  return acc;
}, {});

Object.values(galleryImagesByCategory).forEach((images) => images.sort());

const ProductGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("investment-casting");

  const categories = [
    {
      id: "investment-casting",
      name: "Investment Casting",
      description: "Precision investment castings for diverse industrial applications including automotive, pumps, valves, and more",
      images: galleryImagesByCategory['investment-casting'] ?? [],
      count: galleryImagesByCategory['investment-casting']?.length ?? 0
    },
    {
      id: "forgings",
      name: "Forgings",
      description: "High-quality forged components for automotive and industrial applications",
      images: galleryImagesByCategory['forgings'] ?? [],
      count: galleryImagesByCategory['forgings']?.length ?? 0
    },
    {
      id: "sgci-casting",
      name: "Sand Casting",
      description: "Ductile iron castings for automotive, pumps, gearboxes, and general engineering applications",
      images: galleryImagesByCategory['sgci-casting'] ?? [],
      count: galleryImagesByCategory['sgci-casting']?.length ?? 0
    },
    {
      id: "pressure-die-casting",
      name: "Pressure Die Casting",
      description: "High-pressure die cast aluminum components",
      images: galleryImagesByCategory['pressure-die-casting'] ?? [],
      count: galleryImagesByCategory['pressure-die-casting']?.length ?? 0
    },
    {
      id: "precision-machining",
      name: "Precision Machining",
      description: "CNC machined parts with tight tolerances",
      images: galleryImagesByCategory['precision-machining'] ?? [],
      count: galleryImagesByCategory['precision-machining']?.length ?? 0
    },
    {
      id: "hardware",
      name: "Hardware Components",
      description: "Precision hardware components and fasteners",
      images: galleryImagesByCategory['hardware'] ?? [],
      count: galleryImagesByCategory['hardware']?.length ?? 0
    },



  ];

  // Set active tab based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.some(cat => cat.id === hash)) {
      setActiveTab(hash);
    }
  }, [location.hash, categories]);

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
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => {
          const imageName = formatImageName(image);
          return (
            <div
              key={image}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={imageName}
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              {/*<div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center">*/}
              {/*  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" />*/}
              {/*  <div className="text-white text-sm font-medium text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">*/}
              {/*    {imageName}*/}
              {/*  </div>*/}
              {/*</div>*/}
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
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        
        {/* Backdrop Filter Overlay */}
        <div className="absolute inset-0 glass-morphism-navy-orange"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 glass-badge text-white font-semibold">
              Product Showcase
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Product Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed drop-shadow-md">
              Explore our comprehensive range of precision-engineered components across multiple manufacturing processes
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2 glass-badge text-white font-semibold">
                {categories.reduce((acc, cat) => acc + cat.count, 0)}+ Products
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 glass-badge text-white font-semibold">
                {categories.length} Categories
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-16 translate-y-16 blur-2xl"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full translate-x-12 -translate-y-12 blur-2xl"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
              {/*<div className="bg-black/80 text-white px-6 py-3 rounded-lg mt-4">*/}
              {/*  <h3 className="text-lg font-semibold">{formatImageName(selectedImage)}</h3>*/}
              {/*</div>*/}
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
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Request Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
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

