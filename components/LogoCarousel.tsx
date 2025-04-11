const companies = [
    { id: 1, logo: '/dangote.png' },
    { id: 2, logo: "/nestle.png" },
    { id: 3, logo: "/dangote.png" },
    { id: 4, logo: "/dangote.png" },
    { id: 5, logo: "https://via.placeholder.com/150x50?text=Company+5" },
    { id: 6, logo: "https://via.placeholder.com/150x50?text=Company+6" },
    { id: 7, logo: "https://via.placeholder.com/150x50?text=Company+7" },
    { id: 8, logo: "https://via.placeholder.com/150x50?text=Company+8" },
  ];
  
  const LogoCarousel = () => {
    return (
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="flex animate-marquee whitespace-nowrap">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex-shrink-0 mx-8"
                >
                  <img
                    src={company.logo}
                    alt={`Company ${company.id}`}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
              {/* Duplicate logos for infinite scroll effect */}
              {companies.map((company) => (
                <div
                  key={`duplicate-${company.id}`}
                  className="flex-shrink-0 mx-8"
                >
                  <img
                    src={company.logo}
                    alt={`Company ${company.id}`}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LogoCarousel;