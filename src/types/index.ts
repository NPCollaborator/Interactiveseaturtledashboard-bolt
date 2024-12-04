export interface TurtleData {
  id: string;
  species: string;
  location: string;
  status: 'rescued' | 'rehabilitating' | 'released';
  rescueDate: string;
}

export interface MapLocation {
  id: string;
  name: string;
  type: 'stranding' | 'rescue-center' | 'release-site';
  coordinates: [number, number];
  description: string;
}