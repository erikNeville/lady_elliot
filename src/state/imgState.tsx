import * as React from 'react';
import amethystMermaid from '../imgs/amethyst_mermaid.12x36.jpg';
import andromedaMermaid from '../imgs/andromeda_mermaid.16x40.jpg';
import atomicDawg from '../imgs/atomic_dawg333.jpg';
import balloondogBlue from '../imgs/balloondog_blue.jpg';
import balloondogLilac from '../imgs/balloondog_lilac.jpg';
import balloondogPink from '../imgs/balloondog_pink.jpg';
import balloondogYellow from '../imgs/balloondog_yellow.jpg';
import balloonicornBlue from '../imgs/balloonicorn_blue.jpg';
import balloonicornGreen from '../imgs/balloonicorn_green.jpg';
import balloonicornOrange from '../imgs/balloonicorn_orange.jpg';
import balloonicornPink from '../imgs/balloonicorn_pink.jpg';
import balloonicornPurple from '../imgs/balloonicorn_purple.jpg';
import balloonicornYellow from '../imgs/balloonicorn_yellow.jpg';
import balloonPlanets from '../imgs/balloon_planets.jpg';
import bananaBabyKitten from '../imgs/banana_baby_kitten.12x18.jpg';
import blueBaby from '../imgs/blue_baby.14x14.jpg';
import blueFlamingo from '../imgs/blue_flamingo.12x16.jpg';
import blueRaspberryMacaronMermaid from '../imgs/blue_raspberry_macaron_mermaid.12x36.jpg';
import bubblegumMermaid from '../imgs/bubblegum_mermaid.12x36.jpg';
import carouselHorse from '../imgs/carousel_horse.20x20.jpg';
import cassett from '../imgs/cassett.jpg';
import catFairy from '../imgs/cat_fairy.16x20.jpg';
import catOnPianoMoon from '../imgs/cat_on_piano_moon.jpg';
import citrineStallion from '../imgs/citrine_stallion.24x24.jpg';
import coastalBlueCliffs from '../imgs/coastal_blue_cliffs.12x16.jpg';
import coffeeMermaid from '../imgs/coffee_mermaid.12x24.jpg';
import commissionCobra from '../imgs/commission_cobra.15x30.jpg';
import commissionDog from '../imgs/commission_dog.12x24.jpg';
import commissionFamily from '../imgs/commission_family.38x16.jpg';
import coolCat from '../imgs/cool_cat.12x12.jpg';
import cosmicFunkMermaid from '../imgs/cosmic_funk_mermaid.jpg';
import cosmicTigerQueen from '../imgs/cosmic_tiger_queen.48x24.jpg';
import cosmina from '../imgs/cosmina.jpg';
import cottonCandyUnicorn from '../imgs/cotton_candy_unicorn.20x10.jpg';
import crimsonFishingBear from '../imgs/crimson_fishing_bear.18x24.jpg';
import crystalCritterPuffins from '../imgs/crystal_critter_puffins.10x20.jpg';
import crystalCritterTortoise from '../imgs/crystal_critter_tortoise.14x14.jpg';
import crystalCrownCat from '../imgs/crystal_crown_cat.12x16.jpg';
import crystalMohawk from '../imgs/crystal_mohawk.14x14.jpg';
import crystalSnowyOwl from '../imgs/crystal_snowy_owl300.jpg'; // TODO: find and replace with original
import crystalToothTigerAmythist from '../imgs/crystal_tooth_tiger_amythist.12x12.jpg';
import crystalToothTigerCitrine from '../imgs/crystal_tooth_tiger_citrine.12x12.jpg';
import discoDragon from '../imgs/disco_dragon.jpg';
import discoDrumset from '../imgs/disco_drumset.jpg';
import discoPuppy from '../imgs/disco_puppy.12x36.jpg';
import drippyZebra from '../imgs/drippy_zebra.jpg';
// import hexagonSpectra from '../imgs/hexagon_spectra.jpg';
import hibiscusPrincessMermaid from '../imgs/hibiscus_princess_mermaid.12x36.jpg';
import hibiscusRoseHumpbackWhale from '../imgs/hibiscus_rose_humpback_whale.16x24.jpg';
import highlandLonghorn from '../imgs/highland_longhorn.10x20.jpg';
import imposterSyndrome from '../imgs/imposter_syndrome.jpg';
import jackaloupe from '../imgs/jackaloupe.15x30.jpg';
import jellyfish from '../imgs/jellyfish.12x12.jpg';
import kitticornTrio from '../imgs/kitticorn_trio.16x20.jpg';
import kittyHendrix from '../imgs/kitty_hendrix.15x30.jpg';
// import lipsMusicalNecklace from '../imgs/lips_musical_necklace.jpg';
import loveLimesLemonsMermaid from '../imgs/love_limes_lemons_mermaid.12x36.jpg';
import magentaBossServal from '../imgs/magenta_boss_serval.15x30.jpg';
import mimosaMermaid from '../imgs/mimosa_mermaid.12x36.jpg';
import mintChocolateChipMermaid from '../imgs/mint_chocolate_chip_mermaid.12x36.jpg';
import musicSiren from '../imgs/music_siren.15x30.jpg';
import navyNight from '../imgs/navy_night.16x40.jpg';
import orcaFamily from '../imgs/orca_family.36x12.jpg';
import pianoMohawk from '../imgs/piano_mohawk.24x18.jpg';
import pnwPurpleHaze from '../imgs/pnw_purple_haze.16x20.jpg';
import purrmaidBlue from '../imgs/purrmaid_blue.12x24.jpg';
import purrmaidPurple from '../imgs/purrmaid_purple.16x16.png';
import qslLogo from '../imgs/qsl_logo.16x20.jpg';
import rainbowGiraffe from '../imgs/rainbow_giraffe.16x40.jpg';
import redVelvetMermaid from '../imgs/red_velvet_mermaid.16x40.jpg';
import robotHorseRace from '../imgs/robot_horse_race667.jpg'; // TODO: find and replace with original
import saltWaterTaffyMermaid from '../imgs/salt_water_taffy_mermaid.12x36.jpg';
import sasha from '../imgs/sasha.jpg';
// import saturn from '../imgs/saturn.18x24.jpg';
import seaplane from '../imgs/seaplane.48x24.jpg';
import spaceCadet from '../imgs/sun_bun.20x20.jpg';
import theAgent from '../imgs/the_agent.jpg';
import theCommonLoon from '../imgs/the_common_loon.30x15.jpg';
import vanillaIceCreamKitten from '../imgs/vanilla_ice_cream_kitten.12x24.jpg';
import winterTreesSilhouette from '../imgs/winter_trees_silhouette.16x16.png';
// import writersBlock from '../imgs/writers_block.jpg';
import zebra from '../imgs/zebra.18x24.jpg';

