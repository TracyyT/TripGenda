import type { Destination } from '../types/destination'

export const destinations: Destination[] = [
  {
    id: 1,
    city: 'San Diego',
    state: 'California',
    description: 'Beaches, good food, and easygoing days.',
    image:
      'https://images.unsplash.com/photo-1538964173425-93884d739596',
    tags: ['Beach', 'Food', 'Relaxed'],
    temperature: 'warm',
    vibes: ['beach', 'food', 'relaxing'],
    activityLevels: ['relaxed', 'balanced', 'active'],
    idealTripLength: { min: 3, max: 6 },
  },
  {
    id: 2,
    city: 'Seattle',
    state: 'Washington',
    description: 'Coffee, city views, and nearby nature.',
    image:
      'https://images.unsplash.com/photo-1502175353174-a7a70e73b362',
    tags: ['City', 'Nature', 'Food'],
    temperature: 'mild',
    vibes: ['city', 'food', 'nature'],
    activityLevels: ['relaxed', 'balanced', 'active'],
    idealTripLength: { min: 3, max: 5 },
  },
{
    id: 3,
    city: 'New York',
    state: 'New York',
    description: 'Food, neighborhoods, shopping, and nonstop energy.',
    image:
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80',
    tags: ['City', 'Food', 'Shopping'],
    temperature: 'mild',
    vibes: ['city', 'food', 'adventure'],
    activityLevels: ['balanced', 'active'],
    idealTripLength: { min: 4, max: 7 },
  },
  {
    id: 4,
    city: 'Sedona',
    state: 'Arizona',
    description: 'Red rocks, scenic trails, and desert sunsets.',
    image:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    tags: ['Nature', 'Adventure', 'Relaxed'],
    temperature: 'warm',
    vibes: ['mountains', 'nature', 'relaxing', 'adventure'],
    activityLevels: ['balanced', 'active'],
    idealTripLength: { min: 2, max: 4 },
  },
  {
    id: 5,
    city: 'Miami',
    state: 'Florida',
    description:
        'A lively coastal city with beaches, food, nightlife, and warm weather.',
    image:
        'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Beach', 'Food', 'City'],
    temperature: 'hot',
    vibes: ['beach', 'city', 'food', 'adventure'],
    activityLevels: ['balanced', 'active'],
    idealTripLength: { min: 3, max: 5 },
    },
    {
    id: 6,
    city: 'Denver',
    state: 'Colorado',
    description:
        'A city-meets-outdoors destination with easy access to mountain adventures.',
    image:
        'https://images.unsplash.com/photo-1619856699906-09e1f58c98b1?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mountains', 'City', 'Outdoors'],
    temperature: 'mild',
    vibes: ['mountains', 'city', 'nature', 'adventure'],
    activityLevels: ['balanced', 'active'],
    idealTripLength: { min: 3, max: 6 },
    },
    {
    id: 7,
    city: 'Charleston',
    state: 'South Carolina',
    description:
        'A charming coastal city known for historic streets, local food, and a slower pace.',
    image:
        'https://images.unsplash.com/photo-1564758564525-7d5c3ee6c6c6?auto=format&fit=crop&w=1200&q=80',
    tags: ['Food', 'Coastal', 'Relaxing'],
    temperature: 'warm',
    vibes: ['food', 'city', 'relaxing'],
    activityLevels: ['relaxed', 'balanced'],
    idealTripLength: { min: 2, max: 4 },
    },
    {
    id: 8,
    city: 'Chicago',
    state: 'Illinois',
    description:
        'A lakefront city packed with architecture, neighborhoods, food, and entertainment.',
    image:
        'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1200&q=80',
    tags: ['City', 'Food', 'Architecture'],
    temperature: 'mild',
    vibes: ['city', 'food', 'adventure'],
    activityLevels: ['balanced', 'active'],
    idealTripLength: { min: 3, max: 5 },
    },
    {
    id: 9,
    city: 'Honolulu',
    state: 'Hawaii',
    description:
        'A tropical destination combining beaches, hiking, local food, and island scenery.',
    image:
        'https://images.unsplash.com/photo-1507876466758-bc54f384809c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Beach', 'Nature', 'Food'],
    temperature: 'hot',
    vibes: ['beach', 'nature', 'food', 'relaxing', 'adventure'],
    activityLevels: ['relaxed', 'balanced', 'active'],
    idealTripLength: { min: 5, max: 8 },
    },
    {
    id: 10,
    city: 'Portland',
    state: 'Oregon',
    description:
        'A laid-back city with coffee, food, creative neighborhoods, and nearby nature.',
    image:
        'https://images.unsplash.com/photo-1628783629868-19fb7eb52e2a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Food', 'Nature', 'City'],
    temperature: 'mild',
    vibes: ['city', 'food', 'nature', 'relaxing'],
    activityLevels: ['relaxed', 'balanced'],
    idealTripLength: { min: 3, max: 5 },
    },
    {
    id: 11,
    city: 'Asheville',
    state: 'North Carolina',
    description:
        'A smaller mountain city with scenic drives, hiking, local food, and a relaxed atmosphere.',
    image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mountains', 'Nature', 'Food'],
    temperature: 'mild',
    vibes: ['mountains', 'nature', 'food', 'relaxing'],
    activityLevels: ['relaxed', 'balanced', 'active'],
    idealTripLength: { min: 2, max: 4 },
    },
    {
    id: 12,
    city: 'Austin',
    state: 'Texas',
    description:
        'An energetic city getaway with live entertainment, food, outdoor spaces, and busy neighborhoods.',
    image:
        'https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1200&q=80',
    tags: ['City', 'Food', 'Outdoors'],
    temperature: 'hot',
    vibes: ['city', 'food', 'adventure', 'quick-getaway'],
    activityLevels: ['balanced', 'active'],
    idealTripLength: { min: 2, max: 4 },
    },
]