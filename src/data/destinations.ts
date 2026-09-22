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
  },
]