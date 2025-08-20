const productos = [
  {
    id: 1,
    nombre: "Mouse Logitech G203",
    precio: 9500,
    categoria: "perifericos",
    img: "https://resource.logitech.com/content/dam/gaming/en/products/g203/g203-gallery-1.png",
    stock: 30,
    descripcion: "Mouse gamer con sensor óptico de 8000 DPI y retroiluminación RGB personalizable."
  },
  {
    id: 2,
    nombre: "Teclado Redragon Kumara K552",
    precio: 24000,
    categoria: "perifericos",
    img: "https://redragon.es/content/uploads/2021/05/K552-KR-SPS-KUMARA-RAINBOW-SPAIN1.png",
    stock: 20,
    descripcion: "Teclado mecánico compacto con switches Redragon Blue y retroiluminación RGB."
  },
  {
    id: 3,
    nombre: "Disco SSD Kingston A400 480GB",
    precio: 32000,
    categoria: "almacenamiento",
    img: "https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-240gb-1-zm-lg.jpg",
    stock: 15,
    descripcion: "Unidad de estado sólido con interfaz SATA III, velocidad de lectura de hasta 500MB/s."
  },
  {
    id: 4,
    nombre: "Memoria RAM Corsair Vengeance 8GB DDR4 3200MHz",
    precio: 27000,
    categoria: "componentes",
    img: "https://s3-sa-east-1.amazonaws.com/saasargentina/Uo6ETfWoWFqmQ6G8JIKm/imagen",
    stock: 25,
    descripcion: "Módulo DDR4 de alto rendimiento, ideal para gaming y multitarea."
  },
  {
    id: 5,
    nombre: "Placa de Video NVIDIA GeForce RTX 3060 12GB",
    precio: 450000,
    categoria: "componentes",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMuzgboAYNrnIDFRjZoToPnz1otkzidzGE21yfaZiciLdmmEcuU5y7Xn2B8gvsVmGWAL0sxzHaY1oXXoeDW8oNNjrPJfDUNyF8eBodHqXpLtS7zYU3opeys7I",
    stock: 10,
    descripcion: "GPU de última generación con soporte para Ray Tracing y DLSS."
  },
  {
    id: 6,
    nombre: "Gabinete Gamer Thermaltake Versa H18",
    precio: 56000,
    categoria: "accesorios",
    img: "https://thermaltake-de-bhgycxg9djfgcmfn.a02.azurefd.net/media/catalog/product/cache/5c6d00a0ea315efe12bf2a0a73047152/v/e/versa_h18_02.jpg",
    stock: 12,
    descripcion: "Gabinete micro-ATX con panel lateral acrílico y excelente flujo de aire."
  }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductosPorCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(prod => prod.categoria === categoriaId));
    }, 2000);
  });
};

export const getProductoPorId = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === productoId));
    }, 2000);
  });
};

export const getCategorias = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categorias = [...new Set(productos.map(prod => prod.categoria))];
      resolve(categorias);
    }, 1000);
  });
};
