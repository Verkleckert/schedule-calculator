export const effectProfit: Record<string, number> = {
  "anti-gravity": 0.54,
  athletic: 0.32,
  balding: 0.3,
  "bright-eyed": 0.4,
  calming: 0.1,
  "calorie-dense": 0.28,
  cyclopean: 0.56,
  disorienting: 0.0,
  electrifying: 0.5,
  energizing: 0.22,
  euphoric: 0.18,
  explosive: 0.0,
  focused: 0.16,
  foggy: 0.36,
  gingeritis: 0.2,
  glowing: 0.48,
  jennerising: 0.42,
  laxative: 0.0,
  "long-faced": 0.52,
  munchies: 0.12,
  paranoia: 0.0,
  refreshing: 0.14,
  schizophrenia: 0.0,
  sedating: 0.26,
  "seizure-inducing": 0.0,
  shrinking: 0.6,
  slippery: 0.34,
  smelly: 0.0,
  sneaky: 0.24,
  spicy: 0.38,
  "thought-provoking": 0.44,
  toxic: 0.0,
  "tropic-thunder": 0.46,
  zombifying: 0.58,
};

export const substanceEffect: Record<string, string> = {
  cuke: "energizing",
  "flu medicine": "sedating",
  gasoline: "toxic",
  donut: "calorie-dense",
  "energy drink": "athletic",
  "mouth wash": "balding",
  "motor oil": "slippery",
  banana: "gingeritis",
  chili: "spicy",
  iodine: "jennerising",
  paracetamol: "sneaky",
  viagra: "tropic-thunder",
  "horse semen": "long-faced",
  "mega bean": "foggy",
  addy: "thought-provoking",
  battery: "bright-eyed",
};

