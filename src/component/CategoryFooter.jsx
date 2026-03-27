import React from 'react';

const footerData = [
  {
    title: "Women",
    links: [
      { name: "Women's Indianwear", href: "/women/indianwear/c/4" },
      { name: "Women's Westernwear", href: "/women/westernwear/c/3" },
      { name: "Bags", href: "/women/bags/c/89" },
      { name: "Women's Footwear", href: "/women/footwear/c/3528" },
      { name: "Women's Jewellery", href: "/women/jewellery/c/77" },
      { name: "Lingerie", href: "/women/lingerie/c/3946" },
      { name: "Women's Sportswear", href: "/women/sportswear/c/4015" },
      { name: "Women's Sleep & lounge", href: "/women/lingerie/sleepwear/c/3986" },
      { name: "Women's Watches", href: "/women/accessories/watches/c/4641" },
      { name: "Fashion Accessories", href: "/women/accessories/c/104" },
    ]
  },
  {
    title: "Men",
    links: [
      { name: "Topwear", href: "/men/topwear/c/6824" },
      { name: "Bottomwear", href: "/men/bottoms/c/6834" },
      { name: "Ethnicwear", href: "/men/ethnicwear/c/6841" },
      { name: "Men's Footwear", href: "/men/footwear/c/6857" },
      { name: "Men's Accessories", href: "/men/personal-accessories/c/6879" },
      { name: "Innerwear & Sleepwear", href: "/men/innerwear-sleepwear/c/6850" },
      { name: "Men's Watches", href: "/men/watches/c/6875" },
      { name: "Bags & Backpacks", href: "/men/bags/c/6867" },
      { name: "Athleisure", href: "/men/sports-and-athleisure/c/6888" },
      { name: "Sports & Fitness", href: "/sports-fitness-equipment/c/11219" },
    ]
  },
  {
    title: "Kids",
    links: [
      { name: "Kids Indianwear", href: "/kids/indianwear/c/6267" },
      { name: "Kids Westernwear", href: "/kids/westernwear/c/6282" },
      { name: "Kids Footwear", href: "/kids/footwear/c/6333" },
      { name: "Kids Jewellery", href: "/kids/accessories/jewelry/c/6348" },
      { name: "Feeding", href: "/kids/feeding/c/6351" },
      { name: "Kids Sportswear", href: "/kids/sportswear/c/6298" },
      { name: "Kids Sleepwear", href: "/kids/sleepwear/c/6372" },
      { name: "Kids Accessories", href: "/kids/accessories/c/6343" },
      { name: "Toys & Games", href: "/kids/toys-and-games/c/6382" },
      { name: "Innerwear", href: "/kids/innerwear/c/6329" },
    ]
  },
  {
    title: "Luxe",
    links: [
      { name: "Luxury Ethnic Wear", href: "/luxe-indian-wear/c/12039" },
      { name: "Luxury Westernwear", href: "/luxe-western-wear/c/12038" },
      { name: "Luxury Footwear", href: "/luxe-footwear/c/12041" },
      { name: "Luxury Bags", href: "/luxe-bags/c/12042" },
      { name: "Luxury Accessories", href: "/luxe-accessories/c/12043" },
      { name: "Luxury Watches", href: "/luxe-watches/c/12200" },
      { name: "Luxury Home", href: "/luxe-home-edit/c/12045" },
      { name: "Luxury Jewellery", href: "/luxe-jewellery/c/12040" },
      { name: "Summer Collection", href: "/luxe-summer-collection/c/12114" },
      { name: "Luxury Dresses", href: "/fluid-flowing-luxe/c/6002" },
    ]
  },
  {
    title: "Top Brands",
    links: [
      { name: "Puma", href: "/designers/puma/c/4886" },
      { name: "Vero Moda", href: "/designers/vero-moda/c/4188" },
      { name: "W", href: "/designers/w/c/4038" },
      { name: "Biba", href: "/designers/biba/c/5274" },
      { name: "Forever New", href: "/designers/forever-new/c/4495" },
      { name: "Skechers", href: "/designers/skechers/c/6477" },
      { name: "Fablestreet", href: "/designers/fablestreet/c/1970" },
      { name: "Only", href: "/designers/only/c/4189" },
      { name: "Cider", href: "/designers/cider/c/15204" },
      { name: "Accessorize London", href: "/designers/accessorize-london/c/6748" },
    ]
  },
  {
    title: "House of Nykaa",
    links: [
      { name: "Twenty Dresses", href: "/twenty-dresses-by-nykaa-fashion/c/4240" },
      { name: "Nykd by Nykaa", href: "/designers/nykd-by-nykaa/c/7059" },
      { name: "RSVP", href: "/designers/rsvp/c/4706" },
      { name: "Gajra Gang", href: "/designers/gajra-gang/c/10009" },
      { name: "Likha", href: "/designers/likha/c/11935" },
      { name: "Mixt", href: "/designers/mixt-by-nykaa-fashion/c/15963" },
      { name: "IYKYK", href: "/designers/iykyk-by-nykaa-fashion/c/11495" },
      { name: "Kica", href: "/designers/kica/c/4629" },
      { name: "Pipa Bella", href: "/designers/pipa-bella-by-nykaa-fashion/c/3771" },
    ]
  }
];

const CategoryFooter = () => {
  return (
    <div className="w-full bg-white border-t border-gray-100 py-10 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerData.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFooter;