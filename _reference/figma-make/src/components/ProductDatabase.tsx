/**
 * HØLY™ Product Database — Exportable Master List
 * 
 * Complete product catalog with all 33 SKUs across 5 ritual systems.
 * Includes full metadata for integration, labeling, and reference.
 */

export interface ProductData {
  index: number;
  sku: string;
  name: string;
  system: string;
  systemCode: string;
  focusArea: string;
  functionPurpose: string;
  coreMaterials: string;
  applicationExperience: string;
  purposeLabels: string[];
  timeLabels: string[];
}

export const HOLY_PRODUCT_DATABASE: ProductData[] = [
  // ========================================
  // RITUAL AFTERCARE™ (10 SKUs)
  // ========================================
  {
    index: 1,
    sku: 'HOLY-AFT-001',
    name: 'hølymist™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Gently cleanses and hydrates fresh piercings with sterile saline mist',
    coreMaterials: '0.9% sterile saline solution in pressurized spray bottle',
    applicationExperience: 'Spray 2-3 times daily. Ultra-fine mist ensures gentle, thorough coverage',
    purposeLabels: ['Cleanse', 'Hydrate'],
    timeLabels: ['Ritual']
  },
  {
    index: 2,
    sku: 'HOLY-AFT-002',
    name: 'hølyrest™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Protects healing piercings during sleep with ergonomic ear suspension',
    coreMaterials: 'Memory foam core with central slit for ear suspension',
    applicationExperience: 'Place ear in slit to suspend piercing. Zero-pressure healing',
    purposeLabels: ['Protect'],
    timeLabels: ['Evening']
  },
  {
    index: 3,
    sku: 'HOLY-AFT-003',
    name: 'hølyveil™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Silky, hypoallergenic pillowcase that fits seamlessly over hølyrest™',
    coreMaterials: 'Bamboo silk blend or organic cotton sateen',
    applicationExperience: 'Daily visible layer. Like luxury bedding for your healing ritual',
    purposeLabels: ['Protect'],
    timeLabels: ['Evening']
  },
  {
    index: 4,
    sku: 'HOLY-AFT-004',
    name: 'hølyring™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Reinforces slit opening on DTC hølyrest™ for consistent suspension',
    coreMaterials: 'Medical-grade silicone ring with smooth edges',
    applicationExperience: 'Insert into slit. Rinse with warm water and mild soap',
    purposeLabels: ['Protect'],
    timeLabels: ['Ritual']
  },
  {
    index: 5,
    sku: 'HOLY-AFT-005',
    name: 'hølycup™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Portable donut-style insert compatible with any pillow (Amazon version)',
    coreMaterials: 'Soft-touch silicone or memory foam donut insert',
    applicationExperience: 'Place on any pillow. Wipe with cleanser. Travel ready',
    purposeLabels: ['Protect'],
    timeLabels: ['Evening']
  },
  {
    index: 6,
    sku: 'HOLY-AFT-006',
    name: 'hølyguard™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Shields jewelry from friction, snagging, and irritation during healing',
    coreMaterials: 'Medical-grade adhesive disk with breathable silicone dome',
    applicationExperience: 'Peel and apply over jewelry. Wear during sports or high-contact activities',
    purposeLabels: ['Protect'],
    timeLabels: ['Ritual']
  },
  {
    index: 7,
    sku: 'HOLY-AFT-007',
    name: 'hølypatch™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Targeted treatment for piercing bumps and irritation keloids',
    coreMaterials: 'Hydrocolloid patch with soothing serum (chamomile, tea tree)',
    applicationExperience: 'Apply to clean, dry bump overnight. Remove gently in morning',
    purposeLabels: ['Treat'],
    timeLabels: ['Evening']
  },
  {
    index: 8,
    sku: 'HOLY-AFT-008',
    name: 'hølywand™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Precisely removes crust buildup without disturbing healing tissue',
    coreMaterials: 'Ultra-soft microfiber tips on precision stick (disposable)',
    applicationExperience: 'Soak tip in saline. Gently sweep around piercing. Discard after use',
    purposeLabels: ['Cleanse'],
    timeLabels: ['Ritual']
  },
  {
    index: 9,
    sku: 'HOLY-AFT-009',
    name: 'hølykit™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'All-in-one starter kit with essential aftercare products for new piercings',
    coreMaterials: 'Curated bundle: hølymist™, hølyrest™, hølywand™, plus instruction card',
    applicationExperience: 'Complete healing journey in one box. Perfect for piercing day',
    purposeLabels: ['Cleanse', 'Protect'],
    timeLabels: ['Ritual']
  },
  {
    index: 10,
    sku: 'HOLY-AFT-010',
    name: 'hølyserum™',
    system: 'Ritual Aftercare™',
    systemCode: 'AFT',
    focusArea: 'Piercing Healing',
    functionPurpose: 'Promotes faster healing and reduces scarring after piercing wounds are closed',
    coreMaterials: 'Bio-oil blend with vitamin E, rosehip, calendula, and sea buckthorn',
    applicationExperience: 'Apply once daily after wound closes. Massage gently into healed tissue',
    purposeLabels: ['Restore'],
    timeLabels: ['Evening']
  },

  // ========================================
  // RITUAL RENEWAL™ (6 SKUs)
  // ========================================
  {
    index: 11,
    sku: 'HOLY-REN-001',
    name: 'Light Prep Serum',
    system: 'Ritual Renewal™',
    systemCode: 'REN',
    focusArea: 'Skin & Beauty',
    functionPurpose: 'Prepares skin for optimal red light absorption with lightweight hydration',
    coreMaterials: 'Hyaluronic acid, niacinamide, peptides in water-gel base',
    applicationExperience: 'Apply before red light therapy. Dries quickly without residue',
    purposeLabels: ['Prepare', 'Hydrate'],
    timeLabels: ['Morning']
  },
  {
    index: 12,
    sku: 'HOLY-REN-002',
    name: 'Retinol Alternative Moisturiser',
    system: 'Ritual Renewal™',
    systemCode: 'REN',
    focusArea: 'Skin & Beauty',
    functionPurpose: 'Delivers retinol-like benefits without irritation using bakuchiol',
    coreMaterials: 'Bakuchiol, squalane, ceramides, peptides',
    applicationExperience: 'Apply nightly. Gentle enough for sensitive skin',
    purposeLabels: ['Restore', 'Renew'],
    timeLabels: ['Evening']
  },
  {
    index: 13,
    sku: 'HOLY-REN-003',
    name: 'Exfoliating Enzyme Mask',
    system: 'Ritual Renewal™',
    systemCode: 'REN',
    focusArea: 'Skin & Beauty',
    functionPurpose: 'Gently dissolves dead skin cells to reveal brighter, smoother skin',
    coreMaterials: 'Papaya enzymes, AHA complex, aloe vera, kaolin clay',
    applicationExperience: 'Apply 2-3x weekly. Leave 10 minutes. Rinse with warm water',
    purposeLabels: ['Cleanse', 'Renew'],
    timeLabels: ['Evening']
  },
  {
    index: 14,
    sku: 'HOLY-REN-004',
    name: 'Barrier Repair Balm',
    system: 'Ritual Renewal™',
    systemCode: 'REN',
    focusArea: 'Skin & Beauty',
    functionPurpose: 'Seals and protects compromised skin barrier with rich nourishment',
    coreMaterials: 'Shea butter, ceramide complex, calendula, sea buckthorn oil',
    applicationExperience: 'Apply to dry areas as final step. Melts into skin on contact',
    purposeLabels: ['Protect', 'Restore'],
    timeLabels: ['Evening']
  },
  {
    index: 15,
    sku: 'HOLY-REN-005',
    name: 'Vitamin C Brightening Serum',
    system: 'Ritual Renewal™',
    systemCode: 'REN',
    focusArea: 'Skin & Beauty',
    functionPurpose: 'Brightens skin tone and reduces hyperpigmentation with stable vitamin C',
    coreMaterials: 'Ascorbic acid, ferulic acid, vitamin E, hyaluronic acid',
    applicationExperience: 'Apply morning after cleansing. Follow with SPF',
    purposeLabels: ['Brighten', 'Protect'],
    timeLabels: ['Morning']
  },
  {
    index: 16,
    sku: 'HOLY-REN-006',
    name: 'Hydrating Mist Toner',
    system: 'Ritual Renewal™',
    systemCode: 'REN',
    focusArea: 'Skin & Beauty',
    functionPurpose: 'Balances pH and delivers instant hydration with mineral-rich botanicals',
    coreMaterials: 'Rose water, glycerin, hyaluronic acid, niacinamide',
    applicationExperience: 'Mist after cleansing. Layer before serums. Refresh anytime',
    purposeLabels: ['Hydrate', 'Balance'],
    timeLabels: ['Morning', 'Evening']
  },

  // ========================================
  // RITUAL TOUCH™ (5 SKUs)
  // ========================================
  {
    index: 17,
    sku: 'HOLY-TCH-001',
    name: 'Jade Gua Sha Tool',
    system: 'Ritual Touch™',
    systemCode: 'TCH',
    focusArea: 'Body Tools',
    functionPurpose: 'Sculpts, lifts, and drains lymphatic fluid with smooth jade stone',
    coreMaterials: 'Authentic jade stone, ergonomic curved edges',
    applicationExperience: 'Use with facial oil. Glide upward and outward. Store in fridge',
    purposeLabels: ['Sculpt', 'Drain'],
    timeLabels: ['Morning']
  },
  {
    index: 18,
    sku: 'HOLY-TCH-002',
    name: 'Body Massage Oil',
    system: 'Ritual Touch™',
    systemCode: 'TCH',
    focusArea: 'Body Tools',
    functionPurpose: 'Nourishes skin and enables smooth glide for massage and touch rituals',
    coreMaterials: 'Jojoba oil, sweet almond oil, vitamin E, essential oil blend',
    applicationExperience: 'Warm between palms. Massage into skin. Use for self or partnered touch',
    purposeLabels: ['Nourish', 'Connect'],
    timeLabels: ['Evening']
  },
  {
    index: 19,
    sku: 'HOLY-TCH-003',
    name: 'Obsidian Massage Wand',
    system: 'Ritual Touch™',
    systemCode: 'TCH',
    focusArea: 'Body Tools',
    functionPurpose: 'Releases tension and promotes embodied awareness through stone massage',
    coreMaterials: 'Polished obsidian stone, tapered ergonomic shape',
    applicationExperience: 'Use on neck, shoulders, jaw. Apply gentle pressure to trigger points',
    purposeLabels: ['Release', 'Ground'],
    timeLabels: ['Evening']
  },
  {
    index: 20,
    sku: 'HOLY-TCH-004',
    name: 'Lymphatic Drainage Brush',
    system: 'Ritual Touch™',
    systemCode: 'TCH',
    focusArea: 'Body Tools',
    functionPurpose: 'Stimulates lymphatic flow and improves circulation with dry brushing',
    coreMaterials: 'Natural boar bristles, beechwood handle',
    applicationExperience: 'Brush dry skin before shower. Move toward heart in long strokes',
    purposeLabels: ['Drain', 'Energize'],
    timeLabels: ['Morning']
  },
  {
    index: 21,
    sku: 'HOLY-TCH-005',
    name: 'Pleasure Ritual Oil',
    system: 'Ritual Touch™',
    systemCode: 'TCH',
    focusArea: 'Body Tools',
    functionPurpose: 'Enhances sensation and supports embodied pleasure exploration',
    coreMaterials: 'Coconut oil, damiana, ylang ylang, vanilla, cardamom',
    applicationExperience: 'Use for self-pleasure or partnered exploration. Warm and sensual',
    purposeLabels: ['Pleasure', 'Connect'],
    timeLabels: ['Evening']
  },

  // ========================================
  // RITUAL UNION™ (5 SKUs)
  // ========================================
  {
    index: 22,
    sku: 'HOLY-UNI-001',
    name: 'Intimacy Card Deck',
    system: 'Ritual Union™',
    systemCode: 'UNI',
    focusArea: 'Intimacy',
    functionPurpose: 'Guides couples through vulnerable conversations and connection prompts',
    coreMaterials: '52 cards with prompts, questions, and rituals',
    applicationExperience: 'Draw a card together. Explore honestly. Deepen intimacy',
    purposeLabels: ['Connect', 'Explore'],
    timeLabels: ['Evening']
  },
  {
    index: 23,
    sku: 'HOLY-UNI-002',
    name: 'Sensual Candle Set',
    system: 'Ritual Union™',
    systemCode: 'UNI',
    focusArea: 'Intimacy',
    functionPurpose: 'Creates ambient atmosphere with pheromone-inspired scent blends',
    coreMaterials: 'Soy wax, wood wicks, amber, sandalwood, jasmine essential oils',
    applicationExperience: 'Light before intimacy. Let the ritual begin with scent',
    purposeLabels: ['Atmosphere', 'Sensual'],
    timeLabels: ['Evening']
  },
  {
    index: 24,
    sku: 'HOLY-UNI-003',
    name: 'Affirmation Mirror Cling',
    system: 'Ritual Union™',
    systemCode: 'UNI',
    focusArea: 'Intimacy',
    functionPurpose: 'Reinforces self-love and embodiment with daily affirmations',
    coreMaterials: 'Reusable vinyl cling with empowering affirmations',
    applicationExperience: 'Apply to mirror. Read daily. Embody your worth',
    purposeLabels: ['Affirm', 'Ground'],
    timeLabels: ['Morning']
  },
  {
    index: 25,
    sku: 'HOLY-UNI-004',
    name: 'Pleasure Wellness Tonic',
    system: 'Ritual Union™',
    systemCode: 'UNI',
    focusArea: 'Intimacy',
    functionPurpose: 'Supports libido and sexual wellness with adaptogenic herbs',
    coreMaterials: 'Maca, ashwagandha, damiana, rose, cacao',
    applicationExperience: 'Mix into warm beverage. Sip slowly. Feel the warmth spread',
    purposeLabels: ['Vitality', 'Pleasure'],
    timeLabels: ['Evening']
  },
  {
    index: 26,
    sku: 'HOLY-UNI-005',
    name: 'Sacred Union Journal',
    system: 'Ritual Union™',
    systemCode: 'UNI',
    focusArea: 'Intimacy',
    functionPurpose: 'Tracks intimacy patterns, desires, and relationship intentions',
    coreMaterials: 'Linen-bound journal with guided prompts and blank pages',
    applicationExperience: 'Reflect solo or together. Track desires. Celebrate growth',
    purposeLabels: ['Reflect', 'Connect'],
    timeLabels: ['Evening']
  },

  // ========================================
  // RITUAL VITAL™ (7 SKUs)
  // ========================================
  {
    index: 27,
    sku: 'HOLY-VIT-001',
    name: 'Breathwork Guide Cards',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Teaches foundational breathwork techniques for stress and energy',
    coreMaterials: '20 cards with illustrated breath patterns and timing',
    applicationExperience: 'Draw a card. Follow the breath. Feel the shift',
    purposeLabels: ['Breathe', 'Ground'],
    timeLabels: ['Morning', 'Evening']
  },
  {
    index: 28,
    sku: 'HOLY-VIT-002',
    name: 'Ice Roller Tool',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Reduces inflammation and tightens skin with cold therapy',
    coreMaterials: 'Silicone roller filled with distilled water',
    applicationExperience: 'Freeze overnight. Roll on face, neck, body. Instant refresh',
    purposeLabels: ['Cool', 'Tighten'],
    timeLabels: ['Morning']
  },
  {
    index: 29,
    sku: 'HOLY-VIT-003',
    name: 'Adapto Longevity Blend',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Supports stress resilience and longevity with adaptogenic mushrooms',
    coreMaterials: 'Reishi, lion\'s mane, cordyceps, ashwagandha, cacao',
    applicationExperience: 'Mix into coffee, tea, or smoothie. Daily vitality ritual',
    purposeLabels: ['Adapt', 'Vitality'],
    timeLabels: ['Morning']
  },
  {
    index: 30,
    sku: 'HOLY-VIT-004',
    name: 'Electrolyte Hydration Powder',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Replenishes minerals and supports cellular hydration',
    coreMaterials: 'Sea salt, coconut water powder, magnesium, potassium, trace minerals',
    applicationExperience: 'Mix into water. Drink throughout the day. Feel revitalized',
    purposeLabels: ['Hydrate', 'Replenish'],
    timeLabels: ['Morning', 'Ritual']
  },
  {
    index: 31,
    sku: 'HOLY-VIT-005',
    name: 'Sauna Ritual Towel',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Enhances heat therapy practice with quick-dry, absorbent fabric',
    coreMaterials: 'Turkish cotton or bamboo blend, lightweight and durable',
    applicationExperience: 'Bring to sauna or steam room. Wring out easily. Dries fast',
    purposeLabels: ['Heat', 'Cleanse'],
    timeLabels: ['Evening']
  },
  {
    index: 32,
    sku: 'HOLY-VIT-006',
    name: 'Cold Plunge Timer',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Tracks cold exposure time with waterproof interval timer',
    coreMaterials: 'Waterproof digital timer with suction cup mount',
    applicationExperience: 'Set duration. Submerge. Track progress. Build resilience',
    purposeLabels: ['Cool', 'Track'],
    timeLabels: ['Morning']
  },
  {
    index: 33,
    sku: 'HOLY-VIT-007',
    name: 'Longevity Journal',
    system: 'Ritual Vital™',
    systemCode: 'VIT',
    focusArea: 'Longevity',
    functionPurpose: 'Tracks wellness metrics, habits, and longevity experiments',
    coreMaterials: 'Linen-bound journal with data tracking pages and reflection prompts',
    applicationExperience: 'Log daily. Track patterns. Optimize your vitality',
    purposeLabels: ['Track', 'Reflect'],
    timeLabels: ['Evening']
  }
];

