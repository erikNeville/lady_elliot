import * as React from 'react';

import atomicDawg from '../images/atomic_dawg333w.jpg';
import planets from '../images/balloon_planets200w.jpg';
import blueDog from '../images/balloondog_blue200w.jpg';
import lilacDog from '../images/balloondog_lilac200w.jpg';
import pinkDog from '../images/balloondog_pink200w.jpg';
import yellowDog from '../images/balloondog_yellow200w.jpg';
import blueUnicorn from '../images/balloonicorn_blue200w.jpg';
import greenUnicorn from '../images/balloonicorn_green200w.jpg';
import orangeUnicorn from '../images/balloonicorn_orange200w.jpg';
import pinkUnicorn from '../images/balloonicorn_pink200w.jpg';
import purpleUnicorn from '../images/balloonicorn_purple200w.jpg';
import yellowUnicorn from '../images/balloonicorn_yellow200w.jpg';
import blueFlamingo from '../images/blue_flamingo200w.jpg';
import cassette from '../images/cassette167w.jpg';
import pianoCat from '../images/cat_on_piano_moon267w.jpg';
import cosmicFunk from '../images/cosmic_funk_mermaid200w.jpg';
import cosmina from '../images/cosmina400w.jpg';
import cottonCandyUnicorn from '../images/cotton_candy_unicorn333w.jpg';
import crystalOwl from '../images/crystal_snowy_owl300w.jpg';
import dragon from '../images/disco_dragon200w.jpg';
import drums from '../images/disco_drumset400w.jpg';
import zebra from '../images/drippy_zebra400w.jpg';
import imposter from '../images/imposter_syndrome333w.jpg';
import jellyfish from '../images/jellyfish200w.jpg';
import kittyHendrix from '../images/kitty_hendrix_15x30.jpg';
import roboHorses from '../images/robot_horse_race667w.jpg';
import saoirse from '../images/saoirse667w.jpg';
import spaceCadet from '../images/space_cadet333w.jpg';
import starChild from '../images/star_child400w.jpg';
import agent from '../images/the_agent250w.jpg';
import andromeda from '../images/andromeda_mermaid_16x40.jpg';
import bananaKitten from '../images/banana_baby_kitten_12x18.jpg';
import blueBaby from '../images/blue_baby_14x14.jpg';
import blueRaspberry from '../images/blue_raspberry_macaron_mermaid_12x36.jpg';
import carouselHorse from '../images/carousel_horse_20x20.jpg';
import catFairy from '../images/cat_fairy_16x20.jpg';
import citrine from '../images/citrine_stallion_24x24.jpg';
import coastal from '../images/coastal_blue_cliffs_12x16.jpg';
import coffeeMermaid from '../images/coffee_mermaid_24x12.jpg';
import cobra from '../images/commission_cobra_15x30.jpg';
import commissionDog from '../images/commission_dog.jpg';
import commissionFamily from '../images/commission_family.jpg';
import coolCat from '../images/cool_cat_12x12.jpg';
import cosmicTiger from '../images/cosmic_tiger_queen_48x24.jpg';
import crimsonBear from '../images/crimson_fishing_bear_18x24.jpg';
import crystalPuffins from '../images/crystal_critter_puffins_20x10.jpg';
import crystalTortoise from '../images/crystal_critter_tortoise_14x14.jpg';
import crystalCrownCat from '../images/crystal_crown_cat_12x16.jpg';
import crystalMohawk from '../images/crystal_mohawk_14x14.jpg';
import crystalTigerAmethyst from '../images/crystal_tooth_tiger_amethyst_12x12.jpg';
import crystalTigerCitrine from '../images/crystal_tooth_tiger_citrine_12x12.jpg';
import discoPuppy from '../images/disco_puppy_12x36.jpg';
import roseWhale from '../images/hibiscus_rose_humpback_whale_16x24.jpg';
import longhorn from '../images/highland_longhorn_10x20.jpg';
import vanillaCat from '../images/ice_cream_cone_vanilla_sprinkle_kitten_12x24.jpg';
import jackaloupe from '../images/jackaloupe_15x30.jpg';
import kitticornTrio from '../images/kitticorn_trio_20x16.jpg';
import magentaServal from '../images/magenta_boss_serval_15x30.jpg';
import mermaidAmethyst from '../images/mermaid_amethyst_12x36.jpg';
import mermaidBubblegum from '../images/mermaid_bubblegum_12x36.jpg';
import mermaidHibiscus from '../images/mermaid_hibiscus_princess_12x36.jpg';
import mermaidLimes from '../images/mermaid_love_limes_and_lemons_12x36.jpg';
import mermaidMint from '../images/mint_chocolate_chip_mermaid_12x36.jpg';
import mermaidRedVelvet from '../images/red_velvet_mermaid_40x16.jpg';
import mermaidTaffy from '../images/salt_water_taffy_mermaid_12x36.jpg';
import musicSiren from '../images/music_siren_15x30.jpg';
import navyNight from '../images/navy_night_40x16.jpg';
import orcaFamily from '../images/orca_family_36x12.jpg';
import purpleHaze from '../images/pnw_purple_haze_16x20.jpg';
import purrmaidBlue from '../images/purrmaid_blue_12x24.jpg';
import QLogo from '../images/QSL_logo_20x16.jpg';
import rainbowGiraffe from '../images/rainbow_giraffe_16x40.jpg';
import seaplane from '../images/seaplane_48x24.jpg';
import loon from '../images/the_common_loon_15x30.jpg';
import twoZebras from '../images/zebra_18x24.jpg';