export const mixingRules: Record<string, string> = {
  // Cuke
  "cuke:euphoric": "laxative",
  "cuke:foggy": "cyclopean",
  "cuke:gingeritis": "thought-provoking",
  "cuke:munchies": "athletic",
  "cuke:slippery": "munchies",
  "cuke:sneaky": "paranoia",
  "cuke:toxic": "euphoric",

  // Flu Medicine
  "flu medicine:athletic": "munchies",
  "flu medicine:calming": "bright-eyed",
  "flu medicine:cyclopean": "foggy",
  "flu medicine:electrifying": "refreshing",
  "flu medicine:euphoric": "toxic",
  "flu medicine:focused": "calming",
  "flu medicine:laxative": "euphoric",
  "flu medicine:munchies": "slippery",
  "flu medicine:shrinking": "paranoia",
  "flu medicine:thought-provoking": "gingeritis",

  // Gasoline
  "gasoline:disorienting": "glowing",
  "gasoline:electrifying": "disorienting",
  "gasoline:energizing": "euphoric",
  "gasoline:euphoric": "spicy",
  "gasoline:gingeritis": "smelly",
  "gasoline:jennerising": "sneaky",
  "gasoline:laxative": "foggy",
  "gasoline:munchies": "sedating",
  "gasoline:paranoia": "calming",
  "gasoline:shrinking": "focused",
  "gasoline:sneaky": "tropic-thunder",

  // Donut
  "donut:anti-gravity": "slippery",
  "donut:balding": "sneaky",
  "donut:calorie-dense": "explosive",
  "donut:focused": "euphoric",
  "donut:jennerising": "gingeritis",
  "donut:munchies": "calming",
  "donut:shrinking": "energizing",

  // Energy Drink
  "energy drink:disorienting": "electrifying",
  "energy drink:euphoric": "energizing",
  "energy drink:focused": "shrinking",
  "energy drink:foggy": "laxative",
  "energy drink:glowing": "disorienting",
  "energy drink:schizophrenia": "balding",
  "energy drink:sedating": "munchies",
  "energy drink:spicy": "euphoric",
  "energy drink:tropic-thunder": "sneaky",

  // Mouth Wash
  "mouth wash:calming": "anti-gravity",
  "mouth wash:calorie-dense": "sneaky",
  "mouth wash:explosive": "sedating",
  "mouth wash:focused": "jennerising",

  // Motor Oil
  "motor oil:energizing": "munchies",
  "motor oil:euphoric": "sedating",
  "motor oil:foggy": "toxic",
  "motor oil:munchies": "schizophrenia",
  "motor oil:paranoia": "anti-gravity",

  // Banana
  "banana:calming": "sneaky",
  "banana:cyclopean": "energizing",
  "banana:disorienting": "focused",
  "banana:energizing": "thought-provoking",
  "banana:focused": "seizure-inducing",
  "banana:long-faced": "refreshing",
  "banana:paranoia": "jennerising",
  "banana:smelly": "anti-gravity",
  "banana:toxic": "smelly",

  // Chili
  "chili:anti-gravity": "tropic-thunder",
  "chili:athletic": "euphoric",
  "chili:laxative": "long-faced",
  "chili:munchies": "toxic",
  "chili:shrinking": "refreshing",
  "chili:sneaky": "bright-eyed",

  // Iodine
  "iodine:calming": "balding",
  "iodine:calorie-dense": "gingeritis",
  "iodine:euphoric": "seizure-inducing",
  "iodine:foggy": "paranoia",
  "iodine:refreshing": "thought-provoking",
  "iodine:toxic": "sneaky",

  // Paracetamol
  "paracetamol:calming": "slippery",
  "paracetamol:electrifying": "athletic",
  "paracetamol:energizing": "paranoia",
  "paracetamol:focused": "gingeritis",
  "paracetamol:foggy": "calming",
  "paracetamol:glowing": "toxic",
  "paracetamol:munchies": "anti-gravity",
  "paracetamol:paranoia": "balding",
  "paracetamol:spicy": "bright-eyed",
  "paracetamol:toxic": "tropic-thunder",

  // Viagra
  "viagra:athletic": "sneaky",
  "viagra:disorienting": "toxic",
  "viagra:euphoric": "bright-eyed",
  "viagra:laxative": "calming",
  "viagra:shrinking": "gingeritis",

  // Horse Semen
  "horse semen:anti-gravity": "calming",
  "horse semen:gingeritis": "refreshing",
  "horse semen:seizure-inducing": "energizing",
  "horse semen:thought-provoking": "electrifying",

  // Mega Bean
  "mega bean:athletic": "laxative",
  "mega bean:calming": "glowing",
  "mega bean:energizing": "cyclopean",
  "mega bean:focused": "disorienting",
  "mega bean:jennerising": "paranoia",
  "mega bean:seizure-inducing": "focused",
  "mega bean:shrinking": "electrifying",
  "mega bean:slippery": "toxic",
  "mega bean:sneaky": "calming",
  "mega bean:thought-provoking": "energizing",

  // Addy
  "addy:explosive": "euphoric",
  "addy:foggy": "energizing",
  "addy:glowing": "refreshing",
  "addy:long-faced": "electrifying",
  "addy:sedating": "gingeritis",

  // Battery
  "battery:cyclopean": "glowing",
  "battery:electrifying": "euphoric",
  "battery:euphoric": "zombifying",
  "battery:laxative": "calorie-dense",
  "battery:munchies": "tropic-thunder",
  "battery:shrinking": "munchies",
};

// Create a list of all effects for the dropdown
export const effectsList = Object.keys(effectProfit).sort();

// Create a list of all substances for reference
export const substancesList = Object.keys(substanceEffect).sort();

export interface Preset {
  name: string;
  initialEffect: string | null;
  basePrice: number;
  description?: string;
}

export const presets: Preset[] = [
  {
    name: "OG Kush",
    initialEffect: "calming",
    basePrice: 35,
    description: "A classic strain with calming effects",
  },
  {
    name: "Sour Diesel",
    initialEffect: "refreshing",
    basePrice: 35,
    description: "Known for its refreshing properties",
  },
  {
    name: "Green Crack",
    initialEffect: "energizing",
    basePrice: 35,
    description: "Provides an energizing experience",
  },
  {
    name: "Grandaddy Purple",
    initialEffect: "sedating",
    basePrice: 35,
    description: "Has sedating effects, good for relaxation",
  },
  {
    name: "Meth",
    initialEffect: null,
    basePrice: 70,
    description: "Higher base price with no initial effect",
  },
  {
    name: "Cocaine",
    initialEffect: "energizing",
    basePrice: 150,
    description: "Premium substance with high base price",
  },
];