// Helper functions for data export
export const getProductsBySystem = (systemCode: string): ProductData[] => {
  return HOLY_PRODUCT_DATABASE.filter(p => p.systemCode === systemCode);
};

export const getProductBySKU = (sku: string): ProductData | undefined => {
  return HOLY_PRODUCT_DATABASE.find(p => p.sku === sku);
};

export const getAllSKUs = (): string[] => {
  return HOLY_PRODUCT_DATABASE.map(p => p.sku);
};

export const getSystemSummary = () => {
  const systems = ['AFT', 'REN', 'TCH', 'UNI', 'VIT'];
  return systems.map(code => ({
    code,
    count: getProductsBySystem(code).length,
    products: getProductsBySystem(code).map(p => p.name)
  }));
};

// Export as CSV-ready string
export const exportAsCSV = (): string => {
  const headers = [
    'Index',
    'SKU',
    'Product Name',
    'System',
    'Focus Area',
    'Function/Purpose',
    'Core Materials',
    'Application & Experience',
    'Purpose Labels',
    'Time Labels'
  ];
  
  const rows = HOLY_PRODUCT_DATABASE.map(p => [
    p.index,
    p.sku,
    p.name,
    p.system,
    p.focusArea,
    p.functionPurpose,
    p.coreMaterials,
    p.applicationExperience,
    p.purposeLabels.join('; '),
    p.timeLabels.join('; ')
  ]);
  
  return [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
};

// Export as JSON string
export const exportAsJSON = (): string => {
  return JSON.stringify(HOLY_PRODUCT_DATABASE, null, 2);
};