export enum Categories {
  Animals = 'animals',
  BalloonAnimals = 'balloon-animals',
  Crystals = 'crystals',
  Mermaids = 'mermaids',
  Music = 'music',
  People = 'people',
  Landscapes = 'landscapes',
}

const ACRYLIC = 'Acrylic on Canvas';

export interface IImage {
  src: string;
  title: string;
  category: string;
  medium: string;
  w: number;
  h: number;
}

interface ImageState {
  images: IImage[];
}

interface ImageProviderProps {
  children: React.ReactNode;
}

const initState: ImageState = {
  images: [
    {
      src: dragon,
      title: 'Disco Dragon',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 12,
      h: 24,
    },
    {
      src: kittyHendrix,
      title: 'Kitty Hendrix',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: bananaKitten,
      title: 'Banana Baby Kitten',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 12,
      h: 18,
    },
    {
      src: blueBaby,
      title: 'Blue Baby',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 14,
      h: 14,
    },
    {
      src: blueRaspberry,
      title: 'Blue Raspberry Macaron Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: carouselHorse,
      title: 'Carousel Horse',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 20,
      h: 20,
    },
    {
      src: catFairy,
      title: 'Cat Fairy',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 16,
      h: 20,
    },
    {
      src: andromeda,
      title: 'Andromeda Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 16,
      h: 40,
    },
    {
      src: cosmina,
      title: 'Cosmina',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 24,
      h: 48,
    },
    {
      src: cosmicFunk,
      title: 'Cosmic Funk Mermaid',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: crystalOwl,
      title: 'Snowy Owl',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 18,
      h: 24,
    },
    {
      src: pianoCat,
      title: 'Cat on a Piano Moon',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 16,
      h: 20,
    },
    {
      src: agent,
      title: 'The Agent',
      category: 'misc',
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: jellyfish,
      title: 'Jellyfish',
      category: 'misc',
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: atomicDawg,
      title: 'Atomic Dawg',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 20,
      h: 20,
    },
    {
      src: drums,
      title: 'Disco Drumset',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 24,
      h: 30,
    },
    {
      src: saoirse,
      title: 'Saoirse',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 40,
      h: 16,
    },
    {
      src: spaceCadet,
      title: 'Space Cadet',
      category: Categories.People,
      medium: ACRYLIC,
      w: 20,
      h: 20,
    },
    {
      src: cassette,
      title: 'Cassette Tape',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 10,
      h: 20,
    },
    {
      src: planets,
      title: 'Balloon Planets',
      category: Categories.People,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: starChild,
      title: 'Star Child',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 24,
      h: 18,
    },
    {
      src: zebra,
      title: 'Drippy Zebra',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 24,
      h: 30,
    },
    {
      src: roboHorses,
      title: 'Robo Horse Race',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 40,
      h: 16,
    },
    {
      src: cottonCandyUnicorn,
      title: 'Cotton Candy Unicorn',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 20,
      h: 10,
    },
    {
      src: imposter,
      title: 'Imposter Syndrome',
      category: Categories.People,
      medium: ACRYLIC,
      w: 20,
      h: 16,
    },
    {
      src: blueFlamingo,
      title: 'Blue Flamingo',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 12,
      h: 16,
    },
    {
      src: blueDog,
      title: 'Blue Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: lilacDog,
      title: 'Lilac Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: pinkDog,
      title: 'Pink Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: yellowDog,
      title: 'Yellow Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: blueUnicorn,
      title: 'Blue Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: greenUnicorn,
      title: 'Green Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: orangeUnicorn,
      title: 'Orange Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: pinkUnicorn,
      title: 'Pink Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: purpleUnicorn,
      title: 'Purple Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: yellowUnicorn,
      title: 'Yellow Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: citrine,
      title: 'Citrine Stallion',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 24,
      h: 24,
    },
    {
      src: coastal,
      title: 'Coastal Blue Cliffs',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      w: 12,
      h: 16,
    },
    {
      src: coffeeMermaid,
      title: 'Coffee Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 24,
      h: 12,
    },
    {
      src: cobra,
      title: 'Commission Cobra',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: commissionDog,
      title: 'Commission Dog',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 12,
      h: 24,
    },
    {
      src: commissionFamily,
      title: 'Commission Family',
      category: Categories.People,
      medium: ACRYLIC,
      w: 38,
      h: 16,
    },
    {
      src: coolCat,
      title: 'Cool Cat',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: cosmicTiger,
      title: 'Cosmic Tiger Queen',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 48,
      h: 24,
    },
    {
      src: crimsonBear,
      title: 'Crimson Fishing Bear',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 18,
      h: 24,
    },
    {
      src: crystalPuffins,
      title: 'Crystal Critter Puffins',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 20,
      h: 10,
    },
    {
      src: crystalTortoise,
      title: 'Crystal Critter Tortoise',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 14,
      h: 14,
    },
    {
      src: crystalCrownCat,
      title: 'Crystal Crown Cat',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 12,
      h: 16,
    },
    {
      src: crystalMohawk,
      title: 'Crystal Mohawk',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 14,
      h: 14,
    },
    {
      src: crystalTigerAmethyst,
      title: 'Crystal Tooth Tiger Amethyst',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: crystalTigerCitrine,
      title: 'Crystal Tooth Tiger Citrine',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 12,
      h: 12,
    },
    {
      src: discoPuppy,
      title: 'Disco Puppy',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: roseWhale,
      title: 'Hibiscus Rose Humpback Whale',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 16,
      h: 24,
    },
    {
      src: longhorn,
      title: 'Highland Longhorn',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 10,
      h: 20,
    },
    {
      src: vanillaCat,
      title: 'Ice Cream Vanilla Sprinkle Kitten',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 12,
      h: 24,
    },
    {
      src: jackaloupe,
      title: 'Jackaloupe',
      category: Categories.Crystals,
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: kitticornTrio,
      title: 'Kitticorn Trio',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 20,
      h: 16,
    },
    {
      src: magentaServal,
      title: 'Magenta Boss Serval',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: mermaidAmethyst,
      title: 'Mermaid Amethyst',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: mermaidBubblegum,
      title: 'Mermaid Bubblegum',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: mermaidHibiscus,
      title: 'Mermaid Hibiscus Princess',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: mermaidLimes,
      title: 'Mermaid Limes and Lemons',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: mermaidMint,
      title: 'Mermaid Mint Chocolate Chip',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: mermaidRedVelvet,
      title: 'Mermaid Mint Red Velvet',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 40,
      h: 16,
    },
    {
      src: mermaidTaffy,
      title: 'Mermaid Salt Water Taffy',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      w: 12,
      h: 36,
    },
    {
      src: musicSiren,
      title: 'Music Siren',
      category: Categories.Music,
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: navyNight,
      title: 'Navy Night',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      w: 40,
      h: 16,
    },
    {
      src: orcaFamily,
      title: 'Orca Family',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      w: 36,
      h: 12,
    },
    {
      src: purpleHaze,
      title: 'PNW Purple Haze',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      w: 16,
      h: 20,
    },
    {
      src: purrmaidBlue,
      title: 'Purrmaid Blue',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 12,
      h: 24,
    },
    {
      src: QLogo,
      title: 'Commission QSL Logo',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      w: 20,
      h: 16,
    },
    {
      src: rainbowGiraffe,
      title: 'Rainbow Giraffe',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 16,
      h: 40,
    },
    {
      src: seaplane,
      title: 'Seaplane',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      w: 48,
      h: 24,
    },
    {
      src: loon,
      title: 'The Common Loon',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 15,
      h: 30,
    },
    {
      src: twoZebras,
      title: 'Two Zebras',
      category: Categories.Animals,
      medium: ACRYLIC,
      w: 18,
      h: 24,
    },
  ],
};

export const ImageContext = React.createContext(initState);

export const ImageProvider = ({ children }: ImageProviderProps) => {
  return (
    <ImageContext.Provider value={initState}>{children}</ImageContext.Provider>
  );
};
