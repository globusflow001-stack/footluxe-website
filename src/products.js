

const products = [
  {
    id: 1,
    articleNo: 'JV-1',
    colour: 'White/Black Lycra',
    size: '5 TO 13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-1-white-black-lycra.jpg'
  },
  {
    id: 2,
    articleNo: 'JV-2',
    colour: 'Orange/Blk Lycra',
    size: '5 TO 11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-2-orange-blk-lycra.jpg'
  },
  {
    id: 3,
    articleNo: 'JV-3',
    colour: 'Yellow/Blk Lycra',
    size: '38 TO 45,47,49,50',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-3-yellow-blk-lycra.jpg'
  },
  {
    id: 4,
    articleNo: 'JV-4',
    colour: 'Grey/Black Lycra',
    size: '6 TO 12,16',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-4-grey-black-lycra.jpg'
  },
  {
    id: 5,
    articleNo: 'JV-5',
    colour: 'Yellow/Blk Lycra',
    size: '5 TO 11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-5-yellow-blk-lycra.jpg'
  },
  {
    id: 6,
    articleNo: 'JV-6',
    colour: 'Beige/Brown Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-6-beige-brown-lycra.jpg'
  },
  {
    id: 7,
    articleNo: 'JV-7',
    colour: 'Sky Blue/Orange Lycra',
    size: '6 TO 13',
    material: 'PU',
    soleType: 'PU Insocks with Insert',
    category: 'Insocks',
    image: '/products/jv-7-sky-blue-orange-lycra.jpg'
  },
  {
    id: 8,
    articleNo: 'JV-8',
    colour: 'Grey/Grey Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-8-grey-grey-lycra.jpg'
  },
  {
    id: 9,
    articleNo: 'JV-9',
    colour: 'Yellow',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-9-yellow.jpg'
  },
  {
    id: 10,
    articleNo: 'JV-10',
    colour: 'Grey',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-10-grey.jpg'
  },
  {
    id: 11,
    articleNo: 'JV-11',
    colour: 'Beige/Blk Lycra',
    size: '39-40,41-42,43-44,45,46)=4', // REVIEW: stray ")" and "=4" on slide — confirm size run
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-11-beige-blk-lycra.jpg'
  },
  {
    id: 12,
    articleNo: 'JV-12', // REVIEW: slide shows "JV 12" without hyphen; normalised to JV-12
    colour: 'Grey/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-12-grey-blk-lycra.jpg'
  },
  {
    id: 13,
    articleNo: 'JV-13',
    colour: 'Grey/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-13-grey-blk-lycra.jpg'
  },
  {
    id: 14,
    articleNo: 'JV-14',
    colour: 'Orange',
    size: '40 TO 44',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-14-orange.jpg'
  },
  {
    id: 15,
    articleNo: 'JV-15',
    colour: 'Grey',
    size: '39-40,41-42, 43-44,45-46= 4', // REVIEW: "= 4" suffix on slide — confirm size run
    material: 'PU',
    soleType: 'PU Half Heel FB', // REVIEW: half-heel footbed — confirm category "Insocks"
    category: 'Insocks',
    image: '/products/jv-15-grey.jpg'
  },
  {
    id: 16,
    articleNo: 'JV-16',
    colour: 'Grey/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-16-grey-blk-lycra.jpg'
  },
  {
    id: 17,
    articleNo: 'JV-17',
    colour: 'Beige/Green Lycra',
    size: '40 TO 45,49',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-17-beige-green-lycra.jpg'
  },
  {
    id: 18,
    articleNo: 'JV-18',
    colour: 'Yellow/Grey Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-18-yellow-grey-lycra.jpg'
  },
  {
    id: 19,
    articleNo: 'JV-19',
    colour: 'Yellow/Grey Lycra',
    size: '4 TO 13,15',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-19-yellow-grey-lycra.jpg'
  },
  {
    id: 20,
    articleNo: 'JV-19 W\'s',
    colour: 'Yellow/Grey Lycra',
    size: '3 TO 13,15',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-19-ws-yellow-grey-lycra.jpg'
  },
  {
    id: 21,
    articleNo: 'JV-20',
    colour: 'Yellow',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-20-yellow.jpg'
  },
  {
    id: 22,
    articleNo: 'JV-21',
    colour: 'Beige',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-21-beige.jpg'
  },
  {
    id: 23,
    articleNo: 'JV-22',
    colour: 'Beige/Blk Lycra',
    size: '3,8,13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-22-beige-blk-lycra.jpg'
  },
  {
    id: 24,
    articleNo: 'JV-24',
    colour: 'Beige/Grey Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-24-beige-grey-lycra.jpg'
  },
  {
    id: 25,
    articleNo: 'JV-25',
    colour: 'Orange/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-25-orange-blue-lycra.jpg'
  },
  {
    id: 26,
    articleNo: 'JV-26',
    colour: 'Beige/Blu',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-26-beige-blu.jpg'
  },
  {
    id: 27,
    articleNo: 'JV-27',
    colour: 'Beige/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-27-beige-blk-lycra.jpg'
  },
  {
    id: 28,
    articleNo: 'JV-29',
    colour: 'Yellow/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-29-yellow-blk-lycra.jpg'
  },
  {
    id: 29,
    articleNo: 'JV-30',
    colour: 'Beige/Beige Lycra',
    size: '39 TO 42,44,45,47',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-30-beige-beige-lycra.jpg'
  },
  {
    id: 30,
    articleNo: 'JV-31',
    colour: 'Grey/Brn Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-31-grey-brn-lycra.jpg'
  },
  {
    id: 31,
    articleNo: 'JV-32',
    colour: 'Beige',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-32-beige.jpg'
  },
  {
    id: 32,
    articleNo: 'JV-33',
    colour: 'Beige/Grey Lycra',
    size: '7 TO 10,13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-33-beige-grey-lycra.jpg'
  },
  {
    id: 33,
    articleNo: 'JV-34',
    colour: 'White/Blk Lycra',
    size: '6,7,8',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-34-white-blk-lycra.jpg'
  },
  {
    id: 34,
    articleNo: 'JV-35',
    colour: 'Orange/Blk Lycra',
    size: '5 TO 11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-35-orange-blk-lycra.jpg'
  },
  {
    id: 35,
    articleNo: 'JV-36',
    colour: 'Grey/Blk Lycra',
    size: '39-40,41-42,42-43', // REVIEW: "42-43" after "41-42" — possible typo for 43-44
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-36-grey-blk-lycra.jpg'
  },
  {
    id: 36,
    articleNo: 'JV-37',
    colour: 'Yellow/Brn Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-37-yellow-brn-lycra.jpg'
  },
  {
    id: 37,
    articleNo: 'JV-38',
    colour: 'Yellow/Blk Lycra',
    size: '5 TO 12,14',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-38-yellow-blk-lycra.jpg'
  },
  {
    id: 38,
    articleNo: 'JV-39',
    colour: 'Beige/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-39-beige-blk-lycra.jpg'
  },
  {
    id: 39,
    articleNo: 'JV-40',
    colour: 'White/Blk Lycra',
    size: '5,7 TO 11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-40-white-blk-lycra.jpg'
  },
  {
    id: 40,
    articleNo: 'JV-41',
    colour: 'White/Blk Lycra',
    size: '8,9',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-41-white-blk-lycra.jpg'
  },
  {
    id: 41,
    articleNo: 'JV-44',
    colour: 'Beige/Blk Lycra',
    size: '6 TO 9,11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-44-beige-blk-lycra.jpg'
  },
  {
    id: 42,
    articleNo: 'JV-45',
    colour: 'Grey',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-45-grey.jpg'
  },
  {
    id: 43,
    articleNo: 'JV-46',
    colour: 'Orange/Blk Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-46-orange-blk-lycra.jpg'
  },
  {
    id: 44,
    articleNo: 'JV-47',
    colour: 'Yellow/Blue Lycra',
    size: '3 TO 10,13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-47-yellow-blue-lycra.jpg'
  },
  {
    id: 45,
    articleNo: 'JV-48',
    colour: 'Yellow/Blk Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-48-yellow-blk-lycra.jpg'
  },
  {
    id: 46,
    articleNo: 'JV-49',
    colour: 'Grey/Blk Lycra',
    size: '7,9,11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-49-grey-blk-lycra.jpg'
  },
  {
    id: 47,
    articleNo: 'JV-51',
    colour: 'Orange/Black Fab',
    size: '6 TO 12',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-51-orange-black-fab.jpg'
  },
  {
    id: 48,
    articleNo: 'JV-52',
    colour: 'Light Grey/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-52-light-grey-blk-lycra.jpg'
  },
  {
    id: 49,
    articleNo: 'JV-53',
    colour: 'Light Grey/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-53-light-grey-blk-lycra.jpg'
  },
  {
    id: 50,
    articleNo: 'JV-54',
    colour: 'Blue/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-54-blue-blk-lycra.jpg'
  },
  {
    id: 51,
    articleNo: 'JV-55',
    colour: 'Blue/Black Lycra',
    size: '6 TO 10',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-55-blue-black-lycra.jpg'
  },
  {
    id: 52,
    articleNo: 'JV-56',
    colour: 'Yellow',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-56-yellow.jpg'
  },
  {
    id: 53,
    articleNo: 'JV-57',
    colour: 'Red/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-57-red-blk-lycra.jpg'
  },
  {
    id: 54,
    articleNo: 'JV-58',
    colour: 'Orange/Brn Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-58-orange-brn-lycra.jpg'
  },
  {
    id: 55,
    articleNo: 'JV-59',
    colour: 'Orange/Brn Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-59-orange-brn-lycra.jpg'
  },
  {
    id: 56,
    articleNo: 'JV-62',
    colour: 'Beige/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-62-beige-blk-lycra.jpg'
  },
  {
    id: 57,
    articleNo: 'JV-63',
    colour: 'Grey/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-63-grey-blk-lycra.jpg'
  },
  {
    id: 58,
    articleNo: 'JV-65',
    colour: 'Grey/Orange Lycra',
    size: '6 TO 10',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-65-grey-orange-lycra.jpg'
  },
  {
    id: 59,
    articleNo: 'JV-66',
    colour: 'White/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-66-white-blk-lycra.jpg'
  },
  {
    id: 60,
    articleNo: 'JV-67',
    colour: 'Red',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-67-red.jpg'
  },
  {
    id: 61,
    articleNo: 'JV-68',
    colour: 'White/Blk Lycra',
    size: 'SERIES MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-68-white-blk-lycra.jpg'
  },
  {
    id: 62,
    articleNo: 'JV-69',
    colour: 'Red',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-69-red.jpg'
  },
  {
    id: 63,
    articleNo: 'JV-70',
    colour: 'Beige/Blk Lycra',
    size: '6 TO 10,12,13,15',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-70-beige-blk-lycra.jpg'
  },
  {
    id: 64,
    articleNo: 'JV-71',
    colour: 'Yellow/Blue Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-71-yellow-blue-lycra.jpg'
  },
  {
    id: 65,
    articleNo: 'JV-72',
    colour: 'Yellow/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-72-yellow-blue-lycra.jpg'
  },
  {
    id: 66,
    articleNo: 'JV-73',
    colour: 'Blue/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-73-blue-blue-lycra.jpg'
  },
  {
    id: 67,
    articleNo: 'JV-74',
    colour: 'Blue/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-74-blue-blk-lycra.jpg'
  },
  {
    id: 68,
    articleNo: 'JV-75',
    colour: 'Yellow/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-75-yellow-blk-lycra.jpg'
  },
  {
    id: 69,
    articleNo: 'JV-76',
    colour: 'Yellow/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-76-yellow-blk-lycra.jpg'
  },
  {
    id: 70,
    articleNo: 'JV-77',
    colour: 'Blue/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-77-blue-blk-lycra.jpg'
  },
  {
    id: 71,
    articleNo: 'JV-78',
    colour: 'Red/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-78-red-blk-lycra.jpg'
  },
  {
    id: 72,
    articleNo: 'JV-79',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks with Insert',
    category: 'Insocks',
    image: '/products/jv-79-grey-black-lycra.jpg'
  },
  {
    id: 73,
    articleNo: 'JV-80',
    colour: 'Blue/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks with Antistatic',
    category: 'Insocks',
    image: '/products/jv-80-blue-black-lycra.jpg'
  },
  {
    id: 74,
    articleNo: 'JV-81',
    colour: 'Grey/Black Lycra',
    size: 'SERIES MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-81-grey-black-lycra.jpg'
  },
  {
    id: 75,
    articleNo: 'JV-85',
    colour: 'Beige/Beige Lycra',
    size: 'SERIES MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-85-beige-beige-lycra.jpg'
  },
  {
    id: 76,
    articleNo: 'JV-83',
    colour: 'Blue/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-83-blue-blue-lycra.jpg'
  },
  {
    id: 77,
    articleNo: 'JV-84',
    colour: 'Grey/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-84-grey-blue-lycra.jpg'
  },
  {
    id: 78,
    articleNo: 'JV-82',
    colour: 'Blue/Green Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-82-blue-green-lycra.jpg'
  },
  {
    id: 79,
    articleNo: 'JV-86',
    colour: 'Grey/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-86-grey-blue-lycra.jpg'
  },
  {
    id: 80,
    articleNo: 'JV-87',
    colour: 'Blue/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-87-blue-black-lycra.jpg'
  },
  {
    id: 81,
    articleNo: 'JV-88',
    colour: 'Beige/Beige Lycra',
    size: 'SERIES MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-88-beige-beige-lycra.jpg'
  },
  {
    id: 82,
    articleNo: 'JV-89',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-89-grey-black-lycra.jpg'
  },
  {
    id: 83,
    articleNo: 'JV-90',
    colour: 'Orange/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-90-orange-black-lycra.jpg'
  },
  {
    id: 84,
    articleNo: 'JV-91',
    colour: 'Grey/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-91-grey-blue-lycra.jpg'
  },
  {
    id: 85,
    articleNo: 'JV-92',
    colour: 'Beige/Black Lycra',
    size: 'SERIES MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-92-beige-black-lycra.jpg'
  },
  {
    id: 86,
    articleNo: 'JV-94',
    colour: 'Blue/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-94-blue-black-lycra.jpg'
  },
  {
    id: 87,
    articleNo: 'JV-95',
    colour: 'Blue/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-95-blue-black-lycra.jpg'
  },
  {
    id: 88,
    articleNo: 'JV-96',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-96-grey-black-lycra.jpg'
  },
  {
    id: 89,
    articleNo: 'JV-97',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-97-grey-black-lycra.jpg'
  },
  {
    id: 90,
    articleNo: 'JV-99',
    colour: 'Blue/Black Lycra',
    size: 'SERIES MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-99-blue-black-lycra.jpg'
  },
  {
    id: 91,
    articleNo: 'JV-100',
    colour: 'Beige/Grey Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-100-beige-grey-lycra.jpg'
  },
  {
    id: 92,
    articleNo: 'JV-101',
    colour: 'Beige/Grey Lycra',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-101-beige-grey-lycra.jpg'
  },
  {
    id: 93,
    articleNo: 'JV-102',
    colour: 'Beige/Grey Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-102-beige-grey-lycra.jpg'
  },
  {
    id: 94,
    articleNo: 'JV-103',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-103-grey-black-lycra.jpg'
  },
  {
    id: 95,
    articleNo: 'JV-104',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-104-grey-black-lycra.jpg'
  },
  {
    id: 96,
    articleNo: 'JV-105',
    colour: 'Orange/Black Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-105-orange-black-lycra.jpg'
  },
  {
    id: 97,
    articleNo: 'JV-106',
    colour: 'Beige/Green Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-106-beige-green-lycra.jpg'
  },
  {
    id: 98,
    articleNo: 'JV-107',
    colour: 'Grey/Blue Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-107-grey-blue-lycra.jpg'
  },
  {
    id: 99,
    articleNo: 'JV-108',
    colour: 'Orng/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-108-orng-blk-lycra.jpg'
  },
  {
    id: 100,
    articleNo: 'JV-109',
    colour: 'Orng/Blk Lycra',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-109-orng-blk-lycra.jpg'
  },
  {
    id: 101,
    articleNo: 'JV-112',
    colour: 'Grey/Black Lycra',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-112-grey-black-lycra.jpg'
  },
  {
    id: 102,
    articleNo: 'JV-113',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-113-grey-black-lycra.jpg'
  },
  {
    id: 103,
    articleNo: 'JV-114',
    colour: 'Orange/Tan Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-114-orange-tan-lycra.jpg'
  },
  {
    id: 104,
    articleNo: 'JV-115',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-115-grey-black-lycra.jpg'
  },
  {
    id: 105,
    articleNo: 'JV-116',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-116-grey-black-lycra.jpg'
  },
  {
    id: 106,
    articleNo: 'JV-117',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-117-grey-black-lycra.jpg'
  },
  {
    id: 107,
    articleNo: 'JV-118',
    colour: 'Grey/Black Lycra',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-118-grey-black-lycra.jpg'
  },
  {
    id: 108,
    articleNo: 'JV-119',
    colour: 'Grey/Black Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-119-grey-black-lycra.jpg'
  },
  {
    id: 109,
    articleNo: 'JV-120',
    colour: 'Grey/Blue Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-120-grey-blue-lycra.jpg'
  },
  {
    id: 110,
    articleNo: 'JV-121',
    colour: 'Grey/Orange Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-121-grey-orange-lycra.jpg'
  },
  {
    id: 111,
    articleNo: 'JV-122',
    colour: 'Orange/Mesh Fabric',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-122-orange-mesh-fabric.jpg'
  },
  {
    id: 112,
    articleNo: 'JV-124',
    colour: 'Grey/Blue Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-124-grey-blue-lycra.jpg'
  },
  {
    id: 113,
    articleNo: 'JV-125',
    colour: 'Orange/Black Suede',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-125-orange-black-suede.jpg'
  },
  {
    id: 114,
    articleNo: 'JV-126',
    colour: 'Grey/Grey Digital PRN',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-126-grey-grey-digital-prn.jpg'
  },
  {
    id: 115,
    articleNo: 'JV-127',
    colour: 'Blk/Grey Digital PRN',
    size: '8, 10,11,13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-127-blk-grey-digital-prn.jpg'
  },
  {
    id: 116,
    articleNo: 'JV-128',
    colour: 'Orange/Black',
    size: '6 TO 10',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-128-orange-black.jpg'
  },
  {
    id: 117,
    articleNo: 'JV-130',
    colour: 'Blk/Red Liberty',
    size: '4 TO 14',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-130-blk-red-liberty.jpg'
  },
  {
    id: 118,
    articleNo: 'JV-131',
    colour: 'Blk/Red Liberty',
    size: '4 TO 13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-131-blk-red-liberty.jpg'
  },
  {
    id: 119,
    articleNo: 'JV-132',
    colour: 'Orange/Red Liberty',
    size: '3 TO 13',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-132-orange-red-liberty.jpg'
  },
  {
    id: 120,
    articleNo: 'JV-133',
    colour: 'Beige/Blk Liberty',
    size: '4 TO 12',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-133-beige-blk-liberty.jpg'
  },
  {
    id: 121,
    articleNo: 'JV-134',
    colour: 'Green/Blk Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image:  '/products/jv-134.png'// REVIEW: no product image on this slide — needs mapping
  },
  {
    id: 122,
    articleNo: 'JV-135',
    colour: 'Orange/Blk Mesh',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-135.png'// REVIEW: no product image on this slide — needs mapping
  },
  {
    id: 123,
    articleNo: 'JV-136',
    colour: 'Green/Blk Lycra',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-136.png' // REVIEW: no product image on this slide — needs mapping
  },
  {
    id: 124,
    articleNo: 'JV-137',
    colour: 'Orange/Blk Liberty',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-137-orange-blk-liberty.jpg'
  },
  {
    id: 125,
    articleNo: 'JV-138',
    colour: 'Orange/Red Liberty',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-138-orange-red-liberty.jpg'
  },
  {
    id: 126,
    articleNo: 'JV-139',
    colour: 'Grey/Blk Lycra',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-139-grey-blk-lycra.jpg'
  },
  {
    id: 127,
    articleNo: 'JV-140',
    colour: 'Light Blue',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/jv-140-light-blue.jpg'
  },
  {
    id: 128,
    articleNo: 'MEMORY FOAM', // REVIEW: article no. shared with next item (MEMORY FOAM, Tan)
    colour: 'Navy Blue',
    size: '', // REVIEW: blank on slide
    material: '', // REVIEW: blank on slide
    soleType: 'Memory Foam with Lycra',
    category: 'Insocks',
    image: '/products/memory-foam-navy-blue.jpg'
  },
  {
    id: 129,
    articleNo: 'MEMORY FOAM', // REVIEW: article no. shared with previous item (MEMORY FOAM, Navy Blue)
    colour: 'Tan',
    size: '', // REVIEW: blank on slide
    material: '', // REVIEW: blank on slide
    soleType: 'Memory Foam with Lycra',
    category: 'Insocks',
    image: '/products/memory-foam-tan.jpg'
  },
  {
    id: 130,
    articleNo: 'REBEL',
    colour: 'Black/Memory Foam',
    size: '6 TO 9,11,13,16',
    material: 'PU',
    soleType: 'PU Insocks with Memory Foam Poron Logo',
    category: 'Insocks',
    image: '/products/rebel-black-memory-foam.jpg'
  },
  {
    id: 131,
    articleNo: 'BARRY',
    colour: 'Dark Black',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/barry-dark-black.jpg'
  },
  {
    id: 132,
    articleNo: 'DELL',
    colour: 'Orange',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/dell-orange.jpg'
  },
  {
    id: 133,
    articleNo: 'OO3', // REVIEW: written with letters "OO3" on slide — confirm vs "003"
    colour: 'Grey/Blk Suede',
    size: '3,4,5,7,8',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/oo3-grey-blk-suede.jpg'
  },
  {
    id: 134,
    articleNo: 'POPCORN INSERT',
    colour: 'Yellow',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Heel Insert', // REVIEW: heel insert — confirm category "Insocks"
    category: 'Insocks',
    image: '/products/popcorn-insert-yellow.jpg'
  },
  {
    id: 135,
    articleNo: 'WONDER',
    colour: 'Dark Black',
    size: '6,8 TO 12',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/wonder-dark-black.jpg'
  },
  {
    id: 136,
    articleNo: 'VEGAS',
    colour: 'Black',
    size: '6 TO 11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/vegas-black.jpg'
  },
  {
    id: 137,
    articleNo: 'SOUTH',
    colour: 'Grey',
    size: '36,37,39,40,41,43,44,45',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/south-grey.jpg'
  },
  {
    id: 138,
    articleNo: 'GRAPE',
    colour: 'Yellow',
    size: '6 TO 10',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/grape-yellow.jpg'
  },
  {
    id: 139,
    articleNo: 'NET',
    colour: 'Dark Brown',
    size: '7 TO 11',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/net-dark-brown.jpg'
  },
  {
    id: 140,
    articleNo: 'BOND',
    colour: 'Dark Brown',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/bond-dark-brown.jpg'
  },
  {
    id: 141,
    articleNo: 'MOK',
    colour: 'Dark Brown',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/mok-dark-brown.jpg'
  },
  {
    id: 142,
    articleNo: 'FALCON',
    colour: 'Brown',
    size: '6 TO 10',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/falcon-brown.jpg'
  },
  {
    id: 143,
    articleNo: 'SHEET',
    colour: 'Grey',
    size: 'SERIES',
    material: 'PU',
    soleType: 'PU Sheet', // REVIEW: PU sheet — confirm category "Insocks"
    category: 'Insocks',
    image: '/products/sheet-grey.jpg'
  },
  {
    id: 144,
    articleNo: 'BRICK',
    colour: 'Black',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/brick-black.jpg'
  },
  {
    id: 145,
    articleNo: 'GLASS',
    colour: 'Black',
    size: 'SAMPLE',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/glass-black.jpg'
  },
  {
    id: 146,
    articleNo: 'SMITH',
    colour: 'Black',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/smith-black.jpg'
  },
  {
    id: 147,
    articleNo: 'TEXAS',
    colour: 'Grey',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insock', // REVIEW: slide says "PU INSOCK" (singular)
    category: 'Insocks',
    image: '/products/texas-grey.jpg'
  },
  {
    id: 148,
    articleNo: 'CALIFORNIA',
    colour: 'Grey',
    size: 'SAMPLE MOULD',
    material: 'PU',
    soleType: 'PU Insocks',
    category: 'Insocks',
    image: '/products/california-grey.jpg'
  }
];

export default products;