export enum Categories {
  WoodPanelPnwLandscapes = 'new-for-2022',
  Animals = 'animals',
  BalloonAnimals = 'balloon-animals',
  Crystals = 'crystals',
  Mermaids = 'mermaids',
  Music = 'music',
  People = 'people',
  Landscapes = 'landscapes',
  Commissions = 'commissions',
  Cats = 'cats',
  // make cat category - Elliot will get me which cats
  // starwars category
  // macromay
}

// TODO find mermaid & octopus, portia portrait

export interface IImage {
  src: string;
  title: string;
  category: string;
  medium: string;
  width: number;
  height: number;
  index?: number | string;
}

interface ImageState {
  images: IImage[];
}

interface ImageProviderProps {
  children: React.ReactNode;
}

const ACRYLIC = 'Acrylic on Canvas';

const initState: ImageState = {
  images: [
    {
      src: discoDragon,
      title: 'Disco Dragon',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 12,
      height: 24,
    },
    {
      src: kittyHendrix,
      title: 'Kitty Hendrix',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: bananaBabyKitten,
      title: 'Banana Baby Kitten',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 12,
      height: 18,
    },
    {
      src: blueBaby,
      title: 'Blue Baby',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 14,
      height: 14,
    },
    {
      src: blueRaspberryMacaronMermaid,
      title: 'Blue Raspberry Macaron Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: carouselHorse,
      title: 'Carousel Horse',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 20,
      height: 20,
    },
    {
      src: catFairy,
      title: 'Cat Fairy',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 16,
      height: 20,
    },
    {
      src: andromedaMermaid,
      title: 'Andromeda Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 16,
      height: 40,
    },
    {
      src: cosmina,
      title: 'Cosmina',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 24,
      height: 48,
    },
    {
      src: cosmicFunkMermaid,
      title: 'Cosmic Funk Mermaid',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: crystalSnowyOwl,
      title: 'Snowy Owl',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 18,
      height: 24,
    },
    {
      src: catOnPianoMoon,
      title: 'Cat on a Piano Moon',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 16,
      height: 20,
    },
    {
      src: theAgent,
      title: 'The Agent',
      category: 'misc',
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: jellyfish,
      title: 'Jellyfish',
      category: 'misc',
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: atomicDawg,
      title: 'Atomic Dawg',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 20,
      height: 20,
    },
    {
      src: discoDrumset,
      title: 'Disco Drumset',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 24,
      height: 30,
    },
    {
      src: sasha,
      title: 'Sasha',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 40,
      height: 16,
    },
    {
      src: spaceCadet,
      title: 'Space Cadet',
      category: Categories.People,
      medium: ACRYLIC,
      width: 20,
      height: 20,
    },
    {
      src: cassett,
      title: 'Cassette Tape',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 10,
      height: 20,
    },
    {
      src: balloonPlanets,
      title: 'Balloon Planets',
      category: Categories.People,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: pianoMohawk,
      title: 'Star Child',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 24,
      height: 18,
    },
    {
      src: robotHorseRace,
      title: 'Robo Horse Race',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 40,
      height: 16,
    },
    {
      src: cottonCandyUnicorn,
      title: 'Cotton Candy Unicorn',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 20,
      height: 10,
    },
    {
      src: imposterSyndrome,
      title: 'Imposter Syndrome',
      category: Categories.People,
      medium: ACRYLIC,
      width: 20,
      height: 16,
    },
    {
      src: blueFlamingo,
      title: 'Blue Flamingo',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 12,
      height: 16,
    },
    {
      src: balloondogBlue,
      title: 'Blue Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloondogLilac,
      title: 'Lilac Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloondogPink,
      title: 'Pink Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloondogYellow,
      title: 'Yellow Balloon Dog',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloonicornBlue,
      title: 'Blue Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloonicornGreen,
      title: 'Green Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloonicornOrange,
      title: 'Orange Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloonicornPink,
      title: 'Pink Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloonicornPurple,
      title: 'Purple Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: balloonicornYellow,
      title: 'Yellow Balloonicorn',
      category: Categories.BalloonAnimals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: citrineStallion,
      title: 'Citrine Stallion',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 24,
      height: 24,
    },
    {
      src: coastalBlueCliffs,
      title: 'Coastal Blue Cliffs',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 12,
      height: 16,
    },
    {
      src: coffeeMermaid,
      title: 'Coffee Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 24,
      height: 12,
    },
    {
      src: commissionCobra,
      title: 'Commission Cobra',
      category: Categories.Commissions,
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: commissionDog,
      title: 'Commission Dog',
      category: Categories.Commissions,
      medium: ACRYLIC,
      width: 12,
      height: 24,
    },
    {
      src: commissionFamily,
      title: 'Commission Family',
      category: Categories.Commissions,
      medium: ACRYLIC,
      width: 38,
      height: 16,
    },
    {
      src: coolCat,
      title: 'Cool Cat',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: cosmicTigerQueen,
      title: 'Cosmic Tiger Queen',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 48,
      height: 24,
    },
    {
      src: crimsonFishingBear,
      title: 'Crimson Fishing Bear',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 18,
      height: 24,
    },
    {
      src: crystalCritterPuffins,
      title: 'Crystal Critter Puffins',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 20,
      height: 10,
    },
    {
      src: crystalCritterTortoise,
      title: 'Crystal Critter Tortoise',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 14,
      height: 14,
    },
    {
      src: crystalCrownCat,
      title: 'Crystal Crown Cat',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 12,
      height: 16,
    },
    {
      src: crystalMohawk,
      title: 'Crystal Mohawk',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 14,
      height: 14,
    },
    {
      src: crystalToothTigerAmythist,
      title: 'Crystal Tooth Tiger Amethyst',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: crystalToothTigerCitrine,
      title: 'Crystal Tooth Tiger Citrine',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 12,
      height: 12,
    },
    {
      src: discoPuppy,
      title: 'Disco Puppy',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: hibiscusRoseHumpbackWhale,
      title: 'Hibiscus Rose Humpback Whale',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 16,
      height: 24,
    },
    {
      src: highlandLonghorn,
      title: 'Highland Longhorn',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 10,
      height: 20,
    },
    {
      src: vanillaIceCreamKitten,
      title: 'Ice Cream Vanilla Sprinkle Kitten',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 12,
      height: 24,
    },
    {
      src: jackaloupe,
      title: 'Jackaloupe',
      category: Categories.Crystals,
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: kitticornTrio,
      title: 'Kitticorn Trio',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 20,
      height: 16,
    },
    {
      src: magentaBossServal,
      title: 'Magenta Boss Serval',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: amethystMermaid,
      title: 'Mermaid Amethyst',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: bubblegumMermaid,
      title: 'Mermaid Bubblegum',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: hibiscusPrincessMermaid,
      title: 'Mermaid Hibiscus Princess',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: loveLimesLemonsMermaid,
      title: 'Mermaid Love Limes and Lemons',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: mintChocolateChipMermaid,
      title: 'Mermaid Mint Chocolate Chip',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: redVelvetMermaid,
      title: 'Mermaid Mint Red Velvet',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 40,
      height: 16,
    },
    {
      src: saltWaterTaffyMermaid,
      title: 'Mermaid Salt Water Taffy',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: musicSiren,
      title: 'Music Siren',
      category: Categories.Music,
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: navyNight,
      title: 'Navy Night',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 40,
      height: 16,
    },
    {
      src: orcaFamily,
      title: 'Orca Family',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 36,
      height: 12,
    },
    {
      src: pnwPurpleHaze,
      title: 'PNW Purple Haze',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 16,
      height: 20,
    },
    {
      src: purrmaidBlue,
      title: 'Purrmaid Blue',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 12,
      height: 24,
    },
    {
      src: qslLogo,
      title: 'Commission QSL Logo',
      category: Categories.Commissions,
      medium: ACRYLIC,
      width: 20,
      height: 16,
    },
    {
      src: rainbowGiraffe,
      title: 'Rainbow Giraffe',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 16,
      height: 40,
    },
    {
      src: seaplane,
      title: 'Seaplane',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 48,
      height: 24,
    },
    {
      src: theCommonLoon,
      title: 'The Common Loon',
      category: Categories.Commissions,
      medium: ACRYLIC,
      width: 15,
      height: 30,
    },
    {
      src: zebra,
      title: 'Two Zebras',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 18,
      height: 24,
    },
    {
      src: drippyZebra,
      title: 'Drippy Zebra',
      category: Categories.Animals,
      medium: ACRYLIC,
      width: 18,
      height: 24,
    },
    {
      src: mimosaMermaid,
      title: 'Mimosa Mermaid',
      category: Categories.Mermaids,
      medium: ACRYLIC,
      width: 12,
      height: 36,
    },
    {
      src: purrmaidPurple,
      title: 'Purrmaid Purple',
      category: Categories.Cats,
      medium: ACRYLIC,
      width: 16,
      height: 16,
    },
    {
      src: winterTreesSilhouette,
      title: 'Winter Trees Silhouette',
      category: Categories.Landscapes,
      medium: ACRYLIC,
      width: 16,
      height: 16,
    },
  ],
};

export const ImageContext = React.createContext(initState);

export const ImageProvider = ({
  children,
}: ImageProviderProps): JSX.Element => {
  return (
    <ImageContext.Provider value={initState}>{children}</ImageContext.Provider>
  );
};
